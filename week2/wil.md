## 2주차 내용 정리 ##

* 2주차 목표 : 게시물 화면 구성하기

<게시물 화면 만드는 원리>
요소를 찾고 > 사용자의 행동과 연결을 하고 > 화면을 바꿈

<React란?>
: 코드에서도 화면의 구조를 알 수 있게 하는 도구
: 프로그래밍 언어가 아닌 JavaScript에서 UI를 만들기 위한 도구

* (개발에서의) library : 다른 프로그램에서 가져다 사용할 수 있도록 만들어놓은 코드의 모음

*** JavaScript + React -> UI 구성 ***

<JSX> 
: JavaScript 안에서 UI를 표현하기 위한 문법
- html과 매우 비슷하게 생김
html : <button class="like-button">좋아요</button>
JSX : <button className="like-button">좋아요</button>

<중괄호{}>
: JavaScript와 JSX를 연결, JavaScript 표현식 사용 가능함

<실습 과정 정리>
VS code
> 터미널 열기 
> npm install(프로젝트 실행에 필요한 패키지 설치) 
> npm run dev(프로젝트를 실행하게 하는 명령어)

- 중괄호 이해
App.jsx 파일에서 
'''
const username = "name";
'''
name을 yunseo로 바꾸면 한 번에 화면 상단, 하단 이름이 바뀜(중괄호 사용된 부분 확인하면 됨)
-> location도 마찬가지

<UI 접근 방식 정리>
화면을 본다 -> 구조를 찾는다 -> 동작을 생각한다 -> 코드로 표현한다
JavaScript -> React -> JSX -> 직접 화면 만들기

### 느낀점/새롭게 배운 점 ###
이전 주차까지는 알고있는 내용을 복습하는 느낌이었는데 오늘 배운 React는 몰랐던 부분이라서 진짜 공부하는 느낌이 들었다. 
잘 정돈된 코드를 보면서 전부는 아니지만 일부분은 코드 한줄 한줄의 의미를 조금이나마 이해할 수 있을 것 같다. 
앞으로의 스터디가 기대된다!