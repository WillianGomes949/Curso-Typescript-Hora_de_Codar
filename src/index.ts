// string, boolean and number

let x: number = 20

x = 35;

console.log(x)

// Inference and annotation

let y = 12;

// y = 'doze'

let z: number = 12

console.log(y)
console.log(z)
console.log(x + y + z)

// String

let firstName: string = "Willian"
let age: number = 38
const isAdmin: boolean = true

console.log(firstName + ', idade: ' + z)

// Tuplas

let myTuple: [number, string, string []]

myTuple = [25, 'casa', ['a', 'b', 'c']]

console.log(myTuple)

//object

const myNumbers: number[] = [2, 3, 88]

console.log(myNumbers)
console.log(myNumbers.length)

//Object literals -> {prop: value}

const user: {name: string; age: number} = {
  name: 'pedro',
  age: 24
}

console.log(user)
console.log(user.name)

//any

let a: any = 10

a = 'casa'
a = true
a = 32
a = []


//union types

let id: string | number = 'casa'
id = 25

//type alias

type myIdType =  number | string

const idUser: myIdType = 'nome'
const productId: myIdType = '001'
const shirId: myIdType = 125

//enum

enum size {
  p = 'pequeno',
  m = 'medio',
  g = 'grande',
  xg = 'extra grande',
  xgg = 'extra grande grande'

}
const camisa = {
  name: 'camisa',
  size: size.m
}

console.log(camisa)

//funções

function sum(a: number, b: number) {
  return a + b
}

console.log(sum(22, 8))

function sayHello(name: string): string {
  return `hello ${name}`
}

console.log(sayHello('willian'))