"use script"

const number = +prompt("Введите число",);
let sum = 0;
for( let i = 0 ; i <= number ; i++ ){
    sum += i;
}
alert(sum);