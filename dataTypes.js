const objA = {
    a: 10,
    b: true
}

console.log(objA.a)

const copyObjA = objA

copyObjA.a = 20

console.log(objA.a)

copyObjA.c = 'abc'

console.log(objA.c)

const myCity = {
    city : 'New York',
    info : {
        countrie : 'USA',
        populary : true
    }
}

console.log(myCity)

delete myCity.populary

console.log(myCity)

myCity['populary'] = true

console.log(myCity)
const name1 = 'Alex'
const postsQty = 23

const userProfile = {
    name1,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)