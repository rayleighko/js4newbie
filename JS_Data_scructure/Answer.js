/** Array
 * ### 요구사항
 * JS의 Array를 이용해 길이 5 이상의 string 배열 만들기
 * JS의 Array를 이용해 기본적인 내장 함수(push, pop, shift, unshift, indexOf, splice, slice) 사용해보기
 * JS의 Array를 이용해 심화적인 내장 함수(map, filter, find, keys, concat, flat, entries, includes) 사용해보기
 */

var fruits = ["사과", "바나나", "파인애플", "멜론", "수박"];

fruits.push("망고");
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("딸기"));
console.log(fruits);
console.log(fruits.indexOf("바나나"));
console.log(fruits.shift());
console.log(fruits.splice(0, 1));
console.log(fruits);
var FruitsCopy = fruits.slice();
console.log(fruits);
console.log(FruitsCopy);

// ** map **
var array1 = [1, 4, 9, 16];

// pass a function to map
var map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// ** filter **
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// ** find **
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

// ** keys **
var array1 = ["a", "b", "c"];
var iterator = array1.keys();

for (var key of iterator) {
  console.log(key);
}

// ** concat **
var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// ** flat **
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

// ** entries **
var array1 = ["a", "b", "c"];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

// ** includes **
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

/** Linked List
 * ### 요구사항
 * 하나의 연속되는 항목들이 포인터로 연결된다.
 * 마지막 항목은 Null을 가리킨다.
 * 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다.
 * (시스템 메모리가 허용하는 한) 필요한 만큼 길어질 수 있다.
 * 메모리 공안을 낭비하지 않는다(하지만 포인터를 위한 추가의 메모리를 필요로 한다).
 * 데이터의 삽입과 삭제가 가능해야 함.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(data) {
    var node = new Node(data);
    var curr;
    if (this.head == null) {
      this.head = node;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      var curr = this.head;
      var prev,
        index = 0;
      if (pos === 0) {
        this.head = curr.next;
      } else {
        while (index++ < pos) {
          prev = curr;
          curr = prev.next;
        }
        prev.next = curr.next;
      }
      this.length--;
      curr.next = null;
      return curr.data;
    }
    return null;
  }
}

var list = new LinkedList();
list.append("s");
list.removeAt(0);

/** Queue
 * FIFO(First In First Out) 형태로 데이터의 삽입과 삭제가 일어남
 * 데이터를 삽입하는 enqueue와 삭제하는 dequeue
 */
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1

/** Stack
 * LIFO(Last In First Out) 형태로 데이터의 삽입과 삭제가 일어남
 * 데이터를 삽입하는 push와 삭제하는 pop
 */
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3

/** Graph
 * 하나의 노드는 특정한 값을 가지고 있다.
 * 하나의 노드는 하나 이상의 엣지를 가질 수 있다. 단, null도 허용한다.
 * 그래프의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.
 */

class Node {
  constructor(content, next = []) {
    this.content = content;
    this.next = next; // this is for edge
  }
}

var tomato = new Node("토마토");
var garlic = new Node("마늘", [new Node("양파"), tomato]);

var graph = new Node("대파", [
  garlic,
  tomato,
  new Node("고구마", [new Node("호박"), garlic])
]);

function traverse(node) {
  console.log(node.content);
  for (let next of node.next) {
    traverse(next);
  }
}

traverse(graph);

/** Tree
 * 하나의 노드는 특정한 값을 가지고 있다.
 * 하나의 노드는 하나 이상의 자식을 가질 수 있다. 단, null도 허용한다.
 * 트리의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.
 */

class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

var tree = new Node("채소", [
  new Node("양파"),
  new Node("토마토"),
  new Node("고구마", [new Node("줄기")])
]);

function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

traverse(tree);
