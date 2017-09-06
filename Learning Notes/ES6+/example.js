//refactoring function to arrow functions
let createGreeting = function(message, name) {
  return message + name
}

//refactored
arrowGreeting = (message, name) => message + name

//larger example
// var deliverBoy = {
//   name: "John",
//
//   handleMessage: function(message, handler) {
//     handler(message)
//   },
//   receive: function() {
//     var that = this
//
//     this.handleMessage("Hello, ", function(message) {
//       that.name
//       console.log(message + that.name)
//     })
//   }
// }
//
// deliverBoy.receive()

//refactored
let deliverBoy = {
  name: "John",

  handleMessage: (message, handler) => {
    handler(message)
  },
  receive: function () {

    this.handleMessage("Hello, ", (message) => console.log(message + this.name))
  }
}

deliverBoy.receive()

//let keyword
var message = "hi"

{
  var message = "bye"
}

console.log('message =>', message)

//array of functions and loop
const fs = []

for (let i = 0; i < 10; i++) {
  fs.push(() => {
    console.log(i)
  })
}

fs.forEach((f) => {
  f()
})
