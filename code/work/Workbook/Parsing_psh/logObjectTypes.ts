enum LogObjectType {
  /**
   * 요금제
   */
  PLAN = 'plan',

  /**
   * 자급제
   */
  PHONE = 'phone',

  /**
   * 모요내에서 아웃바운드로 살 수 있는 상품
   */
  PRODUCT = 'product',

  /**
   * 모요에서 보여주는 이미지
   */
  IMAGE = 'image',

  /**
   * 배너
   */
  BANNER = 'banner',

  /**
   * 필터
   */
  FILTER = 'filter',

  /**
   * 옵션필터
   */
  OPTION_FILTER = 'option_filter',

  /**
   * 정렬필터
   */
  SORT = 'sort',

  /**
   * 버튼
   */
  BUTTON = 'button',

  /**
   * 탭
   */
  TAB = 'tab',

  /**
   * 키워드
   */
  KEYWORD = 'keyword',

  /**
   * 통신사
   */
  MVNO = 'mvno',

  /**
   * 꺽쇠
   */
  BRACKET = 'bracket',

  /**
   * 꺽쇠
   */
  MODAL_BRACKET = 'modal_bracket',

  /**
   * 이벤트
   */
  EVENT = 'event',

  /**
   * 가이드
   */
  GUIDE = 'guide',

  /**
   * 휴대폰 가이드
   */
  CONTENTS = 'contents',

  /**
   * 인터넷
   */
  INTERNET = 'internet',

  /**
   * 공지사항
   */
  NOTICE = 'notice',

  /**
   * FAQ
   */
  FAQ = 'faq',

  /**
   * BLOG
   */
  BLOG = 'blog',

  /**
   * 다이얼로그
   */
  DIALOG = 'dialog',

  /**
   * 레퍼러 이벤트
   */
  REFERRER_EVENT = 'referrer_event',

  /**
   * 카드
   */
  CARD = 'card',

  /**
   * 모달
   */
  MODAL = 'modal',

  /**
   * 모달 내 버튼
   */
  MODAL_BUTTON = 'modal_button',

  /**
   * 포스트
   */
  QNA_POST = 'qna_post',

  /**
   * 댓글
   */
  QNA_COMMENT = 'qna_comment',

  /**
   * 요약된 qna 섹션
   */
  QNA_POST_SUMMARIZED_SECTION = 'qna_post_summarized_section',

  /**
   * 페이지네이션
   */
  PAGINATION = 'pagination',

  /**
   * 리뷰
   */
  REVIEW = 'review',

  /**
   * 리뷰헤더
   */
  REVIEW_HEADER = 'review_header',

  /**
   * 상담 신청
   */
  CONSULT = 'consult',

  /**
   * 알림 설정
   */
  ALARM = 'alarm',

  /**
   * 알림 설정
   */
  KAKAO_ALIMTALK = 'kakao_alimtalk',

  /**
   * 입력 칸
   */
  INPUT = 'input',

  /**
   * 채널톡
   */
  CHANNEL_TALK = 'channel_talk',

  /**
   * 페이지 구역
   */
  SECTION = 'section',

  /**
   * 외부 쇼핑몰 (e.g., 쿠팡, 하이마트 등)
   */
  RETAIL = 'retail',

  /**
   * 일반 정보
   */
  INFO = 'info',

  ERROR = 'error',

  NONE = 'none',

  DISCLAIMER = 'disclaimer',

  LINK = 'link',

  SWITCH = 'switch',

  TOOLTIP = 'tooltip',

  CHECKBOX = 'checkbox',

  SLIDER = 'slider',

  USED_COUPON = 'used_coupon',
}

export default LogObjectType;
