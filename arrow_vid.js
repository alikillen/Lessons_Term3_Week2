// https://www.youtube.com/watch?v=h33Srr5J9nY

// converting functions to arrow functions

function sum(a,b){
  return a+b
}

let sum2 = (a,b) => {
  return a+b
}

let sum3 = (a,b) => a+b 
// implicit return

function isPositive(number){
    return number >= 0
}

let isPositive2 = number => number >= 0
// single param functions dont need brackets

function randomNumber(){
  return Math.random
}

let randomNumber2 = () =>  Math.random

// let rando = () => {Math.random}

// console.log(rando())

console.log(randomNumber2())

document.addEventListener('click', function(){
  console.log('click')
})

document.addEventListener('click', () => {
  console.log('click')
})

document.addEventListener('click', () => console.log('click'))

// arrow functions redefine this keyword inside them



