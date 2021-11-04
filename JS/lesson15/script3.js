"use strict";

const input = document.querySelector('input');
input.setAttribute('id', "button")
alert(input.hasAttribute('id'));
input.setAttribute('value','Жми');
alert(input.hasAttribute('value'));
alert(input.maxLength);
alert(input.hasAttribute('value'));
input.setAttribute("type", "button");
alert(input.getAttribute("type"));
input.setAttribute("onclick", "play()");
function play(){
    alert("Привет!!!")
};
input.removeAttribute('maxLenght');
alert(input.hasAttribute('maxLenght'));








