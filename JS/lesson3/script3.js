'use strict'

const width = prompt("Какой ширины буде ваша галерея?",[1024]);
const quantity = prompt("Сколько всего изображений будет в галерее?",[1]);
const widthImg = prompt("Какова ширина каждого изображения?",[200]);
const maxImgInRow = Math.floor(width / widthImg); // Максимальное кол-во Img в ряду 
/*if (quantity < maxImgInRow){                       //если кол-во Img <= max 
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
    let wholeRow = Math.floor(quantity / maxImgInRow);
    alert(`количество полных рядов ${wholeRow}`);
    let remaind = quantity - wholeRow * maxImgInRow;
    alert(`количество изображений в последнем ряду ${remaind}`);
}
else if(quantity == maxImgInRow){
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
    let wholeRow = Math.floor(quantity / maxImgInRow);
    alert(`количество полных рядов ${wholeRow}`);
    let remaind = quantity - wholeRow * maxImgInRow;
    alert(`количество изображений в последнем ряду ${remaind}`);
}
else if(quantity > maxImgInRow){
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
    let wholeRow = Math.floor(quantity / maxImgInRow);
    alert(`количество полных рядов ${wholeRow}`);
    let remaind = quantity - wholeRow * maxImgInRow;
    alert(`количество изображений в последнем ряду ${remaind}`);
}*/

if (quantity < maxImgInRow){                       
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
   
}
else if(quantity == maxImgInRow){
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
    let remaind = quantity - wholeRow * maxImgInRow ;
    alert(`количество изображений в последнем ряду ${remaind}`);
}
else if(quantity > maxImgInRow){
    let row = Math.ceil( quantity / maxImgInRow);
    alert(`количество рядов ${row}`);
   
}
let wholeRow = Math.floor(quantity / maxImgInRow);
alert(`количество полных рядов ${wholeRow}`);
let remaind = quantity - wholeRow * maxImgInRow;
alert(`количество изображений в последнем ряду ${remaind}`);