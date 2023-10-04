//반복문 while
//for 문에 비해 선언문과 증감문 없이 루프 수행, 무한루프 수행시 많이 사용
// do while은 최소 한번 수행 필요할 때 사용


/* let i =0;

while(i < 3) {
    console.log(i); //여기까지 하면 무한 루프
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <3);
 */

i = 4;
do {
    console.log(i);
    i++;
} while (i <3);
//조건이 false임에도 먼저 한번은 console 하기 때문에 4 나옴

let j = 5;

while(j < 3) {
    console.log(j); 
    j++;
}
//조건이 fasle라서 수행 x