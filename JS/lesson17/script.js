"use strict";

let from = document.getElementById("from");
let to = document.getElementById("to");
let interval = 0;

const conteiner = document.querySelector(".conteiner");


conteiner.insertAdjacentHTML("beforeend", '<button id="start">ПУск</button>');
const startButton = document.getElementById("start");

let second = document.querySelector(".second");

conteiner.insertAdjacentHTML("beforeend", '<button id="stop">Пауза</button>');
const stopButton = document.getElementById("stop");





startButton.addEventListener('click', () =>{
    if(isNaN(from.value) == true){
        alert('введите начальное число');
    }; 
    if(isNaN(to.value) == true){
        alert('введите конечное число')
    };
    if(from.value < to.value){
        alert("");
    } ;
    if(isNaN(from.value) != true && isNaN(to.value) != true && from.value > to.value){
        interval = setInterval(timer, 1000);
        
    };
 
});


stopButton.addEventListener('click', () =>{
    clearInterval(interval);

});


function timer(){
   from.value--;
    second.innerText = from.value;
    if(from.value <= to.value){
        clearInterval(interval);
        second.innerText = "все";
    }
};