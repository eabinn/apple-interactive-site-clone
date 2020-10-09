(() => {
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위ㅊ한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)
  let enterNewScene = false; // 새로운 스크롤섹션이 시작되는 순간 true

  const sceneInfo = [
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opacity: [0, 1],
      },
    },
    {
      type: "normal",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  function calcValues(values, currentYOffset) {
    let rv; // return value
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight; // 현재 스크롤 섹션에서 스크롤된 범위를 비율로 구하기

    rv = scrollRatio * (values[1] - values[0]) + values[0];
    console.log(rv);
    return rv;
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;

    switch (currentScene) {
      case 0:
        let messageA_opacity_in = calcValues(
          values.messageA_opacity,
          currentYOffset
        );
        objs.messageA.style.opacity = messageA_opacity_in;
        break;
      case 1:
        console.log(currentYOffset);
        break;
      case 2:
        console.log(currentYOffset);
        break;
      case 3:
        console.log(currentYOffset);
        break;
    }
  }

  function setLayout() {
    sceneInfo.map((scene) => {
      scene.scrollHeight = scene.heightNum * window.innerHeight;
      scene.objs.container.style.height = `${scene.scrollHeight}px`;
    });

    let totalScrollHeight = 0;
    yOffset = window.pageYOffset;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;

      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
  }

  function scrollLoop() {
    enterNewScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지 (모바일, safari)
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    if (enterNewScene) return; // 새로운 스크롤 섹션에 진입했을 때는 playAnimation 함수를 실행하지 않는다.
    playAnimation();
  }

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });

  window.addEventListener("resize", setLayout);
  window.addEventListener("load", setLayout);
})();
