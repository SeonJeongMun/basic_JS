// 조건문- 3항 연산자
//3항연산자로  if-else 대체 사용
//변수 = (조건식) ? 참일 떄 값 : 거짓일 떄 값

let age = 20;

//조건문 if-else
if(age < 19) {
    msg = "The user is not an adult.";
} else{
    msg = "The user is an adult.";
}
console.log(msg);

//조건문 3항 연산자
msg_another = age < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another);

//둘다 결과 같음 The user is an adult.