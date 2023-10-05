//배열 
// 배열 크기 및 배열 여부 확인: Array.length, Array.isArray()
// 배열 추가/삭제: Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice() 등
// 배열탐색: Array.indexOf(), Array.lastIndexOf(),Array.includes()
// 배열변형(callback미사용): Array.sort(), Array.reverse(), Array.join()
// 배열선언방법 
let arr_1 = new Array(10); //사이즈 지정가능
let arr_2 = [];

let fruits = ["apple", "orange", "melon"];
console.log(fruits.length);
console.log(fruits[0]);

fruits[1] = "kiwi";
console.log(fruits);

//배열타입확인
let num = 123.456;
let str = "hello";
let fruit = ["apple", "orange", "banana"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruit));

console.log(fruit.length);

// delete로 삭제할 수 있으나 배열 사이즈가 그대로. 그 부분만 비게 됨. 잘 사용  x
delete fruit[1];
console.log(fruit);
console.log(fruit.length);