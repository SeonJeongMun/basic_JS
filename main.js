//연산자 - 산술/대입연산자

console.log(31+10-9); //덧셈,뺄셈 연산자
console.log(31*10); //곱셈 연산자
console.log(31/10); //나눗셈 연산자
console.log(parseInt(31/10)); //나눗 셈 몫 구하기
console.log(31%10); //나머지 연산자 %
console.log(2**3); //거듭제곱 연산자

//대입연산자
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "wordl";

let num_3, str_3;

num_3 = num_1 + num_2;
str_3 = str_1 + str_2; //문자열 연결도 산술연산으로 가능

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);