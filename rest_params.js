// ...input
// (input1,input2,...arrayLast) => { function statements}
// function fEs5(...rest){
//     console.log(typeof(rest)? Array : Object)
//     consol.log(rest)
// }

// fEs5(1,2,3,4,5,6,7)

const fEs5 = (a,b,...rest) => {
  console.log(a)
  console.log(b)
  // let obj = {
  //   x: 1,
  //   y: "one"
  // }
  // console.log((typeof (rest) === "Array") ? Array : Object)
  console.log(Array.isArray(rest) ? 'Array' : typeof rest);
  console.log(rest)
}

fEs5(1,2,3,4,5,6,7)
fEs5("one", "two", "three", "four", "five")

// rest converts it into an array

// its not checking input type, its checking true or false

let arraycheck = (a,b, ...rest) => {
  if (Array.isArray(rest))
  console.log('beans')
  }

arraycheck(1,2,3,4,5)

let myFunc1 = (number,...rest) => {
  return rest.map(item=> {return number * item})
}

console.log(myFunc1(3,1,2,3))
// multiplies first number by following elements
// item refers to next element