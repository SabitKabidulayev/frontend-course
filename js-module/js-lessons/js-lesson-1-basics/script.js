console.log("JS first lesson")

let myName = "Sabit"
myName = "NotSabit"
console.log(myName)

const mySurname = "Kabidulayev"
console.log(mySurname)

// data types - primitive
console.log("DATA TYPES - PRIMITIVE")
const text1 = "some text"

const num1 = 5;

const isEven = true;
const isOdd = false;

console.log (typeof text1)
console.log (typeof num1)
console.log (typeof isEven)

const undConst = undefined

// data types - non primitive
console.log("DATA TYPES - NON PRIMITIVE")
const userData = {
    name: "Sabit",
    surname: "Kabidulayev",
    age: 29
}
console.log(userData)
console.log(typeof userData)
console.log(userData.name)
console.log(userData.surname)
console.log(userData.age)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[2])


const nullConst = null

// alert, prompt, confirm
console.log("ALERT PROMPT CONFIRM")
alert("Hello, world!")

const userName = prompt("What is your name?")
console.log(userName)

const isHuman = confirm("Are you human?")
console.log(isHuman)

// operators
console.log("OPERATORS")

console.log(5+10)
console.log("Sabit" + " " + "Kabidulayev")

console.log(10-5)

console.log(2*2)

console.log(5/2)

console.log(5%2)

console.log("LOGICAL OPERATORS")
// ==
// !=
// >= 
// <= 
// > 
// <

console.log(5==5)
console.log(1==2)

// === (compares data types) ALWAYS USE
// !== (compares data types) ALWAYS USE
console.log(5 === '5')

// += -=


//contatenation
console.log("CONCATENATION")
const someName = "sabit"
console.log("Hello, " + someName + "!")
console.log(`Hello, ${someName}!`)
console.log(`\tHello\nWorld`)
console.log("Hello, \"world\"")

//AND OR operators
console.log("AND OR OPERATORS")

console.log(true && true)
console.log(true && false)