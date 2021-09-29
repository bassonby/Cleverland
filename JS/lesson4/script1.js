"use srtict"

const result = prompt("Каково «официальное» название JavaScript?",  );
const owner = "ECMAScript";
if (result == owner) {
    alert("«Верно!»");
}
else {
    alert(`«Не знаете? «${owner}»!»`);
}