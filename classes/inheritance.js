function Human (){
  this.legs = 2;
  this.arms = 2;
  this.head = 1;
}

Human.prototype.walk = function(){
  return `taking a walk with my ${this.legs} legs`
}

// function inherits from parent Human
function Man(name){
  Human.call(this)
  // pass the reference of this object to the human object constructor
  this.name = name;
}

// class Man extends Human

// let simon = new Man("simon")
// console.log(simon);

// console.log(simon.walk()) 
// does not work with inheritance

// this is the syntax you want to use when creating a function that inherits
Man.prototype = Object.create(Human.prototype)
let simon = new Man("simon");
console.log(simon.walk());

// so . call(this) is for properties and for methods you have to prototype = Object.create



