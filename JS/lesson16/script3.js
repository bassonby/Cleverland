// "use strict";

const hourElement = document.querySelector('.hour');
const minElement = document.querySelector('.minute');
const secElement = document.querySelector('.second');
const msecElement = document.querySelector('.millisecond');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const newButton = document.querySelector('.new');



let hour = 00;
let minute = 00;
let second = 00;
let msec = 00;
let interval = 0;
let counter = 0;

startButton.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    clearFilds()
});

newButton.addEventListener('click',() =>{
    clearInterval(interval);
    counter++
    const results = document.querySelector('.results');
    const block = document.createElement("div");
    block.innerText = `Result ${counter} : ${hour}:${minute}:${second}:${msec} `
    results.append(block);
    clearFilds();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
function clearFilds(){
    hour = 00;
    minute = 00;
    second = 00;
    msec = 00;
    hourElement.textContent = "00";
    minElement.textContent = "00";
    secElement.textContent = "00";
    msecElement.textContent = "00";
}

function startTimer() {
    msec++;
    if (msec < 9) {
        msecElement.innerText = "0" + msec;
    }
    if (msec > 9) {
        msecElement.innerText = msec;
    }
    if (msec > 99) {
        second++;
        secElement.innerText = "0" + second;
        msec = 0;
        msecElement.innerText = "0" + msec;
    }
    if (second > 9) {
        secElement.innerText = second;
    }
    if (second > 59) {
        minute++;
        minElement.innerText = "0" + minute;
        second = 0;
        secElement.innerText = "0" + second;
    }
    if (minute > 9) {
        minElement.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hourElement.innerText = "0" + hour;
        minute = 0;
        minElement.innerText = "0" + minute;
    }
};




