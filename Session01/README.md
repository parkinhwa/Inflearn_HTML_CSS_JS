# Session01 Visual Studio Code Basic 
## Visual Studio Code Setting
- live Server 설치
- 파일 자동저장 기능키기
- 탭간격 2
- 설정 Zoom 기능켜서 마우스 휠로 폰트 조정할 수 있게 하기
- 자동 줄바꿈 설정 => word wrap => on
- beautify 설치 후 keyboard Shortcuts로 들어가서 단축키 설정(beautify 줄간격 맞춰줌)
- 단축키 설정(아래에 줄 복제, 줄 아래, 위 이동, 줄 삭제)
- 부분 주석 ctrl+shift+/
- 화면 분할 사용
- alt+shift+드래그 => 다중 라인 선택

## Visual Studio Code Emmet
### html에서 쓰는 emmet
- 태그 치고 탭키
- class 이름할때 .classname 탭
- id 이름줄때 .idname 탭
- div가 아닌 다른 태그로 하고싶을때 span.classname, h1.idname
- emmet으로 table 만들기 table>tr>td*3
### css에서 쓰는 emmet
- w100 = width : 100px
- fz = font-size
- fs = font-style
- bx = box-sizing
- bgc = backgroundcolor
- bg = background
- ta = text-align
- tt = text-transform
- f:l = float:left
- f:r = float:right
...

## CSS 수정할 때 위로 올라가는 Full Reload 방지
- Visual Studio Code에서 Css 파일 수정 시 맨 아래 부분을 수정해도 자동저장되며 맨 위로 올라가는 문제 발생
- 설정 => 확장 => Live Server Config => Settings:Full Reload 체크

## 추가로 필수 설치 Extension
- Auto Rename Tag (시작 태그를 바꾸면 뒤에 마감 태그 자동으로 바꿔줌)
- HTML CSS Support (CSS에 사용된 선택자를 HTML에서 자동완성 해줌(css => html))
- HTML to CSS autocompletion (html에 사용된 선택자를 css에서 자동완성 해줌(html => css))
- CSS Peek (html에서 선택자를 Ctrl+클릭하면 css 파일 해당 선택자로 이동) alt+f11 하면 밑에 바로 보여줌
- htmltagwrap (태그 안에 태그 넣기 기능) 단축키 alt+w
- Bracket Pari Colorizer 1 or 2 (괄호마다 코드에 색깔을 다르게 줌)
- Indent-rainbow (들여쓰기 된 부분은 레인보우 컬러로 하이라이트 표시해줘서 코드 읽을 때 도와줌)
