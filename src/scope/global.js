// variables
var a; // declaración
var b = 'b'; // declarando y asignando
b = 'bb'; // re asignar
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'colombia';
    console.log(country);
}

countries();
console.log(country);
