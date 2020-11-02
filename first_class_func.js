// first class functions means treated as objects

let simpleArray = [1,2,3,4, function(a,b){return a+b}]

console.log(simpleArray[4](2,3))
// accesses element 5th array and pass a and b into it

// functions are of highest priority in JS : they can be used in array, objects, they can be assigned to a variable. 
// passed as an argument to another function returned from another function etc...
// just like you would use any object (say in ruby)

let simpleObj = {
  course: "flex",
  days: ["mon", "tue", "wed"],
  myFunc: () => {
    simpleObj.days.forEach((day) => console.log(simpleObj.course + " is in session for " + day))
  }
}

// console.log(simpleObj.myFunc)
console.log(simpleObj.myFunc(simpleObj.days));
// why undefined after
simpleObj.myFunc();
console.log(simpleObj.course)
