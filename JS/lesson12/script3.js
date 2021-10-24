"use strict"

let user = {
    display: '1440×900',
    JavaScript: 'Да',
    Flash: '32.0',
    OS: 'Windows8',
};
console.log(user)


let {display: myDisplay, OS:  myOS,  browser = 'Google chrome' } = user;

alert(myDisplay);
alert(browser);
// что-то я не понял задания.






