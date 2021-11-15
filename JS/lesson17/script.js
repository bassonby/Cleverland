"use strict";

let from = document.getElementById("from");
let to = document.getElementById("to");
let interval = 0;
let clicks = 0;

const button = document.querySelector("button");

let second = document.querySelector(".second");

button.onclick = start;

button.addEventListener('click', () =>{
    if(isNaN(from.value)){
        alert('введите начальное число');
    }; 
    if(isNaN(to.value)){
        alert('введите конечное число')
    };
    if(from.value < to.value){
        alert("конечное число должно быть меньше начального");
    } ;
    
});

  function start() {
    clicks++
    console.log(clicks);
    if(clicks % 2 === 0){
        button.innerText =" Пуск";
        clearInterval(interval);
    }
    if(clicks % 2 !== 0){
        button.innerText =" Стоп";
        interval = setInterval(timer, 1000);

    }
};

function timer(){
   from.value--;
    second.innerText = from.value;
    if(from.value <= to.value){
        clearInterval(interval);
        second.innerText = "все";
    }
};



