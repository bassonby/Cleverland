"use strict"

let salary = {
    kopelev : 1000,
    shereshov : 950,
    halimankov : 9000,
    ivanov : 850,
    belous : 800,
    pavlovich : 750,
    minchakova : 700,
    shafranskaya : 650,
    dachkevich : 600,
    bachkirova : 550,
};

let clone ={};

for (let key in salary) {
    clone[key] = salary[key];
}
let summ = 0;
let quantity = 0;


for(let key in salary){
    summ += salary[key];
    quantity += 1;
}

let averageSalary = summ / quantity;

salary.averageSalary = averageSalary;


let maxSalary = 0;

for(let key in salary){
    if(salary[key] > maxSalary){
        maxSalary = salary[key]; 
    }  
}

for(let key in salary){
    if(maxSalary === salary[key]){
        alert( `Фамилия : ${key}`);
        alert( ` Сумма в шекелях : ${salary[key]}`);
    }
}
