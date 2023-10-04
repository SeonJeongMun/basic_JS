//연산자 - 비교연산자 
// == 단순 값의 같음을 비교하는 동등비교, === 자료형까지 같음을 판단하는 일치비교
// ex) 5 == '5' true 5 === '5' false

console.log("Z">"A"); // true 순서상 더 뒤에 있으므로 크다고 판단
console.log("ZA">"AAAA") //길이는 AAAA가 더 길지만 이미 멘 앞의 Z와 A에서 판단났으므로 true 
console.log("Hello" < "Hi"); //H는 같고 E랑 I 비교해서 순서대로 판단
console.log("Hello" >= "Helloo"); //o가 하나 더 있으므로 Helloo가 더 큼 false

console.log("5" <= 10); //true
console.log(true == 1); //true
console.log(true === 1); //false 자료형이 다르므로


//논리 연산자
console.log(true || false); //t
console.log(Boolean(0 || false)); //f
console.log(Boolean(123 && 0)); //f Boolean 안해주면 0 나오더라 
console.log(Boolean(0 && false)); //f 하나라도 f면 f
console.log(!123); //f