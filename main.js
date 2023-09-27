//객체타입 object - 다수의 원시 자료형 포함/복잡한 개체(entity)표현할 수 있는 자료형
// Object() or ({})으로 생성. 개체는 key:value 형태. 접근은 object.key 형태

let user = {
    name:"john", //여기는 ,
    age:27, 
}; // 마지막에 ;

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name); //console.log(user["name"]); 도 같음
console.log(user.age);

user.age = 30;
console.log(user.age); // 값 27에서 30으로 변경

//객체 내 entity 추가/삭제
user.weight = 72; //weight 필드 추가
console.log(user); //위의 console.log(user)와 달리 weight 추가 됨

delete user.age;
console.log(user); //여기서는 age 삭제된 상태로 나옴

//객체 복사 문제점 - object값 복사시 대상 전체가 아닌 object내 주소값만 복사되기 때문 .  (user와 admin이 같은 주소값을 쓰니까 다 같이 바뀌는듯)
// 가리키는 대상 전체 복사하려면 얕은 복사/깊은 복사 
let admin = user;
console.log(admin);

admin.name = "park";
console.log(admin.name); //park로 뜸
console.log(user.name); //여기는 바꾸지않았는데 part로 바뀌어서 출력

user.weight  = 50;
console.log(user.weight); //50으로 출력
console.log(admin.weight); // 여기도 50으로 출력됨