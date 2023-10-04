//함수 정의 - 방식 3가지
/* 1. 함수 선언식
function func(arg1. arg2... argN) {
    expression;
} */
function add(x,y) {
    return x + y;
}

/* 2. 함수 표현식
const func = function (arg1, arg2, ... argN) {
    expression;
} */

const add2 = function(x,y) {
    return x+y;
};

/* 3. 화살표 함수 
const func = (arg1, arg2... argN) => expression;
*/

const add3 = (x,y) => x+y;

//함수 호출
function print_add(x,y) {
    console.log(x+y);
}

print_add(); //NaN
print_add(10); //NaN
print_add(10,20); //30
print_add(10,20,30); //30 뒤에 값은 무시됨

function print_add2(x,y = 10) {
    console.log(x+y);
}
print_add2(10); //y가 undefined지만 기본값이 10이므로 10 +10 = 20
print_add2(10,20); //10+20=30

//다이나믹 파라미터
function print_min(){
    console.log(arguments[0]- arguments[1]);
    //arguments까지만 하면 [Arguments] { '0': 10, '1': 20 } 이렇게 나옴
}
print_min(10,20,30); //첫번째 원소 10 -두번째 원소 20 = -10인듯


function ADD(x,y) {
    return x+y; //break 역할
    console.log("hello"); //이미 break했으므로 실행x 실행되게 하려면 return 위로 가야
}
let result = ADD(10,20);
console.log(result);
