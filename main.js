//배열 
// 배열 크기 및 배열 여부 확인: Array.length, Array.isArray()
// 배열 추가/삭제: Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice() 등
// 배열탐색: Array.indexOf(), Array.lastIndexOf(),Array.includes()
// 배열변형(callback미사용): Array.sort(), Array.reverse(), Array.join()
// push, pop(뒤) / unshift, shift(앞)
let fruits = ["apple", "banana", "orange"];
let ret;

ret = fruits.push("melon");
console.log(fruits); // melon이 제일 뒤에 붙음
console.log(ret); // 여기서는 배열의 총 사이즈인 4가 나옴

ret = fruits.pop();
console.log(fruits); //뒤에 있던 멜론이 빠짐 
console.log(fruits.length);
console.log(ret); // 삭제뿐만 아니라 삭제된 데이터 반환되어 들어감 결괏값: melon


let fruit = ["apple", "banana", "orange"];
let retu;

retu = fruit.unshift("melon"); 
console.log(fruit); // melon이 제일 앞에 붙음
console.log(retu); // 동일하게  4가 나옴

retu = fruit.shift();
console.log(fruit); //앞에 있던 melon이 빠짐
console.log(fruit.length);
console.log(retu); // 삭제뿐만 아니라 삭제된 데이터 반환되어 들어감 결괏값: melon


