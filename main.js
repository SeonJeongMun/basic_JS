//반복문 for
/* 선언문, 조건문, 증감문 자리에 공백 입력 가능 조건문이 fail되기 전까지 코드블록 반복 수행
for(선언문; 조건문; 증감문) {
// statement Block
} 형태  */

for (let i = 0; i < 3; i++) {
    console.log(i); // 0,1,2
}

for (let i = 10; i < 3; i++) {
    console.log(i); 
} //수행되지 않음

let num = 0;
for (; num <2; ) {
    console.log(num); //여기까지만 하면 0인 상태로 무한루프 계속 0 나옴
    num++;
} // 0 1

// 이중 for문

for (let i = 0; i <3; i++) {
    for(let j= 0; j<3; j++) {
        console.log(`${i}+ ${j} = ${i+j}`);
    }
}

//for in for of  
