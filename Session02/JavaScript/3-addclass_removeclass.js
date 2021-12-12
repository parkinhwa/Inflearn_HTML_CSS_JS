let element = document.getElementById('element');
element.classList.add('class1'); // 클래스 1개 추가
element.classList.add('class1', 'class2') // 클래스 여러개 추가
element.classList.remove('class1'); // 클래스 1개 제거
element.classList.remove('class1', 'class2'); //클래스 여러개 제거

element.classList.replace('oldclass', 'newclass'); // 클래스 교체

element.classList.contains('class1'); // 클래스 존재여부 확인
element.classList.contains('class1', 'class2'); // 여러개 중 한 개라도 일치하지않으면 false 반환

// 클래스 토글
element.classList.toggle('class1');
element.classList.toggle('class1', true);
element.classList.toggle('class1', false);