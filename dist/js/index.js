"use strict";
let x = 20;
x = 35;
console.log(x);
let y = 12;
let z = 12;
console.log(y);
console.log(z);
console.log(x + y + z);
let firstName = "Willian";
let age = 38;
const isAdmin = true;
console.log(firstName + ', idade: ' + z);
let myTuple;
myTuple = [25, 'casa', ['a', 'b', 'c']];
console.log(myTuple);
const myNumbers = [2, 3, 88];
console.log(myNumbers);
console.log(myNumbers.length);
const user = {
    name: 'pedro',
    age: 24
};
console.log(user);
console.log(user.name);
let a = 10;
a = 'casa';
a = true;
a = 32;
a = [];
let id = 'casa';
id = 25;
const idUser = 'nome';
const productId = '001';
const shirId = 125;
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
function sum(a, b) {
    return a + b;
}
console.log(sum(22, 8));
function sayHello(name) {
    return `hello ${name}`;
}
console.log(sayHello('willian'));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`olá ${greet} ${name}`);
        return;
    }
    console.log(`olá ${name}`);
}
greeting('josé');
greeting('pedro', "sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 25, n2: 25 }));
