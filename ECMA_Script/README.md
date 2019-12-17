# ECMA Script

## Javascript VS ECMA Script

일반적으로 혼용되는 개념인 Javascript와 ECMA Script의 차이를 알아봅니다. 우리는 일반적으로 JS의 버전을 이야기할 때 ES5, ES6 등의 용어를 사용합니다. 하지만 불운하게도 이 용어의 표기법을 이해하기 위해선 ECMA Script가 무엇인지를 알아야 합니다.

### ECMA Script란

ECMA Script는 ECMA International이라는 표준 제정 비영리 표준화 기구에서 발표한 ECMA-262라고 부르는 기술 규격을 다르게 표기한 용어입니다. 이는 범용적인 목적으로 작성되는 스크립트 언어에 대한 명세를 담고 있으며, 흔히 EC6라고 부르는 명세는 ECMA-262 표준의 제 6판이라고 생각하면 됩니다. 자바스크립트는 ECMA Script를 토대로 작성됩니다(다만, 모든 스크립트 언어가 ECMA Script를 따르는 것은 아닙니다).

### Javascript란

그렇다면 자바스크립트 혹은 JS라고 부르는 이 용어는 무엇일까요? Javascript는 웹에서 사용하는 하나의 스크립트 언어이며, 보편적으로 ECMA Script와 구분없이 Javascript라고 부릅니다. 더불어 현대의 웹 브라우저를 구성하는 핵심이 되는 언어입니다. 그 이유는 현대의 모든 웹 브라우저는 Javascript 엔진을 바탕으로 구성되어 있기 때문입니다.

> 대표적으로 Google Chromium의 V8, Mozilla Firefox의 SpiderMonkey, Microsoft Edge의 Chakra가 자바스크립트 엔진이라고 이야기할 수 있습니다.
>
> 또한, 웹 브라우저는 Javascript 뿐만 아니라 웹 렌더링 엔진이 함께 존재하고(가령 Chromium은 웹 렌더링을 위해 Blink라는 엔진을 사용하고, Firefox는 Gecko라는 엔진을 사용합니다), 다양한 마이크로프로세서(IA-32, x64, ARM 등의 하드웨어 명령 집합 아키텍처)를 지원하도록 설계되었습니다.

