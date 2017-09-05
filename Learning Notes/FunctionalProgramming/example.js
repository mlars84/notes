//Traditional function
function triple(x) {
  return x * 3
}

//Function as a value
// var triple = function(x) {
//   return x * 3
// }

var waffle = triple

waffle(30)

//Filter
var animals = [
{ name: 'Fluffykins', species: 'rabbit' },
{ name:'Caro', species:'dog' },
{ name:'Hamilton', species:'dog' },
{ name:'Harold', species:'fish' },
{ name:'Ursula', species:'cat' },
{ name:'Jimmy', species:'fish' }
]

//"Filter" through with a normal for loop
var dogs = []

for (var i =0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}

//Using `Filter` function
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})

//Breaking out callback into a seperate variables
var isDog = function(animal) {
  return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
// var otherAnimals = animals.reject(isDog)

//Map to transform an array
var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names)

//using map() and adding to the new objects
var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})

console.log('map names =>', names);

//ES6 arrow function with statement implicitly returned
let es6names = animals.map((animal) => animal.name )
console.log('es6names =>', es6names)


//Chapter 3
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

//summarize total of all amounts with for loop
let totalAmount = 0
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}

console.log('totalAmount =>', totalAmount)

//Reduce
let reduceTotalAmount = orders.reduce((sum, order) => sum + order.amount, 0)


console.log('reduceTotalAmount =>', reduceTotalAmount)

//turn data.txt tab separated file into an object literal with reduce()
// import fs from 'fs'

// const output = fs.readfileSync('data.txt', 'utf8')
//   .trim() //gets rid of line breaks or spaces at end and start of a string
//   .split('\n') //splits into an array. '\n' is a line break
//   .map(line => line.split('/t')) //map every line and split it on 't' tab characters
//   .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]] || []
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3]
//     })
//     return customers
//   }, {})
//
//   console.log('output', JSON.stringify(output, null, 2))
  //creates JSON string from the output with two spaces for indentation

  //Closures
  let me = 'Bruce Wayne'

  greetMe = () => {
    console.log('Hello, ' + me + '!')
  }
  greetMe()

  //closures - sendRequest
sendRequest = () => {
  let requestID = '123'
  $.ajax({
    url: '/myUrl',
    success: (res) => {
      console.log(res);
      alert('Request ' + requestID + ' returned.')
    }
  })
}

//Normal function with three arguments
let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'


console.log(dragon('fluffykins', 'tiny', 'lightning'))

//Same function, but curried
let curryingDragon =
  name =
    size =
      element =
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(curryingDragon ('fluffykins')('tiny')('lightning'))

//Why currying is useful
let dragons = {
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
}

let hasElement =
  (element, obj) => obj.element === element

let lightningDragons =
  dragons,filter(x => hasElement('lightning', x))

console.log(lightningDragons)
