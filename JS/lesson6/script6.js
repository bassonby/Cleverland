"use strict"

let userName = "Василь" ;
let messege = hello(userName);
function hello (userName){
   userName = "Гость"
   return "Привет" + userName;
}
hello(userName)

alert(messege);  
// недоделал