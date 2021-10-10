"use strict"

const person ={
    surname : "Шибеко",
    name : "Сергей",
    middleName : "Леонидович",

};

person.dateBirth = "21.01.1991";

person.profession = "техникСтроитель";

person.position = "каменщик ";

person.experience = 7 ;


const person2 ={
    surname : person.surname,
    name : person.name,
    dateBirth : person.dateBirth, 
}
delete person.middleName;


if( "middleName" in person){
    alert(person.middleName);
}
else{
    alert("такого нет");
}

// for(let key in person){
//     alert(key);
//     alert(person[key]);
// }
let number = 0;
for(let key in person){
    if (person[key] = Number){
        number += 1;
    }
}

alert(number);

