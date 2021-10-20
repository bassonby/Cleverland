"use strict";

let arr = [
    2,
    -15,
    12, 
    83,
    -29,
    111,
    -6,
    22
];

console.log(arr.indexOf(arr.find(item => item > 99)));
console.log(arr.find(item => item % 5 == 0 ));

let arr2 = arr.filter(item => item > 0); 

console.log(arr2);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };
arr.sort(compareNumeric);

console.log(arr);

let result = arr.map(function(item){
    if (item < 0) return Math.abs(item);
    if (item > 0) return item * 2 ;

}) ;
console.log(result);


arr.reverse();
console.log(arr);


let product = 1 ;

arr.forEach(function(item,){
    product = product * item;
});
let middleProduct = product / arr.length ;
console.log(product);
console.log(middleProduct);