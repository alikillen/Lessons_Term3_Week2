let student = {
  name: "bob",
  age: 22,
  address: {
    street: "123 tree drive",
    state: "NSW"
    city: "sydney"
  }
}

// retrieve student street name
console.log(student.address.street)

// add country

student.address.country = "australia"