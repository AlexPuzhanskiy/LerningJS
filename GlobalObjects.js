const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greeting1')
    }
}
 
myCity.cityGreeting ()

const myCity1 = {
    city: 'New York',
    cityGreeting () {
        console.log('Greeting2')
    }
}
 
myCity1.cityGreeting ()

const person = {
    name: 'Bob',
    age: 20
}

const person2 = Object.assign({},person )
person2.age = 26

console.log(person)
console.log(person2)

const person3 = {...person}
person3.name = 'Alice'
console.log(person3)

const person4 = JSON.parse(JSON.stringify(person))
console.log(person4)