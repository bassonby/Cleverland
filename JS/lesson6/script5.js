"use strict"

const number = +prompt("Введите число",);
const result = calcNum(number);
function calcNum (number){
    let cycle = 1;
    for(number ; number > 10 ;){
       number /= 10;
       cycle += 1;  
    }
    return cycle;    
}  
calcNum(number);
alert( `В вашем числе ${result} цифр`);



// const number = +prompt("Введите число",);
// console.log(number);
// const result = calcNum(number);
// console.log(result);
// function calcNum (number){
//     if (number / 10 < 1) return "одна цифра";
//     if (number / 10 < 10 ) return "две цифры";
//     if (number / 100 < 10) return " три цифры";
//     if (number / 1000 < 10 ) return " четыре цифры";
// }
// calcNum(number);
// alert(`В введеном числе ${result}`);

