// object creation through a function constructor
// let obj = {} //literal

let object2 = new Object();
console.log(object2);

// add a property name to the object
object2.name = "ali"
console.log(object2)

// add a function property called speak to this object

// function speak () {
//   console.log('hello')
// }

// let myFunc = (() => console.log('hi')) ()
// myFunc

object2.greet = (() => console.log("hi"))()
console.log(object2)
