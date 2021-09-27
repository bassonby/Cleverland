"use strict"

const n = +prompt("Введите количесво долек по ширине", 2);
const m = +prompt("Введите количесво долек по высоте", 2);
const k = +prompt("Введите количесво долек ", 2);
if( n % 2 == 0 || m % 2 == 0 ){
    if(n % 2 == 0){
        let result =  (n / 2 * m ) == k;
        if ( result == true){
            alert("Да можно так сделать.")
        }
        else {
            alert("нет не сегодня.")
        }
    }
    else (m % 2 ==0);{
        let result =  (m / 2 * n ) == k;
        if ( result == true){
            alert("Да можно так сделать.")
        }
        else {
            alert("нет не сегодня.")
        }    
    }
    
}
else{
    alert("Да ебаный твой рот");
}


