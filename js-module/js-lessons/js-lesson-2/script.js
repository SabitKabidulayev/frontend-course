//тернарный оператор

let age = 16;

// if(age >=18) {
//     console.log("welcome")
// } else {
//     console.log("get out")
// };

console.log(age >= 18 ? 'welcome' : 'get out');
age >= 18 ? console.log('welcome') : console.log('get out');
let result = age >= 18 ? console.log('welcome') : console.log('get out');


// task 1

let country = 'Sweden';

// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }

let access = (country === 'Sweden') ? true : false;

// ЦИКЛЫ

//for
for(let i=0; i<10; i++) {
    console.log('Hi!')
};

// task 2

let num = 1; 
for(let i=0; i<10; i++) {
    console.log(num++)
};

// task3

// for(let i=0; i<10; i+=2) {
//     let userNum = prompt('Input number')
//     userNum = +userNum
//     console.log(userNum===10 ? "equal to 10" : "not equal to 10")
// };

// while

// let i = 0;
// while (i < 10) {
//     console.log("Bye!")
//     i++
// }

// task 6

// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }

let i = 4
do {
    alert( `number ${i}!` );
    i++
} while (i < 3)

// ФУНКЦИИ

function sayHello(myName = 'John', mySurname = 'Doe') {
    console.log(`Hi, ${mySurname} ${myName}`)
} // void

sayHello('Sabit', "Kabidulayev")

function sayHello(myName = 'John', mySurname = 'Doe') {
    return `Hi, ${mySurname} ${myName}`
} // string 


function calculate(num1, operator, num2) {
    if (operator == "+") {
        console.log(num1 + num2)
    }
    if (operator == "-") {
        console.log(num1 - num2)
    }
    if (operator == "*") {
        console.log(num1 * num2)
    }
    if (operator == "/") {
        console.log(num1 / num2)
    }
}

calculate(10, "+", 10)