/*
// 1) 변수- 변경가능한 값을 저장하기 위한 기억 공간 (사용 전 반드시 선언 필요, 중복 선언 불가, 키워드 let)
let A = 123;
console.log(A);

A = 456;
console.log(A);

//let A = 789; syntax error



// 2) 상수 - 변경 불가능한 값을 저장하기 위한 기억 공간 (사용 전 반드시 선언 필요,중복 선언 불가,키워드 const 상수는 보통 대문자로 표기)
const B = 123; // 상수 선언과 동시에 값 초기화
console.log(B);

// const B = 456; TypeError

/* const C; 초기화 없이 상수 선언 => 에러
C = 123; Syntax Error */


/*
// 3) 변수 / 상수 예제 코드
let hi; // 선언 후 할당
hi = "hello";

let = "hello"; //선언과 동시에 초기화

let name = "jeon", age = 13, msg = "hollo"; //한 줄에 여러 변수 선언하고 초기화

const TESTCASE = 5; // 상수는 보통 대문자 표기
const BIRTHDAY = "2020. 1. 5";

console.log(age);
console.log(BIRTHDAY); */


// 4) 호이스팅 - 코드에 서넝ㄴ된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어올리는 작업
// var 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 x
// let/const 변수 선언과 함수 표현식에서는 호이스팅 발생 x

console.log(name_1); //using var
var name_1= "john";
console.log(name_1);

var name_2; //hosting 위 코드와 같음 
console.log(name_2);
name_2 = "john";
console.log(name_2);

console.log(name_3); // let 사용 바로 에러뜨기때문에 오류수정에 더 좋음
let name_3 = "john"; 