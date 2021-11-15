"use strict";

let clicks = 0;


const button = document.getElementById("button");


 let start = function() {
    clicks++
console.log(clicks);
if(clicks % 2 === 0){
    button.innerText = "start"
}
if(clicks % 2 !== 0){
    button.innerText = "STOP"
};
};

button.onclick = start;


if(clicks % 2 === 0){
    button.innerText =" Пуск";
}
if(clicks % 2 !== 0){
    button.innerText =" Стоп";
}