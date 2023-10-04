//연산자 - 산술/대입연산자

console.log(31+10-9); //덧셈,뺄셈 연산자
console.log(31*10); //곱셈 연산자
console.log(31/10); //나눗셈 연산자
console.log(parseInt(31/10)); //나눗 셈 몫 구하기
console.log(31%10); //나머지 연산자 %
console.log(2**3); //거듭제곱 연산자

/*
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
console.log(num_4); */

//복합대입 연산자
let num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

result_1 += num;
console.log(result_1);

result_2 -= num;
console.log(result_2);

result_3 *= num;
console.log(result_3);

result_4 /= num;
console.log(result_4);

result_5 %= num;
console.log(result_5);

//증가,감소 연산자

let number, re;

number = 10;
re = number++;
console.log(re); // 결과 : 10 re1에는  number1(10) 먼저 대입하고 
console.log(number); //결과 11 +1시켜줌

/* re = ++number; 인경우 이 행에서 바로 ++반영됨
console.log(re);  결과 11 +1먼저 시키고 
console.log(number); 결과 11 number대입 

--도 마찬가지 */