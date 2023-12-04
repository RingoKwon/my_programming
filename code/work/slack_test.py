
import awswrangler  as wr
import pandas as pd
import pymysql
import datetime
import requests
import json

sql_query = """
with ubl_raw as  (
/*
user_id 병합 쿼리 작업
referal 쿼리 작업 cohort
*/
select
  from_iso8601_timestamp(json_extract_scalar(user_properties, '$.first_at'))  + interval '9' hour AS first_at
, client_access_time as reg_ts
, cast( json_extract_scalar ( event_properties , '$.stay_time_seconds') as integer) as stay_time
, case
    when device like 'Web%' then case when device like '%Mobile%'  then 'mobile_web'
                                when device like '%Desktop%' then  'desktop'  end
    when device like 'App%' then 'App'

end as device_type
-- , row_number ( ) over ( partition by uuid order by client_access_time ) rn
, case when
    navigation  in (
    'home'
        ,'unlimited_call_and_data_plans_ranking'
        ,'unlimited_data_plans_ranking'
        ,'carrier_detail'
    ,'search_phones'
        , 'phone_detail'
        , 'phone_contents'
            ,'contents_detail'
    ,'faq'
    ,    'faq_detail'
    ,'search_plans'
        ,'plan_detail'
        ,'affiliated_curation_page'
    ,'events'
        ,'event_detail'
    ,'search_internets'
    ,'qna_home'
        ,'qna_post_detail'
    ,'my_page'
        ,'guide'
            ,'guide_detail'
        ,'notice'
        ,'wishlist'
        ,'applied_plans'
        ,'recently_plans'
        ,'alarm_setting'
        ,'creditcard_list'
        ,   'card_detail'
        ,'oversea_usimsa'
        ,'internet_speed_test_start'
        ,'account_management'
    )
    or navigation like 'plan_finder_%'
    or  navigation like 'phone_calculator_%'
then 1 else 0 end is_coremoyo
, json_extract_scalar(user_properties, '$.exp_all_no_huddle_empty_absolute_control_group') absolute_control
, row_number() over (partition by uuid order by client_access_time  ) rn
, json_extract_scalar(user_properties, '$.initial_utm_medium') initial_utm_medium
, json_extract_scalar(user_properties, '$.initial_utm_source') initial_utm_source
, json_extract_scalar(user_properties, '$.initial_utm_campaign') initial_utm_campaign
, *
/*
 , json_extract_scalar(user_properties, '$.')
*/
from moyo_logs.user_behavior_logs
where 1=1
    and date_ymd >= '2023-04-06'

)
-- user cohort
, first_navi as (
select
*
from ubl_raw
where 1=1
    and rn = 1
)
, user_agg as (
select
 uuid
 , sum( stay_time ) as stay_time
 , sum ( case when is_coremoyo = 1 then stay_time  end )  as stay_time_core
 , sum ( case when category = 'apply' and object_type = 'plan' then 1 end ) as apply_cnt
 , sum (case when category = 'pageview' and object_type = 'plan_detail' then 1 end ) as pv_cnt
from ubl_raw
group by 1
)
---
, ubl_trim as (
select
a.uuid -- device_id
, a.user_id -- user_id
, a.absolute_control  --23.4.11 배포
, a.device_type
, a.reg_ts -- 이벤트 생성일
, a.first_at as user_first_at  -- uuid 생성일
, a.date_ymd  --
, a.navigation
, a.is_coremoyo -- moyo 내부지면
, a.category  --
, a.object_type
, a.object_section
, a.rn -- uuid 별 이벤트 생성 순서
, a.stay_time  as stay_time_sec  -- navigation 별 소비시간
, a.initial_utm_source -- 최초 utm
, a.initial_utm_medium
, a.initial_utm_campaign
, b.navigation as user_first_navi  -- 첫 랜딩 지면
-- , b.external_referer_url as  first_referer
, 1.00* c.stay_time /60 as user_stay_time_all_min -- uuid 가 소비한 total 시간
, 1.00* c.stay_time_core /60 as user_stay_time_core_min -- uuid가 moyo 내부지면에서 소비한 total 시간
, c.apply_cnt  as user_apply_cnt -- uuid의 요금제 가입 수
, c.pv_cnt as user_pv_cnt
, 1.00* date_diff ( 'second' , a.first_at , a.reg_ts )/60  as first_to_event_min -- uuid 생성일과 이벤트 생성일간의 차이
, a.object_id
, a.object_name
from ubl_raw a
join first_navi b on a.uuid = b.uuid
join user_agg c on a.uuid = c.uuid
where 1=1
-- and first_at is not null
and (date( a.date_ymd) >= date( '2023-04-06')
        -- and date( date_ymd)
            -- < date(current_timestamp AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Seoul')
            -- < date( '2023-04-06')
    )
)

/*  자주 사용하는 이벤트
 and category = 'apply' and object_type = 'plan'
 and navigation  = 'rocket_apply_complete' and category = 'server'
 and and category = 'apply' and object_type = 'plan'
*/
, raw_prep as (
select
case when user_first_at is not null then 1 else 0 end first_at_not_null
, *
from ubl_trim
where 1=1
    and user_first_at is not null
)
, final as (
select
 absolute_control
, is_coremoyo
, case when user_first_navi in ( 'guide_detail', 'contents_detail')
            or initial_utm_campaign like 'test%'
    or( category= 'pageview' and navigation = 'affiliate_landing' and  object_id like '%paybooc%' and object_id like '%landing%'  and date(reg_ts ) >= date( '2023-04-20') )
    then 1 else 0 end as is_target
 , case when user_fiRst_navi = 'guide_detail' then 'guide_detail'
        when user_first_navi = 'contents_detail' then 'contents_detail'
        when  initial_utm_campaign like 'test%' then initial_utm_campaign
        when ( category= 'pageview' and navigation = 'affiliate_landing' and  object_id like '%paybooc%' and object_id like '%landing%' and date(reg_ts ) >= date( '2023-04-20') )
                then 'paybooc'
            end as Pop_source
, date( user_first_at ) as reg_ts
,count(  distinct case when   user_pv_cnt >= 3 or user_apply_cnt >= 1 then uuid end) as cvr_cnt
,count(  distinct case when first_to_event_min between 0 and  48*60 /*48시간 */
                            and  (user_pv_cnt >= 3 or user_apply_cnt >= 1) then uuid end ) as cvr_cnt_cw48
,count(  distinct case when first_to_event_min between 0 and  24*60
                            and  (user_pv_cnt >= 3 or user_apply_cnt >= 1) then uuid end ) as cvr_cnt_cw24
,count(  distinct case when first_to_event_min between 0 and  72*60
                            and  (user_pv_cnt >= 3 or user_apply_cnt >= 1) then uuid end ) as cvr_cnt_cw72
,count(  distinct case when first_to_event_min between 0 and  96*60
                            and  (user_pv_cnt >= 3 or user_apply_cnt >= 1) then uuid end ) as cvr_cnt_cw96

, count( distinct uuid ) as uuid_cnt
from raw_prep
group by 1,2,3,4,5
)
, final2 as (
select
reg_ts
, absolute_control
, sum (uuid_cnt) as uuid_cnt
, sum (cvr_cnt_cw24) as cvr_cnt
from final
where 1=1
    and is_target = 1
    and absolute_control is not null
group by 1,2
)
, final3 as (
select
    *
, row_number() over (order by reg_ts desc  ) as rn
, DENSE_RANK() over ( order by reg_ts desc ) as dr
from final2
where 1=1
)
, final4 as (
select
    reg_ts
, 1.00* cvr_cnt/uuid_cnt as cvr
, absolute_control
from final3
where 1=1
    and dr in ( 3,4,5 ,6, 7,8 ,9,10,11,12,13,14)
)
, final5 as (
select
reg_ts
, max (  case when absolute_control = 'control' then cvr end ) as control
, max (  case when absolute_control = 'experimental' then cvr end ) as experimental
from final4
where 1=1
group by 1
-- - control
-- experimental
                )
select
    *
, 1.00*experimental / control - 1 as uplift
from final5
order by 1 desc
"""

