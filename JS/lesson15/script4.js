"use strict";

const petrova = document.querySelector("tr:nth-of-type(3)");
petrova.remove();

const number = document.querySelector("tr:nth-of-type(1)");
const number2 = number.cloneNode(true);

const lastTr = document.querySelector("tr:last-of-type");

lastTr.after(number2);
const firstTr = document.querySelector('tr:first-of-type');

firstTr.insertAdjacentHTML('beforebegin', '<tr> <td></td><td colspan="31"> График каких-то там дежурств</td> </tr>');
number2.style.background = "yellow";
const tHead = document.querySelector("tr:first-of-type");
tHead.style.background = "yellow";


