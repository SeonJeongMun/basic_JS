//조건문 switch

const day = 3;
let weekend = "";

switch (day) {
    case 1 :
        weekend = "Monday";
        break;
    case 2 :
        weekend = "Tuesday";
        break;
    case 3:
        weekend = "Wednesday";
        break;
    case 4:
        weekend = "Thursday";
        break;
    case 5:
        weekend = "Friday";
        break;
    case 6:
        weekend = "Saturday";
        break;
    case 7:
        weekend = "Sunday";
        break;
    /* 그 이외의 값은 어떻게 하라는 것이 없었으므로 안해도 됨 default:
        weekend = "error";
        break; */
}
console.log(weekend);