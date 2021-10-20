"use strict";

function conclusionHeresy() {
    let string = prompt("Дайте оценку фильму зеленый слоник", "Замечательный фильм посмотрел бы еще разок");
    let arr = string.split(" ");
    arr.sort();
    let str = arr.join(" ");
    alert(str);
};

conclusionHeresy()