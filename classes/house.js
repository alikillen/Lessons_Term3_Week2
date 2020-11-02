// syntactic sugar for devs from other langs to ease into JS. intro into ES6

// diff bt functions and classes
// functions are hoisted, classes are not hoisted - only declarations are hoisted always
// class have a class method (called static methods, which can be directly called on a class. functions dont have)

class House {
  static unlock(secretPassphrase){
    if (secretPassphrase =="please"){
    return "ok i will open"
  }
  return "no"
}
}

// dont need an instance to call a class method : use case of static

console.log(House.unlock())
console.log(House.unlock("please"))