// write a custom function for string which capitalises only first letter like in ruby

// name = "nands"

// console.log(name.upCase())


// return name.charAt(0).toUpperCase() + name.slice(1)
String.prototype.capitalize = function () {
  this.charAt(0).toUpperCase() + this.slice(1)
}

// everything you create in future will have access to this prototype! very powerful
// most libraries have a bunch of custom prototypes built in

name = "lachy"
console.log(name.capitalize())

console.log("thomas".capitalize())