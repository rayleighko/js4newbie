/**
 * Object.entries()를 사용해 Object의 key, value를 확인해보자.
 */

const object1 = {
  a: "somestring",
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

/**
 * Object.assign()을 사용해 두 개의 Object를 합쳐보자.
 */

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

/**
 * Object.freeze()를 사용해 Object를 동결시켜보자.
 */

const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

/**
 * Object.seal()을 사용해 Object를 밀봉해보고 freeze와의 차이를 생각해보자.
 */

const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
// seal과 freeze, 둘의 차이는 seal은 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있고, freeze는 그렇지 않다는 것입니다.

/**
 * Object.values()를 사용해 Object의 값 리스트를 확인해보자.
 */

const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

/**
 * Object.keys()를 사용해 Object의 키 리스트를 확인해보자.
 */

const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

/**
 * 다음의 Object를 기반으로 Javascript의 Object 내장 함수를 바탕으로 데이터를 관리해보자.
 * 튜브의 모든 정보를 구하시오
 * 라이언과 콘의 모든 정보를 구하시오
 * 라이언의 나이를 구하시오
 * 프로도와 무지의 나이 합을 구하시오
 * 펭수와 라이언의 나이 합을 갖는 캐릭터의 description을 구하시오
 * 모든 캐릭터를 나이 순으로 정렬하시오
 * 튜브의 description에서 '말괄량이'를 '개구쟁이'로 바꾸시오
 * 모든 캐릭터에게 string 형태의 성별(gender) 정보를 입력하시오
 */

// 이 부분은 답안을제공 하지 않습니다. 각자가 생각하는 데이터를 창의적으로 작성하고 토론형으로 어떻게 구현했는지 이야기합니다.
