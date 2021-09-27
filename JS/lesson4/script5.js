"use strict"

const number1 = +prompt("Введите первое число", 1000);
const number2 = +prompt("Введите второе число",200 );
const number3 = +prompt("Введите третье число",17 );
let maxNum12 = 0 ;
let maxNumber = 0;
if (number1 > number2){
    maxNum12 = number1 ;
}
else{
    maxNum12 = number2;
}
console.log(maxNum12);

if (maxNum12 > number3){
    maxNumber = maxNum12;
}
else{
    maxNumber = number3;
}
console.log(maxNumber);
alert(maxNumber);