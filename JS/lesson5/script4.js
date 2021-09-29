"use strict"

const number = +prompt("Введите число",);
let i = 1;
for (i ; i <= number ; ++i ){
    if( number % i == 0 ){
        alert(i); 
    }
}
