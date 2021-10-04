"use strict"
let number = +prompt("Введите число",);
let degree = +prompt("Введите стень числа");
const messege = calcDegree(number, degree);
function calcDegree(number, degree){
    return number ** degree;
}
calcDegree()
alert(messege);