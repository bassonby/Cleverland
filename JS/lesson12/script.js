"use strict"

let  experience = {
    Мишин : 1,
    Колесников : 2,
    Бобров : 3,
    Петров : 4,
    Никифоров : 5,
    Филатов : 6,
    Харитонов : 10,
}

let experienceMass = Object.values(experience);

console.log(experienceMass);

let maxExperience = 0;

experienceMass.forEach( item => { 
    maxExperience +=  item 
});

let middleExperience =  (maxExperience / experienceMass.length).toFixed(1);

console.log( middleExperience);

experienceMass.forEach( item => { 
    maxExperience +=  item 
});

let exp3Yars = 0;
let exp20Yers = 0;

experienceMass.forEach( item => { 
    if(item < 3){
        exp3Yars++
    }
    if(item > 20){
        exp20Yers++ 
    }    
});

console.log(exp3Yars);
console.log(exp20Yers);

alert(`Средний стаж на конторе -  ${middleExperience}`);
alert(`Количество сотрудников со стажем до 3х лет - ${exp3Yars}`);
alert(`Количество сотрудников со стажем более 20 лет - ${exp20Yers}`);












