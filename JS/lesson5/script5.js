"use strict"

const number = +prompt("Введите число", );
let i = 10;
for( i ; i < 100 ; i++){
    let m = Math.floor(i / 10);
    let k = ( i - m * 10);
    let s = m + k ;
    if ( s % number == 0){
        alert(i);
    } 
}