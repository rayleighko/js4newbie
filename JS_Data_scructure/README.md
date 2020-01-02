# Javascript Data Structure

자바스크립트를 학습하기 위한 훌륭한 방법은 수없이 많습니다. 따라서 이 자료에서는 자바스크립트를 사용하기 위한 기초적인 내용(문법, 특징 등)을 다루지 않고, 그것을 기반으로 해 실무에서 중요하다고 생각하는 데이터를 다루는 방법에 집중하려 합니다.  

이를 위해 가장 기본적으로 Javascript를 활용해 흔히 '자료구조'라고 부르는 데이터의 형태를 구현해보도록 하겠습니다. 만약 자료구조에 대한 기본 지식이 없다면, 본 자료의 '[자료구조](/Data_structure/README.md)' 부분을 참고하시길 바랍니다.  

이 장에서는 실습을 진행합니다. 각 내용에 대해 먼저 직접 구현해보고, '답안'을 확인해보도록 합시다.  

> 모든 예제는 원활한 실습을 위해 크롬 개발자 도구를 활용합니다.  
> MDN 참고 금지! console.log를 이용해 값을 확인하고, 각 항목의 요구사항을 충족시켜봅시다.

## Array, 배열

자바스크립트의 Array는 순수한 '배열'이 아닌 링크드 리스트 기반 Hash Map입니다. 하지만 여기서는 Array를 하나의 배열로 생각하고 간단한 예제를 진행하도록 하겠습니다. 또한, Array를 관리하는 내장 함수를 학습하도록 합니다.  

### 배열 요구사항

* JS의 Array를 이용해 길이 5 이상의 string 배열 만들기  
* JS의 Array를 이용해 기본적인 내장 함수(push, pop, shift, unshift, indexOf, splice, slice) 사용해보기  
* JS의 Array를 이용해 심화적인 내장 함수(map, filter, find, keys, concat, flat, entries, includes) 사용해보기  

[답안](/JS_Data_scructure/Answer.js)  

## List, 리스트

자바스크립트의 Array는 순수한 '배열'이 아닌 링크드 리스트 기반 Hash Map입니다. 하지만 여기서는 일부러 Linked List를 직접 구현해보도록 하겠습니다(Array List는 생략).  

### 리스트 요구사항

* 하나의 연속되는 항목들이 포인터로 연결된다.  
* 마지막 항목은 Null을 가리킨다.  
* 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다.  
* (시스템 메모리가 허용하는 한) 필요한 만큼 길어질 수 있다.  
* 메모리 공안을 낭비하지 않는다(하지만 포인터를 위한 추가의 메모리를 필요로 한다).  
* 데이터의 삽입과 삭제가 가능해야 함.  

하나의 노드는 다음과 같은 모양을 가진다.  

![list-node](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F2767B53B57E8D1460C1D10)

또한, 각 노드는 다음과 같은 모양으로 연결된다.  

![list-nodes](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F25354A3857E8D15C1CA6DF)

[답안](/JS_Data_scructure/Answer.js)

## Queue, 큐

### 큐 요구사항

* FIFO(First In First Out) 형태로 데이터의 삽입과 삭제가 일어난다.  
* 데이터를 삽입하는 enqueue와 삭제하는 dequeue을 구현한다.  

[답안](/JS_Data_scructure/Answer.js)

## Stack, 스택

### 스택 요구사항

* LIFO(Last In First Out) 형태로 데이터의 삽입과 삭제가 일어난다.  
* 데이터를 삽입하는 push와 삭제하는 pop을 구현한다.  

[답안](/JS_Data_scructure/Answer.js)

## Graph, 그래프

여러 그래프 형태 중 무방향성 그래프이자 인접 리스트인 그래프를 구현하는 것을 목적으로 한다.  

### 그래프 요구사항

* 하나의 노드는 특정한 값을 가지고 있다.  
* 하나의 노드는 하나 이상의 엣지를 가질 수 있다. 단, null도 허용한다.  
* 그래프의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.  

[답안](/JS_Data_scructure/Answer.js)

## Tree, 트리

여러 트리 형태 중 가장 기본적인 트리의 형태를 구현하는 것을 목적으로 한다.  

### 트리 요구사항

* 하나의 노드는 특정한 값을 가지고 있다.  
* 하나의 노드는 하나 이상의 자식을 가질 수 있다. 단, null도 허용한다.  
* 트리의 데이터는 선언 시 결정된다. 단, 추가 혹은 삭제 기능을 포함해 구현하면 좋다.  

[답안](/JS_Data_scructure/Answer.js)
