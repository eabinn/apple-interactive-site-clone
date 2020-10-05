## CSS

- 따로 떨어져 있다는 것은 오른쪽에 빈공간이 있다는 것이고 이러면 오른쪽에 margin-right: auto 하면 된다. 그렇게 하면 오른쪽에 있는 여백을 전부 다 소비한다. 센터 정렬할 때 margin: 0 auto 하면 양옆에 margin을 전부 소비하기 때문에 가운데 정렬이 되는 것이다.

- not() 쓰면 괄호 안에 있는 것은 제외 시킨다.
  ex) .local-nav-links a:not(.product-name) { margin: 1em; } 하면 .proudct-name 클래스를 가진 엘리먼트는 margin: 1em 이 적용되지 않는다.

- 부모에서 단독으로 지정하는 엘리먼트들이 우선순위가 클래스 네임보다 크다.
