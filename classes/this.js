// this always refers to the object its used in, EXCEPT for arrow functions

console.log("global level" + this)

function greet(){
  console.log("normal func" + this)
}

let arrowFunc = () => {
  console.log("arrow func" + this)
}
// exoecting undefined here since this should not work with arrow funcs

greet()
arrowFunc()

// An arrow function does not have its own this. The this value of the enclosing lexical scope is used; arrow functions follow the normal 
// variable lookup rules. So while searching for this which is not present in the current scope, 
// an arrow function ends up finding the this from its enclosing scope.

// in arrow functions, "this" has nothing to refer to, it goes back and refers to global
var arrowObject = {

}