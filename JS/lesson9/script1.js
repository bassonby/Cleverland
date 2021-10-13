"use strict"

function Car(carBrand, engineVolume, yearOfIssue){
    this.carBrand = carBrand;
    this.engineVolume = engineVolume;
    this.yearOfIssue = yearOfIssue;
}

let car = new Car ("honda", 1599, 1995);
let car2 = new Car("fiat coupe", 1999 , 2003);

alert(car2.carBrand);
alert(car2.engineVolume);
alert(car2.yearOfIssue);