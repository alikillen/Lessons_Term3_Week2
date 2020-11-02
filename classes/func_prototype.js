// prototype or constructor - use pascal case

// this is available throughout this funct
function Person(name, age) {
  // this refers to the func person in here - can be accesed anywhere in func
  // its not accessible in a function within this function tho
  this.name = name;
  this.age = age;
  this.awesome = true;

  
}

// create instance

let instance = new Person("Ali", 26);

console.log(instance)

// attach country?


// instance.country = "Australia"

// console.log(instance)

// but add it for all students - how? use prototype - then all instances created henceforth will have country aus

Person.prototype.country = "Australia"

console.log(instance.country)


//  1. Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// 2. JavaScript is often described as a prototype-based language — to provide inheritance,
// 3. objects can have a prototype object,
// 4. which acts as a template object that it inherits methods and properties from.
// just like we have "string".methods in ruby and class to group methods and provide inheritance. In Javascript we have prototypes which enables inheritance

