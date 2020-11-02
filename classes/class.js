// syntactic sugar for devs from other langs to ease into JS. intro into ES6

// diff bt functions and classes
// functions are hoisted, classes are not hoisted - only declarations are hoisted always
// class have a class method (called static methods, which can be directly called on a class. functions dont have)

class Shape {
  // constructor - like initialise in ruby
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  
  area(){
    return this.width * this.height
  }
  }

  Shape.prototype.color = "red"
  // define prototypes same on classes as you would on functons

  Shape.prototype.myFunc = function (){
    console.log("custom function")
  }


  // create an instance

  let square = new Shape(10,10)
  console.log(square.area())
  console.log(square.color)


// function Shape(width, height){
//   this.width = width;
//   this.height = height;
// }

// react used to use classes, now uses hooks which are function based
// we like classes

