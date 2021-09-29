"use script"

const number = +prompt("Введите число",);
let i = 0 ;
let m = 0 ; 
for( i ;  i < 100  ; i++){
    if (i % 5 == 0 )continue;
    if ( i % 2 == 0 ){
        m += 1 ;
        alert(`${m} ____ ${i}` )   
    }
    if ( m == number )break;
}