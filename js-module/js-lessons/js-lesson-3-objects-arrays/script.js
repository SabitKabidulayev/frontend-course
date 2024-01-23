//TASK1

const n = 1;

// function checkInt (num, min, max) {
//     if (num >= min && num <= max) {
//         return true
//     }
//     return false
// }

function checkInt(num, min, max) {
    return (num >= min && num <= max) ? true : false
}

console.log(checkInt(12, 0, 11))

// OBJECTS

const redFigure = {
    color: 'red',
    shape: 'recrangle',
}

const user = {
    firstName: 'Sabit', //firstNmae = key, field, property | 'Sabit' = value
    lastName: 'Kabidulayev',
    age: 29,
    email: 'sabit@gmail.com',
    password: 'sfnofkm1223lkdm12dsa#',
    role: 'user',
    contactInfo: {
        phoneNumber: {
            homeNumber: 124567,
            mobileNumber: 87771234567,
        },
        socialLink: 'http://tg.com/user123',
    }
}

console.log(redFigure.form)
console.log(user.contactInfo.phoneNumber.homeNumber)


console.log(redFigure)
redFigure.size = 25
console.log(redFigure)

// creating copy of object
const student = {
    username: 'Lupa',
    password: 'asdasdasd'
}

const studentCopyJSON = JSON.stringify(student)
const studentCopyObject = JSON.parse(studentCopyJSON)
console.log(studentCopyJSON)
console.log(studentCopyObject)

// OBJECT METHODS
const pc = {
    cpu: 'intel',
    gpu: 'geforce',
    ram: 16,
    showSpecs: function () {
        console.log(`CPU: ${this.cpu}`)
        console.log(`GPU: ${this.gpu}`)
        console.log(`RAM: ${this.ram}`)
    }
}

console.log(pc.hasOwnProperty('cpu'))
pc.showSpecs()


// FOR-IN

const cat = {
    age: 2,
    breed: 'tabby',
    color: 'grey',
    chars: {
        weight: 10,
        height: 20,
    },
}

for (const key in cat) {
    if (key === "chars") {
        for (const charsKey in cat[key]) {
            console.log(cat[key][charsKey])
        }
    } else {
        console.log(cat[key])
    }
}


// TASK2

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}

for (const key in engineers) {
    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)
}


// ARRAY

const studentNames = ['lupa', 'pupa', 'bubba']

console.log(studentNames[0])
studentNames[3] = 'John'

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i])
}


for (const value of studentNames) {
    console.log(value)
}

// TASK 3

const falloutGames = [
    'fallout 1',
    'fallout 2',
    'fallout 3',
    'fallout nv',
    'fallout 4',
]

for (let j = 1; j < falloutGames.length; j += 2) {
    console.log(falloutGames[j])
}

// TASK 6

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

for (const value of numbers) {
    console.log(numbers.indexOf(value))
}

for (const index in numbers) {
    console.log(`Индексу ${index} соответствует число ${numbers[index]}
    `)
}

// ARRAY OF OBJECTS

const fruits = [
    {
        name: 'apple',
        price: 10,
    },

    {
        name: 'orange',
        price: 15
    },

    {
        name: 'banana',
        price: 20
    },
]

// TASK 5

let questions = [

    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    },

    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }

];

for (const value of questions) {
    value.userAnswer = null
}

console.log(questions)