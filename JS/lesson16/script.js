"use strict";

let input = prompt("Введите чего");
const arr = [];

while (input !== null) {
    arr.push(input);
    input = prompt("Введите чего");
};
console.log(arr);

const body = document.querySelector('body');

const ol = document.createElement("ol");
ol.innerHTML = '';
body.append(ol);


const li = document.createElement("li");
arr.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ol.append(li);  
});

















