// functions with no name

// STEP1

// function(name){
//   return typeof(name)
// }

// STEP 2
// "hello"
// this wont work in JS, needs to be assigned to a variable

var myFunc = function(name){
  return typeof(name)
}
// var myFunc would get hoisted but not the function!!
// functions only gets hoisted if its defined with function keyword and name, and anon functions can get hoisted if they are invoked

// STEP 3
// use var name and use brackets to invoke anon func

// myFunc();

console.log(myFunc);
// it tells you the variable is a function
console.log(myFunc("waffles"));
// because you pass a value to the func, it will work
// myfunc will never store the return value, myFunc is only used to invoke func

// anon functions do NOT get hoisted
// anon functions can be nested inside other funcs etc etc - a few diff uses for them

// function expressions never get hoisted
// the function here is getting hoisted because its been invoked with waffle

// in case of function expression only variable gets hoisted (in this case var a)... however the value assigned to it which is a function definition is not hoisted

// It's worth thinking about literal values and expressions as being equally able to be identified:
// var fourLiteral = 4;
// var fourExpression = 2 + 2;

// In this case, the identifier is 'fourLiteral' and the thing it identifies is the value 4

// the second identifier is 'fourExpression' and the thing it identifies is a function that evaluates to 4

// These two things are both perfectly usable for any situation where you want the value 4

// sum of 2 numbers
var sum  = function(a,b){
  return a + b
}
sum(2,3)

// what is the benefit of expressing functions as assigned to a variable? is it easier to call them?

var evenOdd = function(num){
  return (num % 2==0) ? 'even' : 'odd'
}

// is it reccomended to assign functions to variables like in kalyani's example, instead of declaring them as we normally would as functions like in lachy's example? just trying to wrap my head around the pros/cons, i guess you call them differently
// answer - ES5 and ES6, assigning to variables means only use whne you need it, keeping scope inside func
// assign to variables in big codebases /in ES6 - this is best practice???

// nands answer
// function expression limits scoping a function ( as they are not hoisted, used only after declaration).....however normal functions are more like global (can be used before defined)

// if using var expressions for functions, it wont waste memory space, hoisting is avoided until calling the function