df = wr.athena.read_sql_query(sql=sql_query, database="moyo_logs")
from datetime import datetime, timedelta
import pytz

# Get the current time in UTC
now_utc = datetime.now(pytz.utc)

# Convert the current time to South Korea's timeone
seoul_tz = pytz.timezone('Asia/Seoul')
now_seoul = now_utc.astimezone(seoul_tz)

# Subtract one day to get yesterday's date
yesterday_seoul = now_seoul - timedelta(days=1)

# Format the date in a short form
short_date = yesterday_seoul.strftime('%y/%m/%d')

print(f"Yesterday's date in short form: {short_date}")

import math

df.reg_ts = df.reg_ts.apply(str)
df.uplift = df.uplift.apply(lambda x: math.floor(x * 100))
a = list(df.uplift)
a.reverse()
b = list(map(str, df.reg_ts.values.tolist()))
b.reverse()
df  = df.sort_index(ascending=True)

import json5
import requests
from urllib import parse

# Replace 'your_webhook_url_here' with your actual webhook URL
webhook_url = "https://hooks.slack.com/services/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"

data = {
    'type': 'bar',
    'data': {
        'labels': b,
        'datasets': [{
            'label': 'KR:완전대조군대비730%달성',
            'data': a,
            'fill': False,
            'borderColor': '#566fee',
        }],
    },
    'options': {
        'plugins': {
            'datalabels': {
                'anchor': 'end',
                'align': 'top',
                'color': '#425ad5',
                'formatter': 'function (value) { return value + "%" }',
            }
        }
    }
}

