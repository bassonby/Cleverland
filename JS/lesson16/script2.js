"use strict";

function clock(){
    const hourArrow = document.querySelector(".hours");
    const minuteArrow = document.querySelector(".minutes");
    const secondArrow = document.querySelector(".seconds");
    const deg = 6;
    setInterval(() =>{
        const day = new Date();

        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * deg;
        const seconds = day.getSeconds() * deg;

        hourArrow.style.transform = ` rotateZ(${hours + (minutes / 12)}deg)`;
        minuteArrow.style.transform = `rotateZ(${minutes}deg)`;
        secondArrow.style.transform = `rotateZ(${seconds}deg)`;
    },0);
};
clock()