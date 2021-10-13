"use strict"

const salary = {
    surName : {
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
    },
    middleSalary(){
        let summ = 0;
        let quantity = 0;
        for(let key in salary.surName){
            summ += salary.surName[key];
            quantity += 1;
        }
        return summ / quantity;
    },
    maxSalary(){
        let maxSalary = 0;
        for(let key in salary.surName){
            console.log(salary.surName[key]);
            if (maxSalary <= salary.surName[key]){
                maxSalary = salary.surName[key];
            }
        }
        return maxSalary;
    },
    minSalary(){
        let minSalary = 0;
        for(let key in salary.surName){
            console.log(salary.surName[key]);
            if (minSalary <= salary.surName[key]){
                minSalary = salary.surName[key];
            }else{
                minSalary = salary.surName[key];
            }
        }
        return minSalary;
    }, 
}

salary.middleSalary();
salary.maxSalary();
salary.minSalary();

alert(`Средняя зарплата по конторе - ${salary.middleSalary()}`);
alert(` Максимальная зарплата по конторе - ${salary.maxSalary()}`);
alert(` Минимальная зарплата по конторе - ${salary.minSalary()}`);
