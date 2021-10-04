"use strict"
const radius = +prompt("Введите радиус окружность",);
const messege =circle(radius);
function circle(radius){
    return 2 * Math.PI * radius;
}
circle(radius);
alert(`Длина вашей окружности ${messege} `);
