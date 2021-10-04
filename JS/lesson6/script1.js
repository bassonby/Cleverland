"use strict"



function checkNumber(n){
    if(n > 10) return n ** n;
    if( n === 8 || n === 9 ) return n - 1;
    return "Число меньше 7";

}

const n = +prompt("введите число",);
const messege = checkNumber(n);

alert(messege);