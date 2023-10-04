//조건문 switch

//예제1
let day_number = 1;
let day =""; // let day;만 해도 결과는 같네 이건 문자열로 할거라고 명시적으로 선언하는 건가봄

switch (day_number) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuseday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "error";
        break;
}
console.log(day);

//예제2
let browser = "Chrome";

switch(browser) {
    case "Explorer":
        msg = "ActiveX installation required";
        break;
    case "Chrome": //이렇게 한꺼번에 break 적는것도 가능
    case "Firefox": 
    case "Safari":
    case "Opera":
        msg = "Supported browsers!";
        break;
    default:
        msg = "Unsupported browsers!";
        break;                

}
console.log(msg);