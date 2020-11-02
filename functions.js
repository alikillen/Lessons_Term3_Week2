// definition, declaration, statment -all mean the same
// function expression  - different

// global execution context
// functional execution context

var x = 10;
// var is in global context

function myFunc (){
  var y = 10;
  // var in a function has global scope WITHIN the function in which its defined
  return 1
}

// function decs are hoisted, funciton expressions are not hoisted

function helloWorld(str){
  // function statements
  // console.log("hello world")
  // return("hello world");
  console.log(str)
}


// console.log(helloWorld());
// invoke the function with brackets

// flower braces instead of end, syntax differences

// helloWorld("Hello World");

// variable assignment
let hello = helloWorld("Hello World");

var a = 2;
function myFunc(a){
  return a + 1 
}

console.log(a)
myFunc(a)
console.log(a)
console.log(myFunc(a))
// you have to actually call the function when you console log it if you want to see changed value - primitive datatype

// both return 2
// a is a primitive datatype and is passed by value to a function

var obj = {
  course: "FlexTrack",
  days: 3
}

console.log(obj)

function coolFunc(obj) {
  obj.course = "FastTrack",
  obj.days = "5"
}

console.log(obj);
coolFunc(obj);
console.log(obj);

// it changes, because objects are a non primitive datatype, so theyre passed by reference
// anonymous functions are functions without a name
// so you can call functions on non primitive datatypes with just referring to the obj name?