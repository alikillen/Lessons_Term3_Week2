// destructuring objects

const personOne = {
  name: 'Kyle',
  age: 24,
  
  address: {
    city: "somewhere",
    state: "queensland"
  }
}

const personTwo = {
  // name: "sally",
  age: 32,
  favouriteFood: "watermelon",
  // if we set fave food here we cant set it in the variable dec
  // address: {
  //   city: "whatever",
  //   state: "another"
  // }

}

// const {name: firstName, age, favouriteFood = "rice"} = personTwo
// takes name property from person and maps it to variable firstname

// const {name: firstName, ...rest} = personTwo
// can use spread operator here

// const {name: firstName, address: {city}} = personTwo

const personThree = {...personOne, ...personTwo}

// console.log(firstName)
// console.log(age)
// console.log(favouriteFood)
// console.log(rest)
// console.log(city)
console.log(personThree)

function printUser({name, age, favouriteFood = "watermelon"}){
  console.log(`name is ${name}, age is ${age}, fave food is ${favouriteFood}`)
}
// can use object destructuring inside function calls - this is most useful

printUser(personOne)