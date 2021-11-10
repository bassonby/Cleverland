"use strict"

let number1 = Number(prompt("Введите число с которого будет начат отсчет", 10));
let number2 = Number(prompt("Введите число которым будет закончен отсчет", 5));
let sec = 1000;
let times = (number1 - number2) * sec;

while(isNaN(number1) == true){ 
    if (isNaN(number1) == true) {
        number1 = prompt("Введите число ", 10);
    };
};

while(isNaN(number2) == true || number2 > number1 ){ 
    if (isNaN(number2) == true ) {
        number2 = prompt("Введите число ", 5);
    };
    if(number2 > number1){
        number2 = Number(prompt(`Введите число меньше ${number1}`, ));
    }
};

let printNumbers = function (){
   number1 -= 1;
   if(number1 <= number2){
       alert(`${number1} --- ваше время вышло`);
   }
};

 let timeId = setInterval(() => {
    printNumbers()
    alert(number1)
 }, sec );

 setTimeout(() => {
    clearInterval(timeId)
 },times);

    
