enum LogCategoryType {
  /**
   * 핑 (서비스 로그 X)
   * @description 로그 서버와의 연결 상태를 체크한다.
   */
  PING = 'ping',

  /**
   * 페이지 진입
   * @description 페이지에 로딩 시작하면 찍는다.
   */
  PAGEVIEW = 'pageview',

  /**
   * 페이지 탈출
   * @description 페이지에서 나오면 찍는다.
   */
  PAGEEXIT = 'pageexit',

  /**
   * 페이지 포커스
   * @description 페이지에 다시 포커스하면 찍는다.
   */
  PAGERETURN = 'pagereturn',

  /**
   * 해당 오브젝트 뷰
   * @description 해당 오브젝트가 50% 이상 보였을때 찍는다.
   */
  IMPRESSION = 'impression',

  /**
   * 해당 오브젝트 클릭
   * @description 해당오브젝트를 클릭했을 때
   */
  CLICK = 'click',

  /**
   * 공유
   * @description 공유 오브젝트를 통해서 공유 링크가 발급 되었을 때
   */
  SHARE = 'share',

  /**
   * 신고
   * @description 신고 버튼을 눌렀을 때
   */
  REPORT = 'report',

  /**
   * 가입하기
   * @description 가입하기 버튼을 클릭했을 때(요금제, 인터넷...서비스)
   */
  APPLY = 'apply',

  /**
   * 찜
   * @description 해당 오브젝트를 찜한 경우
   */
  ADD_WISH = 'add_wish',

  /**
   * 찜제거
   * @description 해당 오브젝트를 찜 제거 한 경우
   */
  REMOVE_WISH = 'remove_wish',

  /**
   * 알람추가
   * @description 해당 알람을 킨 경우
   */
  ADD_ALARM = 'add_alarm',

  /**
   * 알람제거
   * @description 해당 알람을 끈 경우
   */
  REMOVE_ALARM = 'remove_alarm',

  /**
   * 구매하기
   * @description 자급제나 애플워치등 외부로 구매하러 가는 버튼인 경우, 우리가 직접 판매하는 경우
   */
  PURCHASE = 'purchase',

  /**
   * 에러 발생
   * @description 에러가 발생한 경우
   */
  ERROR = 'error',

  /**
   * 알람
   * @description 다른페이지로 이동시키는 메세지가 뜬 경우
   */
  ALERT = 'alert',

  /**
   * 미리 채우기
   * @description 미리 채우기 위한 데이터가 있는 경우
   */
  PREFILL = 'prefill',

  /**
   * 검색
   * @description 검색창에 작성할 떄
   */
  SEARCH = 'search',

  /**
   * 변경
   * @description 요금제 변경 등
   */
  CHANGE = 'change',

  /**
   * 로직 로그
   * @description 데이터 분석을 위한 로직 로그
   */
  SERVER = 'server',

  /**
   * push message 입장
   * @description push message로 입장 했을 때 로그
   */
  OPEN_PUSH = 'open_push',

  /**
   * 브라우저에서 특정 입력 폼에 Focus 이벤트가 발생한 경우
   * @description <input> Element에 Focus 이벤트가 발생한 경우 등
   */
  FOCUS = 'focus',

  /**
   * 페이지 하단 터치
   * @description 페이지 하단을 터치한 경우 (주로 무한스크롤에서)
   */
  TOUCH_PAGE_BOTTOM = 'touch_page_bottom',
}

export default LogCategoryType;