data = str(json5.dumps(data))
formatter_start = data.find('formatter: ')

if formatter_start != -1:
    data = data[:formatter_start] + data[formatter_start:].replace('"', '').replace('\\', '"')

encoded_data = parse.urlencode({ 'backgroundColor': '#ffffff', 'c': data })

# Define the QuickChart URL (replace this with your actual chart URL)
chart_url = f"https://quickchart.io/chart?{encoded_data}"

# Construct the Slack message payload
payload = {
    "blocks": [
        {
            "type": "image",
            "title": {
                "type": "plain_text",
                "text": "Sample Chart"
            },
            "image_url": chart_url,
            "alt_text": "A sample bar chart"
        }
    ]
}

# Send the Slack message with the chart image using the webhook
response = requests.post(
    webhook_url,
    data=json.dumps(payload),
    headers={'Content-Type': 'application/json'}
)

if response.status_code == 200:
    print("Message sent")
else:
    print(f"Error sending message: {response.status_code}")



webhook_url = "https://hooks.slack.com/services/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" # Replace this with your webhook URL

def send_slack_message(text):
    payload = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": f'''>*허들이 있는 모두가 알뜰폰 가입을 하고 싶게 만든다*\n  KR:완전대조군대비730%달성 ({b[-1]}일 기준)'''
			}
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": f"*KR* : {a[-1]}%"
				},
				{
					"type": "mrkdwn",
					"text": F"*달성률* : {round(a[-1]/730,2)}%"
				}
			]
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "OKR문서"
					},
					"url": "https://www.notion.so/moyoplan/OKR-c1b3a17a86c5465ea7c58da48fb32cfd?pvs=4",
					"action_id": "Open Objective"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "KR Dashboard"
					},
					"url": "https://prod-apnortheast-a.online.tableau.com/#/site/moyoplan/views/_OKR_v2/OKR?:iid=1",
					"action_id": "Open Dashboard"
				}
			]
		}
	]
}
    response = requests.post(webhook_url, data=json.dumps(payload), headers={"Content-Type": "application/json"})
    return response

# Replace "Your message here" with the message you want to send
# send_slack_message(f"Your message here:\n{a_column_str}\n <"https://www.naver.com/"|'ss'>")
send_slack_message(f"Your message here:\n{a}\n <https://www.naver.com|ss>")
#
