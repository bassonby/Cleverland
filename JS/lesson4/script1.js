"use srtict"

let result = prompt("Каково «официальное» название JavaScript?",  );
let owner = "ECMAScript";
if (result == owner) {
    alert("«Верно!»");
}
else {
    alert(`«Не знаете? «${owner}»!»`);
}