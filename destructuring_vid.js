// https://www.youtube.com/watch?v=NIq3qLaHCIs

// array and object destructuring plus the spread operator

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// destructuring takes an object or array and seperates it into smaller objects/arrays

// old way
// const a = alphabet[0]
// const b = alphabet[1]

// const [a,b,c] = alphabet
// element you want to destructure goes on right side of equals
// supply elements in variable in brackets
// position of elements inside variable is what element will be pulled out of the array/obj

// to skip second element
// const [a,, c] = alphabet

// what if we want the rest of elements? use spread operator ...
const [a,, c, ...rest] = alphabet

// can use this to combine 2 arrays together:
// const newArray = [...alphabet, ...numbers]

// using rest on arrays isnt that great though since you can use concat anyway and get same output.
// but its very useful for combining objects, and returning more than 1 param from a function
const newArray = alphabet.concat(numbers)

// printing--------

console.log(a)
// console.log(b)
console.log(c)
console.log(rest)
// in this case, rest variable contains rest of the array

console.log(newArray)



// FUNCTIONS WITH DESTRUCTURING

function sumAndMultiply(a,b) {
  return [a+b, a*b, a/b]
}

// const array = sumAndMultiply(2,3)
// console.log(array)
// this returns an array with sum and multuplocation result

// but we can return each value individually instead with destructuring
// const [sum, multiply] = sumAndMultiply(2,3)
// console.log(sum)
// console.log(multiply)
// retriveing values from the array that the sumandmultiply function is outputting

// when we destructure we can set default values, if no value no division, but we can parse the value
// need to add another return property to the function To generate divided value
// many use cases for destructuring in arrays (esp functions) but its more useful w objects

const [sum, multiply, division = 'no division'] = sumAndMultiply(2,3)
console.log(division)



