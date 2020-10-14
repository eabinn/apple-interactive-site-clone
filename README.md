# "웹페이지 골격 만들기"에서 새로 알게된 것들

## "메뉴 스타일링"에서 새로 알게된 것들

- 따로 떨어져 있다는 것은 오른쪽에 빈공간이 있다는 것이고 이러면 오른쪽에 margin-right: auto 하면 된다. 그렇게 하면 오른쪽에 있는 여백을 전부 다 소비한다. 센터 정렬할 때 margin: 0 auto 하면 양옆에 margin을 전부 소비하기 때문에 가운데 정렬이 되는 것이다.
- not() 쓰면 괄호 안에 있는 것은 제외 시킨다.
  ex) .local-nav-links a:not(.product-name) { margin: 1em; } 하면 .proudct-name 클래스를 가진 엘리먼트는 margin: 1em 이 적용되지 않는다.
- 부모에서 단독으로 지정하는 엘리먼트들이 우선순위가 클래스 네임보다 크다.

## "페이지 내용 HTML 작성"에서 새로 알게된 것들

- 문단 이라고 생각되면 p 태그를 쓰자.
- 위치를 잡아야 하는 문단이 있다면 div 태그를 사용하거나 해서 wrapper로 감싸자.
- lorem 신기하구만!
- 강조하고 싶으면 strong 태그, 작으면 small 태그, 이런 것들 자주 써보자.

## "페이지 내용 CSS 작성"에서 새로 알게된 것들

- 높이를 정하는데 ... 음 ... 여기 폰트 사이즈 기준으로 3배로 할까? 하면 3em 이런 식으로 em를 사용하자.
- 갑자기 float...?
- 폰트 사이즈는 rem으로 ... 높이나 margin은 em 으로... 그럼 현재 엘리먼트의 폰트는 rem으로 하는데 em으로 마진이나 높이를 결정함으로써 현재 엘리먼트의 폰트 크기를 기준으로 높이랑 마진을 상대적으로 정할 수 있다.
- 근데 여러 섹션이 있고 이 섹션들이 같은 좌우 패딩을 갖는다고 해보자. 그럼 rem으로 하는게 맞다는 것을 넌 알 것이다. 정말??? 정말!
- https://www.crockford.com/colors.html 이런 사이트! 색상 사이트도 있다!
- @media (min-width: 1024px) { } 이것은 창 크기가 1024px 이상이면 아래의 스타일링을 적용하겠다는 뜻이다.
- vw은 윈도우 크기의 가로의 퍼센트. 9vw는 윈도우 가로 크기의 9퍼센트. 화면이 커지면 크기도 커질 것이다.
- 컨테이너 자체를 제한하는 것은 좋은 것이 아니다. 비디오를 넣거나 화면 가득 채울 수도 있기 때문. 컨테이너 안의 요소에 패딩을 주자.
- rem, em 뿐만 아니라 vw로도 폰트 사이즈를 줘보자. 창크기에 대해 늘어나고 줄어든다.

# "스크롤링을 이용한 인터랙션 구현"에서 새로 알게된 것들

