"use strict"

let width = prompt("Какой ширины будет ваша галерея? Укажите размер в пикселях.",[1024]);
let quantityRow = prompt("Сколько изображений должно быть в одном ряду?",[4]);
let margin = prompt ("Какой внешний отступ с каждой стороный изображения? Укажите размер в пикселях.",[5]);
let result = ((width - (quantityRow * (margin * 2))) / quantityRow);
alert(result);