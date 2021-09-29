"use strict"
let n = +prompt("Введите число",) 
let s = 0 ;
for( s ; n !== 0 ; n = +prompt("Введите число",)){
  if(n === 0)break;
  s += n;
}
alert('Сумма: ' +  s);






// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (!value) break; 
//   sum += value;
// }
// alert( 'Сумма: ' + sum );