근 10년 사이에 Javascript를 포함한 스크립트 언어(Python, C# 등)가 Machine Leaning, Data Science, Cross Platform Developments 등 다양한 곳에 활용하고 있습니다. 그 중에서도 Javascript는 Node.js라고 부르는 Javascript 런타임을 통한 Server side에서의 활용이 활발하게 발전하고 있습니다.

### 결론

ECMA Script는 ECMA-262라고 부르는 하나의 표준이며, 모든 웹 브라우저에서 Javascript를 사용할 때 ECMA-262를 따를 것을 권장하고 있습니다. 여기서 '권장'은 '필수'가 아니기 때문에 웹 브라우저마다 지원하는 ECMA-262의 버전(ES6, ES7 등)이 다를 수 있습니다.

> ES3는 모든 브라우저가 지원하고 있습니다. 따라서 ES3로 개발하게 되면 모든 웹 브라우저에서 정상적으로 동작하는 웹 서비스를 개발할 수 있습니다. 하지만 ES3만으로는 빠르게 변화하는 현대의 웹 개발 속도를 따라가기에 한계가 있기 때문에 webpack, babel, polyfill 등의 도구와 기법을 통해 요구사항에 맞는 웹 서비스를 적절하게 구현해야 합니다.

마지막으로 ECMA Script는 거대한 변곡점이 있을 때를 제외하곤 이전의 버전을 폐기하고 있습니다. 이는 '역사판'이라고도 불리며 [MDN 자바스크립트 언어 자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/%EC%96%B8%EC%96%B4_%EB%A6%AC%EC%86%8C%EC%8A%A4)를 통해 현황을 살펴볼 수 있습니다.

> 폐기한다는 건 이전의 내용을 삭제하는 것이 아닌 이전의 내용 중 개선점을 반영한 새로운 결과물을 표준 명세에 포함시킨다는 의미입니다. 따라서 ES3(ECMA Script 3rd Edition)를 폐기하고 ES4를 작성한다고 해서 ES3의 내용을 삭제하겠다는 의미가 아닌 ES3의 내용 중 ES4에 반영할 내용을 포함해 새로운 명세를 작성한다는 의미입니다.

## 현재의 ECMA Script

앞서 언급한 [MDN 자바스크립트 언어 자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/%EC%96%B8%EC%96%B4_%EB%A6%AC%EC%86%8C%EC%8A%A4)를 참고하면, 현재 표준으로 사용되는 ECMA Script 버전은 다음과 같이 3개입니다.

* ECMA-402 5th Edition, ECMAScript 2018 국제화 API 표준
* ECMA-262 9th Edition, ECMAScript 2018
* ECMA-262 10th Edition, ECMAScript 2020(작성중, 2019년을 넘길 예정이라 버전이 변경됨)

모든 ECMA Script의 명세를 살펴보는 일은 이곳에서 진행하지 않습니다. 다만, 이 자료에서는 그 흐름을 알아보고 필요할 때 찾을 수 있도록 다음과 같은 기본적인 키워드 가이드를 제공하고 있습니다.

> [ES3](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf)를 제외한 이유는 [ES3](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf)는 가장 기본이자 뼈대를 이루는 부분이기 때문입니다. 흔히 자바스크립트의 기초를 이야기할 때 거론되는 부분이고, 현대의 웹 개발에서는 특별한 경우를 제외하고는 각 스크립트의 버전을 구분해 사용하지 않기 때문에 별도로 언급하지 않고 넘어가도록 하겠습니다.

### [ES5](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262%205th%20edition%20December%202009.pdf)

* Array에 forEach, map, filter, reduce, some, every와 같은 내장 함수(Method)를 지원하기 시작함. Method Chaining 가능
* Object에 대한 getter / setter를 지원하기 시작함
* 자바스크립트 strict 모드를 지원하기 시작함
* XML 대신 JSON을 지원하기 시작함
* Bind Method를 지원하기 시작함

### [ES6, ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)

가장 큰 변곡점이라고 할 수 있음

* let, const 키워드를 추가해 블록 단위 스코프 개념을 지원하기 시작함
* Arrow Function 문법을 추가해 Lexical this를 지원하기 시작함
* Class를 지원하기 시작함
* Template Literals를 지원하기 시작함
* module import / export를 이용한 모듈화를 지원하기 시작함
* 원시 타입(primitive type)에 Symbol Type이 추가됨
* 더나은 비동기 처리를 위해 Promise를 지원하기 시작함
* 더나은 비동기 처리를 위해 iterator / generator를 지원하기 시작함
* 더나은 동작 처리를 위해 새로운 형태의 정의 방법인 Proxy Object를 지원하기 시작함
* Destructuring Assignment(구조 분해 할당)을 지원하기 시작함
* 디폴트 파라미터 값을 지원하기 시작함
* Tagged Template Literal

### [ES7, ECMAScript 2016](http://www.ecma-international.org/ecma-262/7.0/)

특별한 변경 사항이 없음, 일부 동작의 구조 개선 및 변경

### [ES8, ECMAScript 2017](http://www.ecma-international.org/ecma-262/8.0/)

* async / await을 추가함
* Object에 values, entries 등을 지원하기 시작함
* Trailing commas in function

### [ES9, ECMAScript 2018](http://ecma-international.org/ecma-262/9.0/)

* Object에 rest, spread 등을 지원하기 시작함
* Promise에 finally를 지원하기 시작함
* Async iteration일 지원하기 시작함
* 정규표현식이 강화됨

### [ES10, ECMAScript 2020](https://tc39.es/ecma262/)

(ECMA Script는 2년 주기로 큰 변화를 가져다준다는 인식이 있던) 많은 이들의 예상과 다르게 큰 변화보다는 기존의 데이터 관리 방법 및 내장 함수가 추가됨

## 마지막으로

Javascript를 이용해 개발한다면 Javascript와 관련된 모든 내용을 숙지하고 있는 것이 권장되지만, 그렇지 않아도 당장 개발하는데는 지장이 없습니다. 물론 기술 면접이나 브리핑 등을 해야 한다면, 상황에 따른 요구사항이 존재하겠지만 그렇지 않은 경우라면 각 키워드를 숙지해놓고 추후에 필요할 때마다 찾아보는 것도 방법입니다.

> 앞서 언급한 것처럼 모든 내용을 숙지하는 것이 권장됩니다.

[참고 자료 - ECMA Script, Ecma-262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)