- position: fixed와 position: sticky와의 차이는 sticky는 일정 높이가 되면 고정이 된다. 근데 fixed는 단점이 ie11 조차도 지원하지 않는다.
- body의 id 값을 바꿔주면서 해당 id에 해당하는 섹션을 보여주는 방식으로 진행한다. 즉, 현재 body의 id에 해당하는 section만 display: block이고 나머지 섹션들은 none이다.
- (() => {})(); 이제 이게 뭔지 안다. 화살표 함수로 익명함수를 만들고 바로 실행한다는 의미다. 즉시 호출 함수다. (function() {})() 와 동일하다. 이렇게 즉시 호출 함수를 쓰는 이유는 전역 변수 사용을 피하기 위함이다.
- 배열을 만들고 거따가 섹션 정보를 넣는다. 높이라든가 하는 것들.
- 디바이스의 화면 크기도 생각해서 해야 한다. 어디서 열지 모르기 때문에 일단 scrollHeight를 0으로 둔거다. 핸드폰으로 볼 지, 노트북으로 볼 지, 노트로 볼 지 기계마다 크기가 다르기 때문이다.
- type도 정해주자. 어떤 섹션은 그냥 스크롤 할 거고 어떤 섹션은 sticky가 되기 때문이다.
- 아... 컨텐츠 높이만큼 스크롤만 했으니 그렇게 빨리 변하고 했었네... scrollHeight도 정할 수 있다는 걸 뒤늦게 알아버렸다.
- querySelector에서 리턴은 해당 element object다. 해당 엘리먼트에서 사용할 수 있는 method나 property들이 있다.
- window ... addEventListener ... resize ...
- window 객체의 pageYOffset 프로퍼트는 현재 얼만큼 스크롤 했는지 그 값을 저장하고 있다.
- window.pageYOffset는 진짜로 스크롤을 얼마나 했는지다.
- chrome 같은 경우는 window.pageYOffset, 즉 스크롤의 가장 작은 값이 0인데, safari는 0 아래로도 간다. 따라서 개발할 때 이것도 생각해야 한다.
- window.addEventListener("load", setLayout); -> 페이지 리소스가 모드 로드되면 setLayout 함수를 실행한다. load 대신 DOMContentLoaded를 해도 되는데 이 둘의 차이는 load는 모든 이미지나 비디오 같은 리소스들 까지 다 가져오고 콜백을 실행하는데 DOMContentLoaded는 DOM 엘리먼트들을 다 가져오면 실행한다.
  그니깐 DOMContentLoaded가 더 빠르게 되긴 하는데 이는 리소스들을 다 가져오는건 확인하지 않는다.
- 새로 고침했을 때도 생각해야 한다. 모든 처리는 스크롤 섹션의 높이를 정하고 현재 어떤 섹션에 위치해 있는 지를 현재 스크롤 높이와 이전의 섹션들의 스크롤 섹션 높이의 합을 비교하면서 알아낸다.
- 하여튼 스크롤에 들어가는 정보들을 배열에 넣어서 관리한단다... 아하!
- 문자열들을 가져오고 각 문자열에 필요한 스타일들도 배열에 넣어서 관리한다.
- 전체 스크롤 높이를 가지고 어떤 섹션이 보일지 결정을 하고 각 섹션에서도 얼마나 스크롤 됐는지를 확인해야 한다.
- 비율을 정한다고 해보자. 그럼 그 기준이 되는 값을 그냥 넣을 수도 있을 것이다. 하지만 그러지 말고 최대값에서 최소값을 빼고 비율을 구하고 만약 초기값이 있다면 그 값을 더해주자.
- keyframe이 사용되어야 한다. keyframe은 애니메이션이 변화가 이뤄지는 특정 시점을 말한다.
- 그러니깐 정리를 해보면 순차적으로 진행되는 애니메이션들은 배열에 각 애니메이션을 적용할 엘리먼트들을 가져와서 넣고 각 배열의 아이템들을 객체로 만들어 각 엘리먼트들에 필요한 스타일링 및 키프레임을 넣어서 보여주고 싶은 조건에서 해당 배열에서의 각 엘리먼트를 가져와 각각의 아이템들에 정의한 스타일들을 보여주기만 하면 된다.
- transform 속성 중에 3d 붙는 애들, 예를 들어 translate3d,은 하드웨어 가속이 보장되어 퍼포먼스가 좋다.

# "고해상도 비디오 섹션"에서 새로 알게된 것들

- video 엘리먼트의 loadeddata 이벤트는 비디오가 플레이 준비가 된 상태에 발생하는 이벤트다. 이 외에도 자주 쓰는 이벤트에 canplaythrough가 있다(https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- video의 progress를 계산하는 것에서 window.innerheight를 빼는 이유는 전체 스크롤 길이는 화면 높이를 제외한 다음이기 때문이다.
- video 엘리먼트의 currentTime 프로퍼티는 현재 재생 시간이다.
- window.requestAnimationFrame()은 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받습니다.
