"use strict"
let minNum12 = 0;
let minNum = 0;
let num1 = +prompt("Введите число",);
let num2 = +prompt("Введите число",);
let num3 = +prompt("Введите число",);

function  calcMin(a,b,c){
    if (num1 > num2 ){
        minNum12 = num2;
        console.log(minNum12);
    }
    else{
        minNum12 = num1;
    }
    if (minNum12 > num3){
        minNum = num3;
    }
    else{
        minNum = minNum12
    }
    return alert(minNum);
}

calcMin()