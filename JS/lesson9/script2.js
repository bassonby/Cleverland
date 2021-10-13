"use strict"

function SectorArea(sectorRadius, degreeMeasure){
    this.sectorRadius = sectorRadius;
    this.degreeMeasure = degreeMeasure;
    this.calcSector = function (){
        alert( 3.14 * this.sectorRadius * this.degreeMeasure / 360);
    }
}

let fargo = new SectorArea(250, 50);

alert(fargo.sectorRadius);
alert(fargo.degreeMeasure);

fargo.calcSector();

