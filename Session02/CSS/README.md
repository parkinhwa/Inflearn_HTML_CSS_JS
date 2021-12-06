# CSS(Cascading Style Sheets)
HTML 문서 내에 HTML 태크를 선택해서 디자인하고 배치하는 역할
## CSS 선택자 / CSS 선택자 적용 우선순위
### 선택자 종류
- 아이디 선택자 #
- 클래스 선택자 .
- 태그와 함께쓰는 선택자 태그.클래스 태그#아이디

### 그룹 선택자
- 동일한 속성을 가질 시 h1, p {} 반점을 통해 속성 줌
- 하위선택자 ex) p span
- 전체선택자 *

### CSS 적용 우선 순위
- 내부 파일 스타일 > 외부 파일 스타일
- !important > 인라인 > 아이디 > 클래스 > 태그

## CSS 서식관련 속성
### 텍스트 스타일
- 기본 폰트 사이즈

![image](https://user-images.githubusercontent.com/65644486/144002769-0a70b5dd-7eed-47e4-a902-6c2da687227e.png)

### 목록 스타일
- 순서 없는 목록 (ul)

    |속성 값|설명|
    |------|---|
    |disc|채운 원|
    |circle|빈 원|
    |square|채운 사각형|
    |none|불릿 없애기|


- 순서 있는 목록 (ol)

    |속성 값|설명|
    |------|---|
    |decimal|1, 2, 3..|
    |decimal-leading-zero|01, 02..10, 11..|
    |lower-roman|로마숫자 소문자|
    |upper-roman|로마숫자 대문자|
    |lower-alpha|알파벳 소문자|
    |upper-alpha|알파벳 대문자|

## CSS 자손선택자(스페이스) vs 자식선택자(>), 부모요소 vs 자식요소

![image](https://user-images.githubusercontent.com/65644486/144005701-bd7e0516-1520-4024-b25c-e3ea5c51d18d.png)

## 상세 디자인을 위한 CSS 박스 모델
- border-style(테두리 스타일 지정)
  - value: solid, dashed, dotted, double, groove, inset, outset
- border-width(테두리 두께 지정)
  - px, %, thin, medium, thick
- border-color(테두리 색상 지정)
- border-radius (왼쪽위 오른쪽위 오른쪽아 왼쪽아)
- margin / padding (top right left bottom)
- box-sizing: border-box (박스사이즈 맞춰준다)
- box-shadow: inset offset-x offset-y blur color (inset 안쪽그림자, blur 그림자 가장자리 부드럽게)

## ★HTML 인라인요소, 블록요소, 인라인블록

- 인라인 요소(inline)

  - 한줄에 여러개 배치
  - 기본 너비값을 컨텐츠의 너비값
  - 크기값을 가질 수 없음
  - 상하 마진을 가질 수 없음
  - ex) span, a, small, big, em, u, s, del, br, q, b, strong...


- 블록 요소(block)

  - 한줄에 한개만 배치
  - 기본 너비값은 100%
  - 크기값을 가질 수 있음
  - 상하좌우 마진 가질 수 있음
  - ex) div, table, figure, header, nav, ul, ol. hr, h1~h6...


- 인라인블록 요소(inline block)
  - 한줄에 여러개 배치
  - 기본 너비값은 컨텐츠의 너비값
  - 크기값을 가질 수 있음
  - 상하 마진은 가질 수 있음
  - ex) img, input 태그들, button, fontawesome

 ## CSS로 HTML 가로 배치하기(float, overflow, clear, inline-block)
  - float
    - left 왼쪽배치
    - right 오른쪽배치
    - margin: auto 중앙배치(블록요소만 가능 인라인 및 인라인 블록 요소는 적용안됨)
  

  - clear (float 속성이 적용되면 다음 요소가 float 속성을 상속받는데 이것을 해제시킨다.)
    - left 왼쪽 float 속성 해지
    - right 오른쪽 float 속성 해지
    - both 왼쪽 또는 오른쪽으로 배치된 모든 float 속성 상속을 해지
  

  - 가로 배치하는 2가지 방법
    - float와 overflow를 사용해 배치(width 범위를 벗어나면 안됨)
    - display: inline-block으로 배치 

## 레이아웃 설계하는 HTML5 시멘틱 태그 
- 가장 상위의 컨테이너:.container 또는 .wrapper
- 문서의 주요 내용을 지정: main
- 주제별 콘텐츠 영역: section
- 헤더 영역(로고, 메뉴. 로그, 검색 등): header
- 제작 정보 및 저작권 정보 표시: footer
- 콘텐츠 내용 넣기: article
- 문서를 링크하는 탐색 영역: nav
- 세부 사항 요소: summary / 추가 세부 정보를 정의 : details
- .container > header, section, footer > article > div


 ![image](https://user-images.githubusercontent.com/65644486/144627013-0b1c04f9-9132-4f06-922a-7a68be83cb47.png)
 
 ## CSS 포지션 속성
- CSS 포지셔닝 (position 속성 : relative & absolute)
  - Relative(상대적인) -> 부모요소
  - Absolute(절대적인) -> 자식요소
- 자동으로 수평 수직 중앙 위치시키기
  - position: absolute
  - top: 50%
  - left: 50%
  - transform: translate(-50%, -50%)
- 원하는 위치로 정확히 보내기

![image](https://user-images.githubusercontent.com/65644486/144735689-98bf5119-69ef-4a3e-9b9b-2f9241eee743.png)


## CSS 필수 가상클래스
- 마우스 오버 효과
  - hover(마우스를 올렸을 때 디자인이 변경된다)
  - transition(디자인 변경 때 애니메이션 효과가 들어간다)
- 순서를 만드는 가상클래스
  - 태그:nth-child(숫자) 숫자(출현순서)번째 자식
  - 태그:nth-of-type(숫자) 주어준 태그를 가진 숫자번째 자식
