"use strict";
// string, boolean and number
let x = 20;
x = 35;
console.log(x);
// Inference and annotation
let y = 12;
// y = 'doze'
let z = 12;
console.log(y);
console.log(z);
console.log(x + y + z);
// String
let firstName = "Willian";
let age = 38;
const isAdmin = true;
console.log(firstName + ', idade: ' + z);
// Tuplas
let myTuple;
myTuple = [25, 'casa', ['a', 'b', 'c']];
console.log(myTuple);
//object
const myNumbers = [2, 3, 88];
console.log(myNumbers);
console.log(myNumbers.length);
//Object literals -> {prop: value}
const user = {
    name: 'pedro',
    age: 24
};
console.log(user);
console.log(user.name);
//any
let a = 10;
a = 'casa';
a = true;
a = 32;
a = [];
//union types
let id = 'casa';
id = 25;
const idUser = 'nome';
const productId = '001';
const shirId = 125;
//enum
var size;
(function (size) {
    size["p"] = "pequeno";
    size["m"] = "medio";
    size["g"] = "grande";
    size["xg"] = "extra grande";
    size["xgg"] = "extra grande grande";
})(size || (size = {}));
const camisa = {
    name: 'camisa',
    size: size.m
};
console.log(camisa);
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(22, 8));
function sayHello(name) {
    return `hello ${name}`;
}
console.log(sayHello('willian'));
