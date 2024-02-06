// ---------------ARROW FUNCTION

// function sayHB(personName) {
//     console.log(`Happy Birthday, ${personName}`)
// }
// sayHB('Madina')

// const sayHB = (personName) => `Happy Birthday, ${personName}`

// console.log(sayHB('Sabit'))


// -----------------ANONYMOUS FUNCTION

// const sayHB = function(pesronName) {
//     console.log(`Happy Birthday, ${personName}`)
// }


// ------------------TASK_1

// function sum1(num1, num2) {
//     if (num1 === undefined || num2 === undefined ) {
//         return `need 2 parameters`
//     }
//     if (typeof num1 !== 'number') {
//         return '1st parameter is not a number'
//     }

//     if (typeof num2 !== 'number') {
//         return '2nd parameter is not a number'
//     }

//     return num1 + num2
// }

// const sum2 = function(num1, num2) {
//     return num1 + num2
// }

// const sum3 = (num1, num2) => {
//     return num1 + num2
// }

// const sum4 = (num1, num2) => num1 + num2


//----------------------FOR EACH, MAP

// const programmingLang = ['JS', 'PHP', 'Python', 'Java', 'Delphi', 'Pascal']

// console.log(programmingLang)


// //callbackFunction - function as parameter of other function
// programmingLang.forEach((value, index, array) => {
//     console.log(array)
//     return // doesnt work here
// } )

// const programmingLangCopy = programmingLang.map((value) => {
//     return value
// })



// const users = [
//     {
//         name: 'Sabit',
//         email: 'sabit@gmail.com',
//         phone: 87070331546

//     },
//     {
//         name: 'Bobitt',
//         email: 'bobit@gmail.com',
//         phone: 87070312312

//     },
//     {
//         name: 'Sanya',
//         email: 'boba@gmail.com',
//         phone: 87070331233

//     }
// ]

// const userTelephoneNumbers = users.map((user) => {
//     if (user.name !== 'Sanya') {
//     return user.phone
//     }
// })

// console.log(userTelephoneNumbers)


// STRING METHODS

const helloText = 'Hello, welcome to Hell'
console.log(helloText.length) // number of symbols

const helloTextSplit = helloText.split(' ') // split string to array using specified splitter
console.log(helloTextSplit[helloTextSplit.length-1])

console.log(helloText.slice(7, 14))  // slice (1 не вкл, посл вкл)
console.log(helloText.slice(7)) // if 2nd par is undef slice till end

console.log(helloText.substring(0, 2)) // are the same
console.log(helloText.substring(2, 0)) // are the same

console.log(helloText.charAt(1)) // shows symbol at specified index
console.log(helloText.indexOf('w')) // shows index of first specified symbol in string

console.log(helloText.replace('Hello', 'Greetings')) // replaces first pattern of symbols found on specified pattern of symbols

console.log(helloText.replaceAll(' ', '_')) // replaces all pattern of symbols found on specified pattern of symbols

console.log(helloText.toLocaleLowerCase()) // lowercase all

console.log(helloText.toUpperCase()) // uppercase all

console.log(helloText.includes('Hell')) // checks if pattern of symbols is present in string

//ARRAY METHODS

const arrayofNums = [1, 2, 3] 
// array.slice(0, 2) // doesnt change original array
// array.splice(0, 2) // changes original array - BAD PRACTICE

arrayofNums.push(4) // add new element to the end of arrat
console.log(arrayofNums) 

arrayofNums.pop() // delete last element
console.log(arrayofNums) 

arrayofNums.unshift(0) // add element to the begining
console.log(arrayofNums)

arrayofNums.shift() // delete first element
console.log(arrayofNums)

//METHOD FILTER

const someArray = [1, 2, 4, 5, 6]
const someArrayFilter5 = someArray.filter((number) => {
    if (number !== 5 && number !==2) {
        return number
    }
})
console.log(someArrayFilter5)

// TASK 8
str = 'hello'

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst(str))


// TASK 9
str1 = "XxX BADword"
str2 = "abcd"

function checkSpam(str) {
    if (str.toLowerCase().includes('badword') || str.toLowerCase().includes('XXX')) {
        return true
    }
    return false
}

console.log(checkSpam(str1))
console.log(checkSpam(str2))


// TASK 10

testStr = "madafaka"

const revStr = str => str.split('').reverse().join('')

console.log(revStr(testStr))


function revStr2 (str) {
    strRev = ''
    for (let i = str.length -1; i >= 0; i--) {
        strRev += str[i]
    }
    return strRev
}

console.log(revStr2(testStr))

// TASK 11

let stations = [

    'MAN675847583748sjt567654;Manchester Piccadilly',
    
    'GNF576746573fhdg4737dh4;Greenfield',
    
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
    'SYB4f65hf75f736463;Stalybridge',
    
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
    ];

// const getStations = (arr) => 