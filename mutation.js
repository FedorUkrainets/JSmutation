// first code JS mutation

let name = 'Boris'
let age = 26

// first option 

const person = {
    name: name,
    age: age,
    country: 'Belarus'
}


const person2 = { ...person }

person.name = 'Dima'
person.country = 'Poland'

console.log(person)
console.log(person2)

// second option

const person3 = {
    name: name,
    age: age,
    country: 'Finland'
}

const person4 = Object.assign({}, person3)

person4.age = 23
person4.country = 'Sweden'
const haveJob = 'haveJob'
person3[haveJob] = 'true'


console.log(person3)
console.log(person4)