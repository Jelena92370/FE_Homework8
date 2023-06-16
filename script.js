// Задача 1
function func1() {
const div = document.querySelector(".numbers")
let paragraph = ''
for (let i = 100; i >= 50; i -= 10) {
        paragraph += `<p>${i}</p>`
}
div.innerHTML = paragraph
}

// Задача 2
function func2() {
const div = document.querySelector(".strings_container")
let strings = ["Blueberry", "Cherry", "Apple", "Strawberry", "Raspberry"]
let storage = ""
for (let i = 0; i < strings.length; i++) {
storage += `<p>${strings[i]}</p>`
}

div.innerHTML = storage
}

// Задача 3
function func3() {
const div = document.querySelector(".users_container")
const clients = [
        {
                first_name: "Alice",
                last_name: "Green",
                age: 28
        },
        {
                first_name: "Clarice",
                last_name: "Grey",
                age: 48
        },
        {
                first_name: "Berenice",
                last_name: "Smith",
                age: 17
        },
        {
                first_name: "Evelyne",
                last_name: "Blue",
                age: 33
               }
]
let cards = ""
for (let i = 0; i < clients.length; i++) {
const user = clients[i]
if (user.age >= 18) {
        cards += `<p>Name: ${user.first_name}
${user.last_name} Age: ${user.age}</p>
`}
}

div.innerHTML = cards
}

