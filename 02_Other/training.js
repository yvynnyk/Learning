"use strict"
const alex = {
    name: "Alex",
    age: 18,
    adress: {
        country: "USA",
        street: "Nova"
    }
}

const pete = {}

function copy (obj) {
    for (let key in obj) {
        console.log(key)
    }
}
copy(alex)