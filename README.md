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
- 비디오를 그대로 사용할 수도 있으나 그럼 용량이 너무 크다. 따라서 비디오를 이미지로 짤라 사용한다. 60프레임으로 해도 연속적으로 보면 아주 부드러운 이미지로 볼 수 있다.
- 비디오의 경우에는 재생시간을 scroll ratio로 하지만 연속된 이미지의 경우에는 image sequence에 scroll ratio를 적용한다.
- window 객체의 load 이벤트는 js의 모든 이미지나 비디오 등 모든 리소스들의 로드가 끝나면 실행된다.
- 하지만 우린 canvas 엘리먼틀르 사용한다. 애플에서도 이 방법을 사용하고 있다.
- canvas 엘리먼트에 width와 height를 줘서 css에 넣은 우선순위가 안 먹히지 않을까 했는데 canvas 에서 width=1920으로 설정된 것은 CSS가 아니라, 캔버스 객체의 width 속성이다. 따라서 캔버스가 처리해야할 픽셀의 개수가 width와 height에 따라 1920 X 1080이 된다. CSS에 넣은 크기는 단지 눈에 보이는 크기로, CSS를 조정해서 캔버스의 width와 height 값은 변하지 않고 단지 화면에 표시되는 크기만 바뀐다.
- canvas 엘리먼트를 모든 drawing 조작을 이 엘리먼트의 getContext 메서드를 사용해 리턴 받은 context 객체를 사용하여 조작한다.
- canvas의 context 객체의 drawImage 메서드는 첫 번째 인자로 그릴 이미지 리소스, 그리고 x좌표 y좌표다.
- canvas 엘리먼트의 width와 height는 사용되는 이미지의 크기로 잡자.
- 그니깐 배열을 만들고 해당 배열에 각 섹션 갯수만큼 array item을 만들고 각 item에 객체를 넣어 처리해줄 엘리먼트들을 담아서 사용하자.
- context 객체(getContext 메서드의 리턴 값)의 drawImage 메서드는 여러 개의 파라미터를 넘길 수 있다. 3개는 리소스, x, y, 다섯 개는 추가로 widht, height, 8개도 있다.(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
- canvas 크기를 조절하는 방식은 두 가지가 있다. canvas의 width와 height를 script로 조작하는 방식(이 방식으로는 픽셀수를 조작할 수 있다.)과 css로 scale을 조작하는 것이다. apple에서도 css로 scale을 조작하는 방식을 사용하고 있는데 canvas의 width와 height는 고정이며 css의 transform 요소의 scale을 사용하여 화면을 채운다.
- pc, tablet 세로 모드, tablet 가로 모드, smart phone 가로, 세로 ,,, 그리고 각 기기들 마다 화면의 크기도 다르다. 이 모든 것을 고려해줘야 한다. 고정된 픽셀수를 가진 canvas를 가지고 화면을 가득 채워야 한다. 이럴 경우 어떻게 하면되면 height를 꽉 채우는 비율로 scale 조정을 해주면 된다. 이미지의 중요 이미지들은 가운데에 있으니 가로는 양 옆으로 짤려도 된다.
- 윈도우의 창크기가 바뀔 때마다 조작을 해줘야 하면 resize 이벤트에 걸어주면 된다. setLayout에 canvas 화면에 딱 맞게 하는 조작을 해주자.
- 높이가 고정이니 높이를 기준으로 scale할 비율을 정한다. 높이 비율에 따라 canvas이 가로가 늘어나고 줄어들고 하겠지... 근데 다시 한번 말하지만 중요 이미지는 가운데에 있고 양옆 사이드는 짤려도 된다... 근데 scale할 경우에는 다른 요소에 영향을 안 받는다. 만약 top: 0 이였다, 그러면 top은 그대로 0이다. 근데 스케일만 달라지는거다. 따라서 scale 되는 요소 가운데 정렬 하려면 css로 top: 50%; left: 50% 해주고 scale 될 때 script로 top: -50%; left: -50% 해주면 된다.
- 엘리먼트에 position을 건들지 않으면 default 값으로 static이다. static인 얘들은 absolute 밑에 깔린다. z-index는 static에서 적용 안된다. relative로 바꿔줘야 한다.
- position: relative에 top을 줄 수 있다는 것을 처음 알았네... 한번도 줘본 적이 없다. absolute와 sticky에는 많이 줬었는데 말이다.
- 엘리먼트들을 관리 객체에 넣고 해당 엘리먼트들을 컨트롤할 요소를 values 객체에 넣어서 관리한다.

# "동적 위치와 크기 계산을 이용한 스크롤 인터랙션 구현"에서 새로 알게된 것들

- 이 부분은 scene_info 배열에 애니메이션을 조작할 데이터를 넣기 좀 그렇다. 미리 세팅하기가 좀 부족하다. 왜냐하면 모든 기기의 화면 크기 및 비율이 다 다르기 때문이다. 위에서 다뤘던 것은 opacity와 transform 같이 위치 조정 같은 것들이었다. 따라서 계산을 그때그때 해줘야 한다.
- 이 블렌드 캔버스도 사이즈 조절을 해줘야 하는데 이 캔버스는 화면 비율이나 크기에 scale이 유동적으로 적용이 될 필요가 있어서 setLayout 함수가 아닌 playAnimation 함수에서 해준다.
- 어떤 해상도에서도 대응할 수 있게 만들자. 애플인 넙쩍한 화면에서는 그냥 이미지 스크롤만 되게 했다고 한다.
- 크기 조절은 먼저 원래 canvas 가로 크기에 대한 브라우저 폭의 비율, canvas 원래 높이에 대한 브라우저 높이의 비율로 구한다.
- 넓쩍한 화면이면 widthRatio(window.innerWidth / canvas.width)로 canvasScaleRatio를 정해주고 반대면 heightRatio로 정해준다. 질문에서의 답변

  > 화면과 캔버스의 비율이 같지 않기 때문에
  > 그 상태에서 높이를 꽉 채우고 가로로 가운데 정렬을 하기 위함이라고 생각하시면 됩니다.
  > 화면 비율이 어떻든 캔버스 자체가 1920x1080으로 가로보다 세로가 작기 때문에
  > 풀 스크린 효과가 나도록 세로를 화면 높이에 꽉 채우는거죠~
  > 세로를 채우면 화면의 양 끝은 캔버스의 양끝과는 다른 위치가 되고(영상에 그림으로 설명하는 부분)
  > 우리는 캔버스의 양 끝이 아닌 화면의 양 끝에 맞추어 그려야하기 때문에 X 위치도 따로 계산해주는 것이고요^^

- 블렌딩 이미지 할 때 높이는 그대론데 폭이 변화가 있다. 그리고 이미지는 변화가 없다. 어떻게 하는건가. 하얀 박스를 그려주고 이 하얀 박스를 이동시키면 된다. 이미지 하나를 처리하기 위해서 그 이미지 만으로 조작을 해야 한다는 틀을 깨자. 다른 어떤 양념을 쳐서 원하는 모습을, 동작을 만들어 낼 수 있다.
- 현재 블렌딩 할 이미지가 들어있는 canvas는 1920 x 1080이지만 기기의 화면 비율에 따라 scale 되어 있다.
- 블렌딩 할 이미지를 컨트롤 할 데이터를 미리 넣을 수 없는 이유는 알 수가 없기 때문이다. 화면 크기가 어떨지 모른다. 따라서 스크롤 할 때 판단해서 계산해서 넣는다.
- 잘 생각해봐라. 캔버스의 크기가 현재 화면의 크기보다 크다. 캔버스를 화면의 높이나 가로의 비율에 따라 어떻게든 화면이 캔버스의 중앙에 위치하게 한다.
- canvas에서 정수로 그릴 때 성능이 더 좋다.
- getBoundingClientRect() 메서드는 화면 상에 있는 object의 크기와 위치를 알 수 있는 메서드다.
- getBouningClientRect()로 top 위치를 가져올 때 스크롤 속도에 따라 이벤트가 발생할 때 오차가 생겨 동일한 값을 얻는데 문제가 있다.
- 엘리먼트를 조작할 배열에서 values에 들아가는 각 key value에서 value의 start와 end는 섹션의 총 높이에서 몇 퍼센트까지 해당 애니메이션을 보여줄 지 정하는 거다.
- window의 innerWidth는 스크롤바까지 포함하는 길이다. 스크롤 바를 제외한 길이를 구하자. document.body.offsetWidth로 width를 가져오자. (크롬에서 다시 둥둥 뜬다. window.innerWidth 사용해도 될 듯)
- offsetTop 속성을 사용하자. 근데 이 속성은 전체 문서에서 해당 엘리먼트까지의 offset을 가져온다. 근데 이 값은 바꿀 수 있다. canvas의 부모 속성인 섹션의 포지션을 relative로 하게 되면 이 섹션을 기준으로 canvas까지의 offset 을 가져올 수 있다.
- 근데 offset을 써도 길이가 좀 애매하다. 왜냐하면 canvas를 width나 height를 기준으로 scale transform 해줬기 때문이다. 이 offset은 transform 하기 전에 canvas의 위치의 offset이다.
- 상위 엘리먼트의 position을 relative로 하여 하위 엘리먼트들의 기준이 되게 하자.
- 지금 canvas는 scroll section 3에 도달해야지 생긴다. 그래서 화면 홀쭉하게 해서 섹션을 길게 해서 보면 이상하게 보인다.
- canvas를 sticky 하게 하니 canvas 크기가 작아졌다. 그 이유는 현재 width가 100%로 브라우저 크기에 꽉차는데 scale이 적용돼서 작아졌기 때문이다.
- scale(0.2) 이렇게 하면 줄어드는데... top 같은 스타일도 원래 크기에 적용된다. canvas를 어떤 비율로 줄였느냐... 이 비율을 top에 적용해야 한다.
- scale을 적용 했을 때 다른 부분들에서 위치가 안 맞을 때는 scale 여부를 생각하자.
- canvas의 context의 drawImage 에는 image 뿐만 아니라 비디오, 또 다른 canvas도 들어갈 수 있다. drawImage 할 때 width와 height 넣어주지 않으면 원래 이미지 크기로 그린다.
- CanvasRenderingContext2D의 drawImage에 8개의 인자가 들어갈 수 있는데 이 경우 source와 destination으로 들어간다. 원래 이미지를 canvas의 destination에 그릴 때 사용한다.
- main.js에서 calcValues 함수에 들어가는 currentYOffset은 현재 scene(scroll section)에서 얼마나 스크롤 했는지를 저장하는 변수다.
- sticky가 끝났을떄 자연스럽게 올리기 위해서는 margin-top을 계산해야 하는데 sticky 되는 동안 얼마나 스크롤 했는지를 계산하면 된다. 40%다. 왜냐하면 현재 섹션에서 20% 동안 블렌딩을 해주고 20% 동안 축소해줬기 때문이다.
- sticky 된 동안 얼마나 스크롤 됐는지를 계산하면 된다.

# '더 부드럽게 동작하는 고화질 비디오'에서 알게된 것들

- requestAnimationFrame이란 브라우저가 매번 화면을 그리는데 변하는 화면을 그릴 준비가 완료됐을 때 그려준다. 예전에는 setInterval으로 했는데 프레임 유실 또는 모바일에서 배터리 소모의 이유로 요즘에는 requestAnimationFrame을 사용한다.
- 일단 기본적으로 requestAnimationFrame은 비동기 적으로 실행되고 1번만 실행된다.
- requestAnimationFrame을 사용하는 기본적인 방법은 반복시킬 함수 안에서 requestAnimationFrame 메서드에게 인자로 반복시킬 함수 자체를 넣어주는 것이다. requestAnimationFrame의 반복 속도는 초당 60, 즉 60 프레임이다.
- setInterval이나 setTimeout도 return으로 id를 반환하는데 requestAnimationFrame도 id를 반환한다. 반복되는 애니메이션을 종료하고 싶다면 cancelAnimationFrame을 하면 된다.
- requestAnimationFrame을 canvas 에서 많이 쓴다. 특히 인터랙티브! 에서 많이 쓰이니깐 잘 알아두자.
- 부드러운 감속을 해보자. 일단 window에 scroll 이벤트를 등록해서 스크롤 했을 때마다 expression을 반복할 수 있으나 이거 말고도 requestAnimationFrame 메서드를 사용하여 구현할 수도 있다. requestAnimationFrame에 동작할 함수를 인자로 전달하면 해당 함수는 1초에 60번 실행을 하게 된다. 그럼 내가 예를 들어 window.pageYOffset 값을 함수에서 사용하게 되면 스크롤을 했다고 가정하면 pageYOffset 값은 변하기 때문에 마치 스크롤 이벤트에 등록한 것처럼 동작을 하게 된다. 그리고 부드러운 감속, 이것은 destination과 start 사이의 거리를 특정 값으로 나눠서 단계별로 값을 줄이는 것과 동일하다. 한번 스크롤 하면 약 10px이 툭하고 감소 하는데 이 10px를 나눠서 진행하는 것과 같은 것이다.
- 가속을 주는 것이다. 그 나누는 것이 가속을 주는 것이다. 스크롤을 이용하는 pageYOffset을 목표 지점으로 두는 것이다.
- requestAnimationFrame에 함수를 전달하면 1초에 60번씩 계속 실행을 하나 그렇게 될 경우 어떻게든 부하가 생기니 동작을 하지 않아도 되면 cancel 하고 하는 방향도 추가해줘야 한다.
