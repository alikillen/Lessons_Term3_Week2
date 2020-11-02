function Hero(name,level){
  this.name =  name;
  this.level = level;

  // attach a func here instead of proto
  // this.shout = function(){
  //   return `my name is ${this.name}`
  // }

}

// attach a function later -this is more DRY

Hero.prototype.shout = function () {
  return `my name is ${this.name}`
}

let superman = new Hero("Superman", 100);
let batman = new Hero("Batman", 60);

console.log(superman.shout())
console.log(batman.shout())

console.log(superman)
console.log(batman)

// see real world example on github - school plan app