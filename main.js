//Scope 변수/상수에 접근할 수 있는 범위
//모듈/함수 내 코드에서 동일한 변수 사용시 간섭 줄이는 용도
// Global scope: 전역에 선언. 어디에서도 접근 가능
// Local Scope(block, function level scope): 특정지역에 선언/ 해당 지역 내에서만 접근 가능

//예제 1 global 
let x = 1;
let y = 2;

console.log(x); 
console.log(y); 

//local 
{
    let x = 3;
    let y = 4;

    console.log(x); //3
    console.log(y); //4
}

console.log(x); //1
console.log(y); //2

//예제 2
let A =1;
let B = 2;

{
    let C = 3;
    let D = 4;

    console.log(A); //1
    console.log(C); //3
}
    console.log(C); //is not defined



//예제 3 local 안의 local
let a = 1;

{
    let c = 3;
    let d = 4;
    console.log(c); //3

    {
        let c = 5;
        let d = 6;
        console.log(c); //5
    }
}

//예제 4 block level, function level
//global scope
let index = 1000;

//function level
function local_func() {
    let index = 100;
    
    //block level 
    for(let index = 0; index < 10; index++) {
        console.log(index); // 0~9
    }
    console.log(index); // 100
}

local_func();
console.log(index); // 1000