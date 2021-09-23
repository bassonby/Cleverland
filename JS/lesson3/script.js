'use strict'
/*let num = 1;
num +=  12;      
num -=  14;
num *= 5;
num /= 7;
num = ++num;
num = num--;
alert(num);

let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
alert(result)
console.log(c)
*/


const a = 0;
const b = null;
const c = undefined;
const d = "Привет";
let hello = (a || b || c || d );
console.log(hello, " присваивает переменной hello, значение “Привет”");

let hello1 = (a && b && c && d);
console.log(hello1, " присваивает переменной hello, значение 0");

let hello2 = (a == d < c < d);
console.log(hello2, "логическое true")

let hello3 = (a < d < c < d);
console.log(hello3, "логическое false");