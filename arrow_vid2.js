class Person {
  constructor(name){
    this.name = name
  }
  // constructor takes in a name and sets this.name = name

  printNameArrow(){
    setTimeout(() => {
      console.log('Arrow: ' + this.name)
    }, 100)
  }
  // uses arrow func inside of a timeout to printout the name of person after the word arrow after 100ms delay

  printNameFunction(){
    setTimeout(function(){
      console.log('Function: ' + this.name)
    }, 100)
  }
  // same as printnamearrow except, uses standard function syntax instead of arrow
}

let person = new Person('bob')
person.printNameArrow()
person.printNameFunction()
// undefined from function - because it defines it differently based on where function is called - this
console.log(this.name)
// this.name is not defined in the global scope

// a standard JS function redefined this keyword - so this will be new inside the function
// this is not redefined in JS arrow functions - so it will be same as constructor