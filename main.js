// 자료형
let str = "hello,world";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null); //하위 버전 호환성으로 object 표기
console.log(typeof console.log);

//Boolean 논리적인 값 표현 true/false 두가지만 존재, 조건문 등에서 동작 판단 기준으로 사용
let name_check = true;
let age_check = false;

let value_check = 10 > 3;
console.log(value_check);

// null = 값이 비어있다. 존재하지 않는 비어있는 알 수 없는 값 / undefined =  할당되어 있지 않은 상태 변수선언 후 초기화 x면 undefined 자동할당
const null_check = null;
console.log(null_check === null); // output true 나오는데 단, const에서 null대신 123 같은거 할당해주면 여기 output은 false로 나옴

let A;
console.log(A);


// number 정수, 부동소수점 숫자 표현. 사칙연산. Infinity, -Infinity, NaN(Not a Number)등 특수 숫자 값 포함. 2^53 - 1 보다 큰 수는 bigint 사용해야
let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1/0;
let num_4 = 123456n;

console.log(num_1 - num_2); //-0.45600000000000307 오차 발생
console.log((num_1 - num_2).toFixed(3)); // 소수점 세번째 자리수 밑으로는 반올림해라. (소수점 세번째 자리수까지 반올림?) -0.456
console.log(num_3);
console.log(num_1 / "hello");
console.log(typeof num_4);

//string 문자, 문자열 표현 3가지 종류의 따옴표로 표현 가능 "",'', 역따옴표(tab키 위에 있음)
let str_1 = "hello_1";
let str_2 = 'hello_2';

let num = 5;
let str_3 = `hello_${num}`;

console.log(str_1);
console.log(str_2);
console.log(str_3);