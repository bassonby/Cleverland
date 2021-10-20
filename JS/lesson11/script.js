"use strict"

let fruits = [
    "Яблоко",
    "Апельсин",
    "Слива",
];

fruits.push("Абрикос");
fruits.unshift("Нектарин", "Персик");

fruits.splice(2, 2);
fruits.slice(0, 3);

console.log(fruits);
let  favoriteFruits = [

];

favoriteFruits = fruits.slice(0, 3);

console.log(favoriteFruits);

let berries = [
    "Барбарис",
    "Виноград",
    "Годжи",
];

fruits = fruits.concat(berries);
console.log(fruits);
alert(fruits.length);

favoriteFruits.forEach(function(item, index, array) {
    alert(`индекс- ${index} ;  Название - ${item} `);
});

alert(fruits.indexOf("Слива", 0));
alert(fruits.includes("Яблоко", 0));
