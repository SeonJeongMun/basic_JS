//객체 복사 문제점 - object값 복사시 대상 전체가 아닌 object내 주소값만 복사되기 때문 .  (user와 admin이 같은 주소값을 쓰니까 다 같이 바뀌는듯)
// 가리키는 대상 전체 복사하려면 얕은 복사/깊은 복사 


let user = {
    name:"john", 
    age:27, 
    sizes: {
        height: 100,
        weight: 72,
    }
}; 

/* 얕은 복사 문제점 - 객체 내 또 다른 객체가 있다면 복사되지 않음
얕은 복사 1 for loop 이용
let admin ={};
for (let key in user) {
    admin[key] = user[key];
} 
 얕은 복사 2 
let admin = Object.assign({},user);

 얕은 복사 3
let admin = {...user};  => {user.name, user.age} user내의 필드값 전개시켜라
*/

//깊은 복사 JSON 사용 나중에 다시 check
let admin = JSON.parse(JSON.stringify(user));


admin.sizes.height = admin.sizes.height+1; //100 =>101
console.log(admin.sizes.height); //101
console.log(user.sizes.height); //101

admin.name = "park";
console.log(admin.name); 
console.log(user.name); 

user.age = 50;
console.log(user.age); 
console.log(admin.age); 