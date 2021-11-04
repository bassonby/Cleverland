"use strict";

languages.hidden = true;

languages.insertAdjacentHTML('afterend', '<button onclick="play()" >Open</button>');


function play(){
    languages.hidden = !languages.hidden;
}

const jen = document.querySelector("li");
const ken = document.querySelector("ol li:nth-child(2) > ol");
const len = document.querySelector("li:last-child > ol")

alert(jen.textContent);
alert(ken.textContent);
alert(len.textContent);
