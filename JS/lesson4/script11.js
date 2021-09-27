"use strict"

const period = +prompt(" 1 – дециметр, 2 – километр, 3 – метр, 4 – миллиметр, 5 – сантиметр", );
const line = +prompt("введите длину отрезка", );

switch (period) {
    case 1 :
        alert(line / 10,"метров" );
        break;
    case 2 :
        alert(line * 1000 ,"метров");
        break;    
    case 3 :
        alert( line,"метров");
        break;
    case 4 :
        alert(line / 1000,"метров");
        break;
    case 5 :
        alert( line / 100,"метров");
        break;
default:
}