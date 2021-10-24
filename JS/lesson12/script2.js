"use strct"

let monitors = {
    Philips: 21,
    Asus: 19,
    Samsung: 23.5,
    LG24MK: 23.6,
    LG27GL: 27
};

let monitorsSm = Object.fromEntries(
    Object.entries(monitors).map(([key, value]) => [key, value * 2.54])
);

console.log(monitorsSm);

let quantity = Object.keys(monitors);

alert(quantity.length);