console.log(nameofDog);
var nameofDog = "xd";
console.log(nameofDog);
// is the same that:
var nameCat;
console.log(nameCat);
nameCat = 'gato';

// also with functions occurs hoisting
nameOfHuman()
function nameOfHuman() {
    console.log(`the human name is ${humanName}`);
}

var humanName = 'sebas';