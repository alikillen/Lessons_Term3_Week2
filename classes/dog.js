function Dog(name,location) {
  this.name = name
  this.location = location
}

// add a property speak: whoof, my name is dogName, and my location is melb

Dog.prototype.speak =  function (){
  return `woof my name is ${this.name} and i am from ${this.location}`
}

// Dog.prototype.country = "australia"
// dog1.prototype.location = this.location  ----CANNOT DO THIS

let dog1 = new Dog("jeff", "america")
let dog2 = new Dog("tommy", "melb")

console.log(dog1.speak())
console.log(dog2.speak())

// add a property to set location (change location)

// dont want to hardcode it, we need a function
Dog.prototype.setLocation = function(loc){
  this.location = loc
}

dog1.setLocation("sydney")

console.log(dog1.speak())
// has changed to sydney
console.log(dog2.speak())

// always attach a prototype method to a constructor function not to the instances


