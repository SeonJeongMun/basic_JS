//배열 
// 배열 크기 및 배열 여부 확인: Array.length, Array.isArray()
// 배열 추가/삭제: Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice() 등
// 배열탐색: Array.indexOf(), Array.lastIndexOf(),Array.includes()
// 배열변형(callback미사용): Array.sort(), Array.reverse(), Array.join()

// splice 매게변수로 받은 인덱스 다음부터 잘라서 나옴
let fruits = ["apple", "banana", "orange"];
let ret;

ret = fruits.splice(1); 
console.log(ret); // [ 'banana', 'orange' ] 
console.log(fruits); //[ 'apple' ]


fruits = ["apple", "banana", "orange", "melon"];

ret = fruits.splice(1,1); //index1부터 한개 잘라낸다는 뜻인듯
console.log(ret); // [ 'banana' ] 
console.log(fruits); //[ 'apple', 'orange', 'melon' ]

//잘라내기뿐만 아니라 데이터 추가까지 가능
ret = fruits.splice(1,1, "mango", "kiwi"); // [ 'apple', 'orange', 'melon' ]에서 index1인 orange를 잘라내고 그 자리에 망고,키위 넣음
console.log(ret);  //[ 'orange' ]
console.log(fruits); //[ 'apple', 'mango', 'kiwi', 'melon' ]

//slice는 splice와 같으나 원본데이터에 영향 안줌
/* 
let fruits = ["apple", "banana", "orange"];

console.log(fruits.slice(1)); // [ 'banana', 'orange'] 
console.log(fruits); // ['apple', 'orange', 'melon']

console.log(fruits.slice(1,2)); // index1부터 index2까지 잘라내기(시작,끝)
왜 결괏값이 orange만 나오지?ㅜㅜ
*/

//concat 원본데이터 영향 x
/* 
let fruits = ["apple", "banana", "orange"];
let fruits_add = ["cherry", "mango"];

console.log(fruits.concat(fruits_add)); // ["apple", "banana", "orange", "cherry", "mango"]
console.log(fruits); // ["apple", "banana", "orange"]; */
