"use strict"

const width = +prompt("Введите ширину прямоугольника",);
const heith = +prompt("Введите высоту прямоугольника",);
const  square = {
    [width] : 0,
    [heith] : 0,
    area(){
        return this.width * this.heith;
    },
    perimetr(){
        return this.width * 2 + this.heith * 2;
    }
};

square.width = width;
square.heith = heith;

square.area();
square.perimetr();

alert(`площадь прямоугольника ${square.area()} единиц` );
alert(`периметр прямоугольника ${square.perimetr()} единиц`);