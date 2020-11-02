// immediately invoked function
// determined by brackets
// let myFunc = () => console.log('hi')
// this is a normal arrow function

// ES6 normally avoids iife's

let myFunc = (() => console.log('hi')) ()
// two sets of brackets, put normal bracketed function inside first brackets - NEED CORRECT BRACKETS

// its an identifier - identifies where a block of code is executing, great for debugging and analysing code
// not best practice
// its executed as soon as it is called
// theyre super private - variables etc cannot be invoked into global scope

myFunc