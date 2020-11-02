// introduced in ES6 syntax
// simplified efficient shorthand, but have some drawbacks
// simplify the functions scope

function fEs5(a,b){
  console.log(a);
  console.log(b);
}

fEs5(1,2);

let fEs6 = (a,b) => {
  console.log(a,b);
}

fEs6(3,4)

/*
() => {...} no input arguments. multi line function statements
x => {...} one input argument, multi line function statements
(a,b) => {...} multiple input arguments, multi line function statements
*/

let myFunc1 = () => {
  console.log("hello")
  console.log("world")
}

let myFunc2 = (str) => {
  console.log("hi")
  console.log(str)
}

let sum = (a,b) => {return a + b}
// good practice to always include return keyword - dont rely on implicit returns
sum(1,2)
console.log(sum(1,2))

let myFunc3 = (city) => ({course: "flextrack", days: 3, city})
// this needs brackets to understand it as an object literal
// the city part is a shorthand, instead of city: city
console.log(myFunc3("brisbane"))
//  yes if both key and value have same name instead of city:city you can just say city
// so many shorthands in JS which leads to a lot of confusion at times( so always a trade off between readability and shorthands


// converting ES5 to ES6
// ES5

// var exampleArray = [1, "1", [1], {1: "one"}, true]
// function checkDataType(){
//   exampleArray.map(function(item){console.log(typeof(item))})
// }

// checkDataType();

// ES6

var exampleArray = [1, "1", [1], {1: "one"}, true]
let checkType = (data) => {return typeof(data)}
console.log(checkType(exampleArray))
// need to map over it all to return datatype of each element inside the array!

let arr = exampleArray.map((item)=> typeof(item));
console.log(arr);
// this will return datatype of all elements inside array

// convert ES5 to ES6

var animals = ["kangaroo", "koala", "wombat", "wallaby"]
// var a =  animals.map(function(animal){return animal.length})

// ES6

console.log(animals.map(animal => {return animal.length}))

// conversion problem three

