const myGlobal = 0;

function myFunction() {
    let magicNumber = 0;
    return function counter () { // internal function
        magicNumber = magicNumber+1;
        return magicNumber;
    }
}

const contador1 = myFunction();
console.log(contador1());
console.log(contador1());
console.log(contador1());

function parentFunction() {
    function child() {
        let name = 'sebas';
        console.log(name,myGlobal);
        function child2() {
            const inner = 'im from the second child';
            console.log(inner,name,myGlobal);
        }
        return child2();
    }
    return child();
}

const result = parentFunction();