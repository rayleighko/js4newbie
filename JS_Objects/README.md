# JavaScript Objects

JavaScript에서는 모든 데이터가 객체로 취급됩니다. 객체 지향 개발 방법론에서 이야기하는 객체와 같은 의미를 갖지만, 현실의 사물을 객체화해 데이터로 표현하는 것과는 다른 맥락의 의미를 갖고 있습니다. 표준 내장 객체는 다음과 같습니다.

- Array
- Boolean
- Date
- Error
- Function
- JSON
- Math
- Number
- Object
- RegExp
- String
- Map
- Set
- WeakMap
- WeakSet

여기서는 대표적으로 사용되는 Object 객체와 JSON 객체를 살펴보도록 하겠습니다. 그 이유는 JavaScript를 사용해 객체를 관리할 때 주로 사용하는 형태가 Object와 JSON(JavaScript Object Notation)이기 때문입니다. Object와 JSON은 속성-값 또는 키-값 쌍으로 이루어진 데이터의 형태이며 다음과 같이 표현할 수 있습니다.

## Object

Object는 JavaScript 내부에서 키-값으로 데이터를 관리할 수 있는 가장 기본적인 형태로 제공됩니다. 콜론으로 나뉘어져 있는 키(문자열)와 값(어떤 값이나 가능)의 쌍을 갖는 데이터의 집합으로 이루어집니다. 다음과 같이 표현할 수 있습니다.

```js
// object
{
  name: "Moon",
  age: 0,
  isStudent: true
}
```

## Json

JSON은 JavaScript의 Object와 큰 차이는 없지만, 일반적으로 키에 쌍따옴표를 붙인다거나 마지막 데이터에 콤마를 허용하지 않는 등의 미세한 차이점을 가지고 있습니다.

```json
// json
{
  "name": "Moon",
  "age": 0,
  "isStudent": true
}
```

## 둘의 용도 차이

둘의 형태는 유사하며, 일반적으로 JavaScript 문서 내부에서 키-값으로 데이터를 관리할 때는 Object의 형태를 사용하고 JavaScript 문서 외부에서 키-값으로 데이터를 관리할 때는 JSON의 형태를 사용합니다.

> 특별한 차이는 없지만, 둘은 분명히 다르기 때문에 이 점에 유의하고 다음으로 넘어갑시다.

## 실습

둘의 차이는 명백하지만, 우리는 당장 JavaScript 내부에서 키-값의 형태를 갖는 기본적인 데이터를 다뤄볼 것입니다. 따라서 실습은 JavaScript의 Object를 사용해 진행됩니다. 요구사항에 맞춰 Object를 사용해보고 '답안'을 확인합시다.

### 요구사항

- Object.entries()를 사용해 Object의 key, value를 확인해보자.
- Object.assign()을 사용해 두 개의 Object를 합쳐보자.
- Object.freeze()를 사용해 Object를 동결시켜보자.
- Object.seal()을 사용해 Object를 밀봉해보고 freeze와의 차이를 생각해보자.
- Object.values()를 사용해 Object의 값 리스트를 확인해보자.
- Object.keys()를 사용해 Object의 키 리스트를 확인해보자.
- 다음의 Object를 기반으로 JavaScript의 Object 내장 함수를 바탕으로 데이터를 관리해보자(MDN 활용 가능).
  - 튜브의 모든 정보를 구하시오
  - 라이언과 콘의 모든 정보를 구하시오
  - 라이언의 나이를 구하시오
  - 프로도와 무지의 나이 합을 구하시오
  - 펭수와 라이언의 나이 합을 갖는 캐릭터의 description을 구하시오
  - 모든 캐릭터를 나이 순으로 정렬하시오
  - 튜브의 description에서 '말괄량이'를 '개구쟁이'로 바꾸시오
  - 모든 캐릭터에게 string 형태의 성별(gender) 정보를 입력하시오

```javaScript
[
  {
    id: "1",
    name: "라이언",
    age: 2,
    description: "한국에서 태어난 멋쟁이 사자"
  },
  {
    id: "2",
    name: "프로도",
    age: 4,
    description: "한국에서 태어난 귀여운 강아지"
  },
  {
    id: "3",
    name: "튜브",
    age: 5,
    description: "한국에서 태어난 말괄량이 오리"
  },
  {
    id: "4",
    name: "무지",
    age: 1,
    description: "한국에서 태어난 사랑스러운 단무지"
  },
  {
    id: "5",
    name: "콘",
    age: 2,
    description: "한국에서 태어난 근엄한 악어"
  },
  {
    id: "6",
    name: "펭수",
    age: 3,
    description: "한국에서 태어난 매력쟁이 펭귄"
  }
];
```
