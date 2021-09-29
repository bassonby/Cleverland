"use strict"

const number = +prompt(" введите число ", );
let dayOfWeek = (number % 7);
if (dayOfWeek === 0){
    alert("Воскресенье");
}
else if(dayOfWeek === 6){
    alert("Суббота");
}
else if(dayOfWeek === 5){
    alert("Пятница");
}
else if(dayOfWeek === 4){
    alert("Четверг");
}
else if(dayOfWeek === 3){
    alert("Среда");
}
else if(dayOfWeek === 2){
    alert("Вторник");
}
else if(dayOfWeek === 1){
    alert("Понедельник");
}