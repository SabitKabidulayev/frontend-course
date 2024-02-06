// BOM - Browser object model

// location

const isReload = false
if (isReload) {
    location.reload()
}

console.log(location)
console.log(location.protocol)
console.log(location.pathname)


// navigator

console.log(navigator)
// console.log(navigator.geolocation.getCurrentPosition())

// history

console.log(history)


// screen

console.log(screen)


// DOM - Document Object Model

console.log(document.body.children) // array of all children elements
console.log(document.body.parentElement) 

const element1 = document.querySelector('a')
const elements = document.querySelectorAll('a')
console.log(element1)
console.log(element1.href)
console.log(elements)
element1.href = "https://www.youtube.com/"

const title = document.querySelector('.title')
console.log(title)

const text = document.querySelector('#id123')
console.log(text)

const text1 = document.getElementById('id123')
console.log(text1)

console.log(text.innerHTML)
console.log(text.innerText)

text.innerText = 'not much'

console.log(text.innerHTML)
console.log(text.innerText)



// TASK 2

const listElement = document.querySelector('#list')
const listElementItems = [...listElement.children] // HTML collection doesnt have 
for (index in listElementItems) {

}

// TASK 3

const itemsToRemove = document.querySelectorAll('.forRemove')
console.log(itemsToRemove)
for (item of itemsToRemove) {
    item.remove()
}


// CREATING DOM ELEMENTS

console.log(document.body)
const titleElement = document.createElement('h1')
console.log(titleElement)
titleElement.innerText = "MY FreeDOM"
console.log(titleElement)

const linkElement = document.createElement('a')
linkElement.innerText = 'suda'
linkElement.href = 'www.google.com'

// document.body.appendChild(titleElement)
// document.body.appendChild(linkElement)

document.body.append(titleElement, linkElement)


// DOM Stylize

console.log(document.body.style.backgroundColor='red')

const containerElement = document.querySelector('#container')

containerElement.style.backgroundColor='blue'
containerElement.style.width = '200px'
containerElement.style.height = '200px'
containerElement.style.cssText = 'height: 500px; width: 500px; background-color: green;'


// TASK 4

const parElement = document.createElement('p')
parElement.innerText = 'dadada'
parElement.style.fontSize = '36px'
parElement.style.fontStyle = 'bold'
document.body.appendChild(parElement)