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



