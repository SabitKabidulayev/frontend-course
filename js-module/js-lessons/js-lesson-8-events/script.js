const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

// const helloButton = document.querySelector('#hello-button')
// console.log(helloButton)

// // EVENTS

// helloButton.onclick = function() {
//     alert('Hello!')
// }

// //Event Listener

// helloButton.addEventListener('click', (event) => {
//     console.log(event.target)
//     alert('Hello!')
// })


// const inputEmail = document.querySelector('#email')
// const outputEmail = document.querySelector('#email-output')
// inputEmail.addEventListener('change', (event) => {
//     outputEmail.innerText = event.target.value
// }, { once: true })


// // TASK 1

// const textInput = document.querySelector('#text-input')
// const list = document.querySelector('#list')
// textInput.addEventListener('keyup', (event) => {
//     if (event.code === 'Enter') {
//         const liElement = document.createElement('li')
//         liElement.innerText = event.target.value
//         list.append(liElement)
//         textInput.value = ''
//     }
// })


// TASK 3

const users = [
    {
        email: 'yabadaba@gmail.com',
        password: '12345'
    },
    {
        email: 'loh@gmail.com',
        password: 'qwerty'
    },
    {
        email: 'chort@gmail.com',
        password: 'password'
    }
]


// function login(email, password) {
//     for (user of users) {
//         if email = 
//         if (user.email !== email) {
//             return 'email not found'
//         }
//         if (password !== password) {
//             return 'wrong password'
//         }
//         return 'login successfull'
//     } 
// }

const loginButton = document.querySelector('#login-button')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')



loginButton.addEventListener('click', (event) => {
    event.preventDefault()
    const result = login(emailInput.value, passwordInput.value)
    alert(result)
})