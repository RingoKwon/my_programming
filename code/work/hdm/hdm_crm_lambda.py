import awswrangler  as wr
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pymysql
import datetime
import json
# load sql
sql = '''
with raw as (
select
a.*
,REPLACE(a.phone_number, '+82 ', '0') as phone_number_adj
, SUBSTR(CAST( a.birthday as  VARCHAR), 3, 1) as  first_year
, cast (concat('',SUBSTR(CAST( a.birthday as  VARCHAR), 3, 2)) as integer)  as bitrth_y_last2
from moyo_data.moyo_user_v2 a
join moyo_scraping.mno_scraping_request b on a.id = b.user_id and b.status = 'COMPLETED'
where 1=1
    and a.marketing_consent = 1
    and a.user_status = 'active'
)
, age as (
select
*
, gender
, case when first_year in ( '0','1','2') then 2000+ bitrth_y_last2 else 1900 + bitrth_y_last2 end as birth_year
,2023 -  case when first_year in ( '0','1','2') then 2000+ bitrth_y_last2 else 1900 + bitrth_y_last2 end as age
, row_number() over (partition by phone_number order by reg_ts desc) as rn
from raw
)
select
 profile
, kakao_id
, email
, reg_ts
, birthday
, phone_number
, phone_number_adj
, age
, case when age <= 5 then '0-5'
    when age >5 and age <= 10 then '5-10'
    when age >10 and age <= 15 then '10-15'
    when age > 15 and age <= 20 then '15-20'
    when age >20 and age <= 25 then '20-25'
    when age >25 and age <= 30 then '25-30'
    when age >30 and age <= 35 then '30-35'
    when age >35 and age <= 40 then '35-40'
    when age >40 and age <= 45 then '40-45'
    when age >45 and age <= 50 then '45-50'
    when age >50 and age <= 55 then '50-55'
    when age >55 and age <= 60 then '55-60'
    when age >60 and age <= 65 then '60-65'
    when age >65 and age <= 70 then '65-70'
    when age >70 and age <= 75 then '70-75'
    when age >75 and age <= 80 then '75-80'
    when age >80 and age <= 85 then '80-85'
    when age >85 and age <= 90 then '85-90'
    when age >90 and age <= 95 then '90-95'
    when age >95 and age <= 100 then '95-100'
    else '100+' end as age_range
from age
where 1=1
    and rn =  10 
'''
df = wr.athena.read_sql_query(sql=sql, database="moyo_order")
#####################################################################################
df.head()

randnum = []
for i in range(len(df)):
    np.random.seed(1)
    randnum.append(np.random.rand(len(df))[i])
    print( np.random.rand(len(df))[i])

df['randnum'] = randnum

bucket = 'moyo-mart'
table_name = 'hdm_crm_v1'
res = wr.s3.to_parquet(
        df=df,
        path=f"s3://{bucket}/{table_name}/",
        dataset=True,
        database="moyo_mart",
        table=table_name,
        mode="overwrite",
        dtype={'birthday': 'string'}  # Add this line
        # partition_cols=['date_ym']
    )

