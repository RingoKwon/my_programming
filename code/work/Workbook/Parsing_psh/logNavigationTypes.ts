enum LogNavigationType {
  // 재고 알리미
  STOCK_ALARM_STOCK = 'stock_alarm_stock', // 재고 알리미 - 재고
  STOCK_ALARM_STOCK_LANDING = 'stock_alarm_stock_landing', // 재고 알리미 - 재고 랜딩
  STOCK_ALARM_BENEFIT_COMPARE = 'stock_alarm_benefit_compare', // 재고 알리미 - 혜택 비교
  STOCK_ALARM_EVENT = 'stock_alarm_event', // 재고 알리미 - 이벤트
  STOCK_ALARM_RECOMMEND = 'stock_alarm_recommend', // 재고 알리미 - 추천
  STOCK_ALARM_ALARMS = 'stock_alarm_alarms', // 재고 알리미 - 알림 설정

  // 휴대폰 아끼는 금액 확인
  STOCK_ALARM_PLAN_FINDER_DAILY_DATA = 'stock_alarm_plan_finder_daily_data', // 휴대폰 싸게 사는 법 찾기 - 데이터 선택
  STOCK_ALARM_PLAN_FINDER_DAILY_VOICE = 'stock_alarm_plan_finder_daily_voice', // 휴대폰 싸게 사는 법 찾기 - 통화량 선택
  STOCK_ALARM_PLAN_FINDER_PREFER_MNO = 'stock_alarm_plan_finder_prefer_mno', // 휴대폰 싸게 사는 법 찾기 - 선호 통신사 여부 선택
  STOCK_ALARM_PLAN_FINDER_SELECT_MNO = 'stock_alarm_plan_finder_select_mno', // 휴대폰 싸게 사는 법 찾기 - 선호 통신사 선택
  STOCK_ALARM_PLAN_FINDER_SELECT_RESULT = 'stock_alarm_plan_finder_select_result', // 휴대폰 싸게 사는 법 찾기 - 결과

  // 휴대폰 싸게 사는 법 찾기
  PHONE_CALCULATOR_INTRO = 'phone_calculator_intro', // 휴대폰 싸게 사는 법 찾기 - 인트로
  PHONE_CALCULATOR_PHONE_SELECT = 'phone_calculator_phone_select', // 휴대폰 싸게 사는 법 찾기 - 휴대폰 선택
  PHONE_CALCULATOR_DAILY_DATA = 'phone_calculator_daily_data', // 휴대폰 싸게 사는 법 찾기 - 데이터 선택
  PHONE_CALCULATOR_DAILY_VOICE = 'phone_calculator_daily_voice', // 휴대폰 싸게 사는 법 찾기 - 통화량 선택
  PHONE_CALCULATOR_PREFER_MNO = 'phone_calculator_prefer_mno', // 휴대폰 싸게 사는 법 찾기 - 선호 통신사 여부 선택
  PHONE_CALCULATOR_SELECT_MNO = 'phone_calculator_select_mno', // 휴대폰 싸게 사는 법 찾기 - 선호 통신사 선택
  PHONE_CALCULATOR_SELECT_RESULT = 'phone_calculator_select_result', // 휴대폰 싸게 사는 법 찾기 - 결과

  // 내게 맞는 요금제
  PLAN_FINDER = 'plan_finder', // 내게 맞는 요금제 진입
  PLAN_FINDER_MNO = 'plan_finder_mno', // 사용중인 통신사 입력
  PLAN_FINDER_LOGIN_MNO = 'plan_finder_login_mno', // 통신사 로그인
  PLAN_FINDER_KAKAO_LOGIN = 'plan_finder_kakao_login', // 내맞요 > 카카오 로그인
  PLAN_FINDER_SOMEONE = 'plan_finder_someone', // 요금제 바꿀 사람 입력
  PLAN_FINDER_AGE = 'plan_finder_age',
  PLAN_FINDER_AGREEMENT = 'plan_finder_agreement', // 약정 여부 확인
  PLAN_FINDER_AGREEMENT_DETAIL = 'plan_finder_agreement_detail',
  PLAN_FINDER_DATA = 'plan_finder_data', // 데이터 사용량 확인
  PLAN_FINDER_DATA_SPEED = 'plan_finder_data_speed', // 데이터 속도 확인
  PLAN_FINDER_VOICE = 'plan_finder_voice', // 통화량 확인
  PLAN_FINDER_MONTHLY_FEE = 'plan_finder_monthly_fee', // 월 통신요금 확인
  PLAN_FINDER_MONTHLY_FEE_SPECIFIC = 'plan_finder_monthly_fee_specific', // 월 통신요금 만원단위로 확인
  PLAN_FINDER_HOWWELKNOWPLAN = 'plan_finder_howwelknowplan', // 요금제 지식 확인
  PLAN_FINDER_USING_PATTERN_REPORT = 'plan_finder_using_pattern_report', // 사용 패턴 레포트
  PLAN_FINDER_RESULT = 'plan_finder_result', // 내게 맞는 요금제 결과
  PLAN_FINDER_DETAILED_RESULT = 'plan_finder_detailed_result', // 내게 맞는 요금제: mno 요금제 직접 선택 후 결과
  PLAN_FINDER_SCRAPPING_RESULT = 'plan_finder_scrapping_result', // 내게 맞는 요금제 결과 (스크래핑)
  PLAN_FINDER_INFLOW_CHANNEL = 'plan_finder_inflow_channel', // 내게 맞는 요금제 유입 채널
  PLAN_FINDER_RECOMMEND_YOU_WANT = 'plan_finder_recommend_you_want',
  PLAN_FINDER_SELECT_PLAN_DIRECTLY = 'plan_finder_select_plan_directly',

  // 내게 맞는 인터넷 요금제
  INTERNET_PLAN_FINDER_HOME_INTERNET = 'internet_plan_finder_home_internet',
  INTERNET_PLAN_FINDER_SELECT_MNO = 'internet_plan_finder_select_mno',
  INTERNET_PLAN_FINDER_SELECT_SPEED = 'internet_plan_finder_select_speed',

  // 내게 맞는 요금제 (스크래핑)
  PLAN_FINDER_SCRAPING_INTRO = 'plan_finder_scraping_intro',
  PLAN_FINDER_SCRAPING_LOADING = 'plan_finder_scraping_loading',
  PLAN_FINDER_SCRAPING_MNO_LOGIN = 'plan_finder_scraping_mno_login',
  PLAN_FINDER_SCRAPING_LOGIN = 'plan_finder_scraping_login',
  PLAN_FINDER_SCRAPING_RESULT = 'plan_finder_scraping_result',
  PLAN_FINDER_SCRAPING_RESULT_RECOMMEND_PLAN = 'plan_finder_scraping_result_recommend_plan',

  DELIVERY_ORDER_LOGIN = 'delivery_order_login', // 유심 신청 퀵 배송 로그인
  DELIVERY_ORDER_LIST = 'delivery_order_list', // 유심 신청 퀵 배송

  USIM_ORDER_LOGIN = 'usim_order_login', // 유심 신청 로그인
  USIM_ORDER = 'usim_order', // 유심 신청
  USIM_ORDER_COMPLETE = 'usim_order_complete', // 유심 신청 완료
  USIM_ORDER_RECIVED = 'usim_order_recived', // 유심 배송 완료
  USIM_ORDER_PLANS = 'usim_order_plans', // 유심 사용 가능한 요금제들

  NADO_ARA_EXPENSIVE = 'nado_ara_expensive', // 나도 알아 비싼거 페이지
  USIM_ORDER_PLAN_SELECT = 'usim_order_plan_select', // 유심 배송 후 요금제 선택화면
  // 간편신청&셀프개통
  ROCKET_LOG_IN = 'rocket_log_in', // 간편신청로그인
  ROCKET_CROSS_SELLING_INTERNET = 'rocket_cross_selling_internet', // 인터넷 크로스 셀링

  ROCKET_TERM_AGREEMENT = 'rocket_term_agreement', // 약관동의
  ROCKET_REGISTER_TYPE = 'rocket_register_type', // 가입유형선택
  ROCKET_HAS_USIM = 'rocket_has_usim', // 유심보유여부확인
  ROCKET_SELECT_USIM = 'rocket_select_usim', // 유심선택
  ROCKET_NEED_NFC_USIM = 'rocket_need_nfc_usim', // eSIM NFC 여부
  ROCKET_ESIM_PASS_CONFIRM = 'rocket_esim_pass_confirm', // esim으로 진행 확인
  ROCKET_USIM_INFO = 'rocket_usim_info', // 가지고 있는 유심 정보 입력
  ROCKET_PHONE_INFO = 'rocket_phone_info', // 셀프개통 - 핸드폰
  ROCKET_PERSONAL_INFO = 'rocket_personal_info', // 개인식별정보 입력
  ROCKET_ADDRESS = 'rocket_address', // 셀프개통 - 주소 입력
  ROCKET_ID_CARD = 'rocket_id_card', // 신분증 활성화
  ROCKET_CERTIFICATION = 'rocket_certification', // 본인인증
  ROCKET_PAYMENT_NOTI_CHANNEL = 'rocket_payment_noti_channel', // 청구서 받을 수단 확인
  ROCKET_NEW_PAYMENT_METHOD = 'rocket_new_payment_method', // 신규요금납부방법
  ROCKET_PAYMENT_METHOD = 'rocket_payment_method', // 요금납부방법 확인
  ROCKET_WISH_NUMBER = 'rocket_wish_number', // 희망번호
  ROCKET_WISH_NUMBER_SELECTION = 'rocket_wish_number_selection', // 희망번호 선택
  ROCKET_DELIVERY_TYPE = 'rocket_delivery_type', // 유심 배송 방법
  ROCKET_DELIVERY_PAYMENT_GUIDE = 'rocket_delivery_payment_guide', // 배로배송 유심 결제 방법
  ROCKET_DELIVERY_PAYMENT = 'rocket_delivery_payment', // 바로배송 유심 결제

  ROCKET_ACTIVATION = 'rocket_activation', // 개통중
  ROCKET_COMPLETED = 'rocket_completed', // 개통완료
  ROCKET_RE_ACTIVATION = 'rocket_re_activation', // 셀프개통 - 재개통
  ROCKET_RE_USIM_INFO = 'rocket_re_usim_info', // 셀프개통 - 재개통 > 유심정보입력
  ROCKET_CHECK_ACTIVATION = 'rocket_check_activation', // 셀프개통 - 개통정보확인
  ROCKET_BASIC_INFO = 'rocket_basic_info', // 셀프개통 - 셀프개통기본정보
  ROCKET_CHECK_CHAGE = 'rocket_check_chage', // 셀프개통 - 번호이동확인
  ROCKET_LINK = 'rocket_link', // 셀프개통 - 셀프개통링크
  ROCKET_EMAIL = 'rocket_email', // 셀프개통 - 이메일청구서
  ROCKET_APPLY_COMPLETE = 'rocket_apply_complete', // 셀프개통 - 신청 완료
  ROCKET_REQUEST_ACTIVATION = 'rocket_request_activation', // 셀프개통 - 개통 요청
  ROCKET_REGISTER_COMPLETE = 'rocket_register_complete', // 신청완료
  ROCKET_REGISTER_ONETONG_COMPLETE = 'rocket_register_onetong_complete', // 원통신청완료
  ROCKET_KIND_OF_PHONE = 'rocket_kind_of_phone', // esim 휴대폰 기종 선택
  ROCKET_ESIM_PHONE_INFO = 'rocket_esim_phone_info', // esim 휴대폰 정보 입력
  ROCKET_ESIM_DEVICE_INFO = 'rocket_esim_device_info', // esim 휴대폰 eid 정보 입력

  APPLIED_PLAN_REQUEST_ACTIVATION = 'applied_plan_request_activation', // 개통 요청 페이지 -> 알림톡 받으면 들어가는 페이지
  APPLIED_PLAN_REQUEST_SELF_ACTIVATION = 'applied_plan_request_self_activation', // 개통 요청 원통 페이지 -> 알림톡 받으면 들어가는 페이지 말고 링크 전달용

  ROCKET_REQUEST_AUTO_ACTIVATION = 'rocket_request_auto_activation', // 시간 외 개통요청 (자동개통)

  // 전화 상담
  CALL_CONSULT = 'call_consult',
  CALL_CONSULT_NEW = 'call_consult_new',
  CALL_CONSULT_SUCCESS = 'call_consult_success',
  CALL_CONSULT_COMPLETE = 'call_consult_complete',
  CALL_CONSULT_COMPLETE_NEW = 'call_consult_complete_new',

  // 분류없음
  GUIDE = 'guide', // 가이드
  CONTENTS = 'contents', // 콘텐츠
  COMMUNITY = 'community', // 커뮤니티
  FAQ = 'faq', // faq
  NOTICE = 'notice', // 공지사항
  APPLY_INTERNET = 'apply_internet', // 인터넷 신청
  LANDING_PAGE = 'landing_page', // 랜딩페이지
  CREDITCARD_LIST = 'creditcard_list', // 신용카드 리스트
  TIMEDEAL_LANDING = 'timedeal_landing', // 신용카드 리스트

  // 질문/답변
  QNA_HOME = 'qna_home', // 질문/답변 홈
  QNA_SEARCH_RESULT = 'qna_search_result', // 질문/답변 검색 결과
  QNA_SEARCH_RESULT_EMPTY = 'qna_search_result_empty', // 질문/답변 검색 결과 없음
  QNA_POST_DETAIL = 'qna_post_detail', // 질문/답변 글 상세
  QNA_POST_CREATE_QUESTION = 'qna_post_create_question', // 질문/답변 질문 작성
  QNA_POST_CREATE_ANSWER = 'qna_post_create_answer', // 질문/답변 답변 작성
  QNA_POLICY = 'qna_policy',

  // 상세페이지
  PLAN_DETAIL = 'plan_detail', // 요금제상세
  CARRIER_DETAIL = 'carrier_detail', // 통신사상세
  PHONE_DETAIL = 'phone_detail', // 자급제 상세
  EVENT_DETAIL = 'event_detail', // 이벤트 상세
  GUIDE_DETAIL = 'guide_detail', // 가이드 상세
  CONTENTS_DETAIL = 'contents_detail', // 컨텐츠 상세
  EDITOR_DETAIL = 'editor_detail', // 컨텐츠 상세
  FAQ_DETAIL = 'faq_detail', // faq 상세
  APPLIED_PLAN_DETAIL = 'applied_plan_detail', // 신청한 요금제 상세
  INTERNET_DETAIL = 'internet_detail', // 인터넷 신청
  CARD_DETAIL = 'card_detail', // 카드 상세
  COMMUNITY_DETAIL = 'community_detail', // 커뮤니티 상세
  INTERNET_PLAN_DETAIL = 'internet_plan_detail', // 인터넷 요금제 상세

  //큐레이션
  CURATION_PAGE = 'curation_page', // 큐레이션 페이지
  CURATION_RANKING_VIDEO = 'curation_ranking_video',
  AFFILIATED_CURATION_PAGE = 'affiliated_curation_page',
  // 1탭
  HOME = 'home', // 홈지면
  UNLIMITED_CALL_AND_DATA_PLANS_RANKING = 'unlimited_call_and_data_plans_ranking', // 데이터&통화 무제한 요금제 랭킹 지면
  UNLIMITED_DATA_PLANS_RANKING = 'unlimited_data_plans_ranking', // 데이터 무제한 요금제 랭킹 지면

  // 2탭
  SEARCH_PLANS = 'search_plans', // 요금제 찾기

  // 3탭
  SEARCH_PHONES = 'search_phones', // 자급제 찾기

  // 4탭 ( pc )
  SEARCH_INTERNETS = 'search_internets', // 인터넷 찾기

  SEARCH_CARDS = 'search_cards', // 카드 찾기

  // 4탭
  EVENTS = 'events', // 이벤트

  // 5탭
  MY_PAGE = 'my_page', // 마이페이지
  WISHLIST = 'wishlist', // 내가 찜한 요금제
  RECENTLY_PLANS = 'recently_plans', // 최근본 요금제
  HONEY_COMBINATION = 'honey_combination', // 핸드폰 꿀조합 계산기
  HOGANG_TEST_RESULT = 'hogang_test_result', // 호갱 테스트 결과
  DISCOUNT_ALARM = 'discount_alarm', // 할인 기간 알림
  WORRY_SOLUTION_RESULT = 'worry_solution_result', // 알뜰폰 초보 고민해결
  APPLIED_PLANS = 'applied_plans', // 신청한 요금제
  PLAN_CHANGE_PLANS_LIST = 'plan_change_plans_list', // 요금제 변경 - 요금제 리스트
  INTERNET_SPEED_TEST_START = 'internet_speed_test_start', // 인터넷 속도
  INTERNET_SPEED_TESTING = 'internet_speed_testing', // 인터넷 속도
  INTERNET_SPEED_TEST_RESULT = 'internet_speed_test_result', // 인터넷 속도
  ACCOUNT_MANAGEMENT = 'account_management',
  USER_WITHDRAWAL = 'user_withdrawal',
  USER_WITHDRAWAL_NOTICE = 'user_withdrawal_notice',
  ALARM_SETTING = 'alarm_setting',
  COUPON_HISTORY = 'coupon_history',

  // 기타
  PHONE_CONTENTS = 'phone_contents', // 폰컨텐츠 (읽을거리)
  RECRUIT_INTERVIEWEE = 'recruit_interviewee', //고객 인터뷰 모집

  // 리다이랙팅
  ALIMTALK_REDIRECTING = 'alimtalk_redirecting', // 알림톡 리다이렉팅
  AD_SEARCH_REDIRECTING = 'ad_search_redirecting', // 알림톡 리다이렉팅

  ESIM_GUIDE = 'esim_guide', // esim 가이드 페이지,

  PHONE_ACTIVATE_GUIDE = 'phone_activate_guide', // 개통 가이드

  // 스크래핑 단계
  SCRAPING_LOGIN_INTRO = 'scraping_login_intro',
  SCRAPING_NAME_AND_BIRTHDAY = 'scraping_name_and_birthday',
  SCRAPING_PHONE = 'scraping_phone',

  NONE = 'none', // 지면이 무관할 때

  // 이커머스 제휴사
  AFFILIATE_LANDING = 'affiliate_landing',
  AFFILIATE_LOADING = 'affiliate_loading',
  AFFILIATE_PLAN_FINDER_SELECT_MNO = 'affiliate_plan_finder_select_mno',
  AFFILIATE_PLAN_FINDER_DAILY_DATA = 'affiliate_plan_finder_daily_data',
  AFFILIATE_PLAN_FINDER_MONTHLY_FEE = 'affiliate_plan_finder_monthly_fee',
  AFFILIATE_PLAN_FINDER_RESULT = 'affiliate_plan_finder_result',

  // 통신 3사 다이렉트 화면 랜딩
  DIRECT_LANDING = 'direct_landing',
  DIRECT_CHOICE = 'direct_choice',
  DIRECT_DETAIL = 'direct_detail',

  // GM 페이지
  // 붕어빵 퀴즈 (K-물가에서 살아남기)
  GM_PRICES_QUIZ_INTRO = 'gm_prices_quiz_intro',
  GM_PRICES_QUIZ_ROUND = 'gm_prices_quiz_round',
  GM_PRICES_QUIZ_LOADING = 'gm_prices_quiz_loading',
  GM_PRICES_QUIZ_RESULT = 'gm_prices_quiz_result',

  // 스크래핑
  GM_CUSTOMIZED_PLAN_SELECT_MNO = 'gm_customized_plan_select_mno',
  GM_ADVANCED_PLAN = 'gm_advanced_plan',
  GM_ADVANCED_PLAN_RESULT = 'gm_advanced_plan_result',
  GM_PLAN_FINDER_INTRO = 'gm_plan_finder_intro',

  // 짧지식 이벤트
  GM_SHORTJISIK_INTRO = 'gm_shortjisik_intro',
  GM_SHORTJISIK = 'gm_shortjisik',

  // 좋은건 좀 나눠 쓰자
  FRIENDS_SHARING_INTRO_LOADING = 'friends_sharing_intro_loading',
  FRIENDS_SHARING_INTRO_READY = 'friends_sharing_intro_ready',
  FRIENDS_SHARING_NICE_JOB = 'friends_sharing_nice_job',
  FRIENDS_SHARING_SURVEY_SATISFACTION = 'friends_sharing_survey_satisfaction',
  FRIENDS_SHARING_SURVEY_INTERNET_SPEED = 'friends_sharing_survey_internet_speed',
  FRIENDS_SHARING_SURVEY_FEEDBACK = 'friends_sharing_survey_feedback',
  FRIENDS_SHARING_RESULT = 'friends_sharing_result',
  FRIENDS_SHARING_SHARE = 'friends_sharing_share',

  GOOGLE_EXPERIMENT_PAGE = 'google_experiment_page',

  // MSafer
  MSAFER = 'msafer',
  MSAFER_NAME_AND_PHONENUMBER = 'msafer_name_and_phonenumber',
  MSAFER_REGISTRATION = 'msafer_registration',
  MSAFER_CERTIFICATION = 'msafer_certification',
  MSAFER_LOADING = 'msafer_loading',
  MSAFER_RESULT = 'msafer_result',
  MSAFER_RESULT_INFO = 'msafer_result_info',

  // 해외유심
  OVERSEA_USIMSA = 'oversea_usimsa',

  GM_TEMPLATE = 'gm_template',

  ERROR_PAGE = 'error_page',

  AFFILIATE_SCRAPING_REPORT = 'affiliate_scraping_report',
  AFFILIATE_SCRAPING_NAME_AND_BIRTHDAY = 'affiliate_scraping_name_and_birthday',
  AFFILIATE_SCRAPING_PHONE = 'affiliate_scraping_phone',
  AFFILIATE_SCRAPING_MNO_LOGIN = 'affiliate_scraping_mno_login',
  // 제휴 스크래핑 결과 - 내 통신 정보
  AFFILIATE_SCRAPING_REPORT_INFO = 'affiliate_scraping_report_info',

  SHORT_PLAN_FINDER_SCRAPING_REPORT = 'short_plan_finder_scraping_report',
  SHORT_PLAN_FINDER_SCRAPING_REPORT_INFO = 'short_plan_finder_scraping_report_info',
  SHORT_PLAN_FINDER_SCRAPING_NAME_AND_BIRTHDAY = 'short_plan_finder_scraping_name_and_birthday',
  SHORT_PLAN_FINDER_SCRAPING_PHONE = 'short_plan_finder_scraping_phone',
  LOGIN_BEFORE_RESULT = 'login_before_result',
  // 법인 개통
  CORPORATION_PLAN_FINDER = 'corporation_plan_finder', // 법인 요찾
  CORPORATION_PLAN_FINDER_RESULT = 'corporation_plan_finder_result', // 법인 요찾 결과
  CORPORATION_PLAN_DETAIL = 'corporation_plan_detail', // 법인 요금제상세
  CORPORATION_PLAN_APPLICATION = 'corporation_plan_application', // 법인 신청
  CORPORATION_PLAN_APPLICATION_V2 = 'corporation_plan_application_v2', // 법인 신청
  CORPORATION_PLAN_APPLICATION_FINISH = 'corporation_plan_application_finish', // 법인 신청 완료
  CORPORATION_PLAN_APPLICATION_FINISH_V2 = 'corporation_plan_application_finish_v2', // 법인 신청 완료
  SIMPLE_PLAN_FINDER_INTRO = 'simple_plan_finder_intro',
  SIMPLE_PLAN_FINDER_REVIEWS = 'simple_plan_finder_reviews',
  SIMPLE_PLAN_FINDER_LOADING = 'simple_plan_finder_loading',
  NEW_PLAN_INTRO = 'new_plan_intro',
  NEW_PLAN_INTRO_FOR_KTSKYLIFE = 'new_plan_intro_for_ktskylife',
  SHORT_PLAN_FINDER_INTRO = 'short_plan_finder_intro',
  SHORT_PLAN_FINDER_LOADING = 'short_plan_finder_loading',
  SHORT_PLAN_FINDER_SELECT_MNO = 'short_plan_finder_select_mno',
  SHORT_PLAN_FINDER_DAILY_DATA = 'short_plan_finder_daily_data',
  SHORT_PLAN_FINDER_MONTHLY_FEE = 'short_plan_finder_monthly_fee',
  SHORT_PLAN_FINDER_RESULT = 'short_plan_finder_result',
  SIMPLE_PLAN_FINDER_SELECT_MNO = 'simple_plan_finder_select_mno',
  SIMPLE_PLAN_FINDER_DAILY_DATA = 'simple_plan_finder_daily_data',
  SIMPLE_PLAN_FINDER_MONTHLY_FEE = 'simple_plan_finder_monthly_fee',
  SIMPLE_PLAN_FINDER_RESULT = 'simple_plan_finder_result',
  GM_FUTURE_GIFT = 'gm_future_gift', // 내 미래의 자식이 나에게 줄 선물
  GM_FUTURE_GIFT_RESULT = 'gm_future_gift_result', // 내 미래의 자식이 나에게 줄 선물
  GM_CHICKEN = 'gm_chicken', // 치킨 바이럴
  GM_PARENTS_DAY = 'gm_parents_day', // 어버이날
  GM_PARENTS_DAY_SUPPORT = 'gm_parents_day_support', // 어버이날
  GM_PARENTS_DAY_RESULT = 'gm_parents_day_result', // 어버이날
  GM_PARENTS_DAY_EVENT = 'gm_parents_day_event', // 어버이날
  GM_PARENTS_DAY_EVENT_RESULT = 'gm_parents_day_event_result', // 어버이날
  SIMPLE_PLAN_FINDER_INTRO_PARENT = 'simple_plan_finder_intro_parent', // 어버이날
  SIMPLE_PLAN_FINDER_INTRO_PARENT_SHARE = 'simple_plan_finder_intro_parent_share', // 어버이날
  NEW_PLAN_INTRO_PARENT = 'new_plan_intro_parent',

  REDIRECT = 'redirect', // 리다이렉트 내부 router,

  AD_LINK = 'ad_link',
  AD_LINK_LOGIN = 'ad_link_login',
  AD_LINK_FIRST_LOGIN = 'ad_link_first_login',
  AD_LINK_WAITING = 'ad_link_waiting',

  RECOMMEND_LOGIN_MODAL = 'recommend_login_modal',
  RECOMMEND_LOGIN_MODAL_FOR_SHORTJISIK = 'recommend_login_modal_for_shortjisik',
  TODAY_HOROSCOPE = 'today_horoscope',

  PLAN_RECOMMEND_THEME = 'plan_recommend_theme',
  WEEKLY_TOP_20 = 'weekly_top_20',

  // 해외유심
  OVERSEAS_COUNTRIES = 'overseas_countries',
  OVERSEAS_COUNTRY_DETAIL = 'overseas_country_detail',
  OVERSEAS_PLAN_DETAIL = 'overseas_plan_detail',

  REFUND_ALARMTALK_QNA = 'refund_alarmtalk_qna',
  REFUND_ALARMTALK_ZERO_PLAN_IMMEDIATE = 'refund_alarmtalk_zero_plan_immediate',

  // 요금제 체험 광고용 랜딩
  PLAN_DEMO_LANDING = 'plan_demo_landing',

  HERE = 'here',

  // 맞춤 추천
  PERSONALIZED_RECOMMENDATION_SELECT_APP = 'personalized_recommendation_select_app',
  PERSONALIZED_RECOMMENDATION_RECOMMEND = 'personalized_recommendation_recommend',
  PERSONALIZED_RECOMMENDATION_SEARCHING = 'personalized_recommendation_searching',
  PERSONALIZED_RECOMMENDATION_ALL_LIST = 'personalized_recommendation_all_list',

  // 가족 통신비 진단받기
  FAMILY_CALCULATOR_LANDING = 'family_calculator_landing',
  FAMILY_CALCULATOR_INPUT_FAMILY_COUNT = 'family_calculator_input_family_count',
  FAMILY_CALCULATOR_INPUT_FEE_RANGE = 'family_calculator_input_fee_range',
  FAMILY_CALCULATOR_INPUT_AGE_RANGE = 'family_calculator_input_age_range',
  FAMILY_CALCULATOR_RESULT = 'family_calculator_result',

  // 쿠폰
  COUPON_AVAILABLE_LIST = 'coupon_available_list',
  COUPON_GUIDE = 'coupon_guide',

  // 찜 관련
  WISHLIST_COMPARE_SELECT = 'wishlist_compare_select',
  WISHLIST_COMPARE_RESULT = 'wishlist_compare_result',
  WISHLIST_SHARE_SELECT = 'wishlist_share_select',
  WISHLIST_SHARE_CONFIRM = 'wishlist_share_confirm',
  WISHLIST_SHARE_RESULT = 'wishlist_share_result',
}

const LogNavigationTypeKey: Record<
  Uppercase<LogNavigationType>,
  Uppercase<LogNavigationType>
> = Object.assign(
  {},
  ...Object.keys(LogNavigationType).map((navigationType) => ({
    [navigationType.toUpperCase()]: navigationType.toUpperCase(),
  })),
) as Record<Uppercase<LogNavigationType>, Uppercase<LogNavigationType>>;

export { LogNavigationTypeKey };

export default LogNavigationType;
