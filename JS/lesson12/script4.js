"use strict";

let speed = [
    9.73,
    9.68,
    9.71,
    9.74,
    9.72,
    9.75
];

speed.sort();

let [max1, max2, max3, ...rest] = speed;
console.log(speed);

alert(max1);
alert(max2);
alert(max3);

console.log(rest);

