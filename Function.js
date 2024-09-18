function myFn(a, b){
    let c
    a = a + 1
    c = a + b
    return c
}

console.log('myFn = ' + myFn(1,2))


const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person){
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

console.log('Person = ' + personOne.age)

console.log('updatedPerson = ' + increasePersonAge(personOne).age)


const myf = function (a, b){
    let c
    a = a + 1
    c = a + b
    return c
}

const myF1 = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}