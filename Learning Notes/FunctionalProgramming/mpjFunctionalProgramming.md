# Functional programming concepts in VanilaJS
----
- (https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- Overview
  - Less bugs: Code will be easier to reason about.
  - Less time: you can reuse more of your code.

## Higher-order functions - Part 1 of Functional Programming in JavaScript :
[Part 1](https://www.youtube.com/watch?v=BMUiFMZr7vk)
- Traditional function:
```
function triple(x) {
  return x * 3
}
```
Function as a value:
```
let triple = function(x) {
  return x * 3
}

let waffle = triple

waffle(30)
```
- Just like strings or numbers, functions can be assigned to variables... or passed
into other functions - Higher Order Functions

### `Composition`
- The fact that we can take one function and put it into another function, allows us to
compose a lot of small functions into bigger functions.

### `Filter`
- A function on the array that accepts another function as it's argument, which it
will use to return a new, filtered version of the array.
```
let animals = [
{ name: 'Fluffykins', species: 'rabbit' },
{ name:'Caro', species:'dog' },
{ name:'Hamilton', species:'dog' },
{ name:'Harold', species:'fish' },
{ name:'Ursula', species:'cat' },
{ name:'Jimmy', species:'fish' }
]
```
- "Filter" through with a normal `for` loop
```let dogs = []
for (let i =0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}
```
- Using `Filter` function
```
let dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})
```
- Functions that you send into other functions are `Callback Functions`
- `Filter` accepts one argument, another function. Filter will loop through each
item in the array, and for each item it's going to pass it into the `callback function`
and when it does, it's going to expect the callback function to return either true
or false to tell `Filter` whether or not this item should be in the new array. It
returns the new filtered array.
- The callback function and the filter function are composed into eachother

- Breaking out callback into a seperate variables
```
let isDog = function(animal) {
  return animal.species === 'dogs'
}

let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)
```
- isDog is a just a function that checks that an object is a dog. Has nothing to do
with filtering at all. We can use it for other things...
- If we wanted animals that are not dogs, we could use `Reject`
### `Reject` higher order function that does inverse of `Filter`

# In JS, functions are values and you can exploit this by dividing your code into
# small, simple functions and composing them together using Higher Order Functions.

----

## `Map()` - Part 2 of Functional Programming in JavaScript :
[Part 2](https://www.youtube.com/watch?v=bCqtb-Z5YGQ)
- `Map()` is a HOF that goes through array and transforms objects
```
let animals = [
{ name: 'Fluffykins', species: 'rabbit' },
{ name:'Caro', species:'dog' },
{ name:'Hamilton', species:'dog' },
{ name:'Harold', species:'fish' },
{ name:'Ursula', species:'cat' },
{ name:'Jimmy', species:'fish' }
]
```
- We want to get an array of all of the names
- Solved with a `for` loop
```
let names = []
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names)
```
- Exact same thing using `map()`
```
let names = animals.map(function(animal) {
  return animal.name
})
```
- Since `map()` just expects the callback to return any object, we can use it to
create completely new objects
```
let names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})
```
- Short code is good. Less code almost always means less bugs!!!

### ES6 arrow functions
`let names = animals.map((animal) => animal.name )`

- In functional programming it's common to go even shorter and just shorten the
variable names to x
- `let names = animals.map((x) => x.name)`

# 1 and 2 Recap :
- `map()`, `filter()`, `reject()` all transform a list into something else.
- Another example is `find()` which only returns the first item, transforms an array
into a single object.
- All four turn a list into something else.

## `Reduce()` basics - Part 3 of Functional Programming in JavaScript :
[Part 3](https://www.youtube.com/watch?v=Wl98eZpkp-c)
- The multitude of list transformations. Super list transformation! Can be used
if you can't find a pre-built transformation that fits your needs.
### Want to summarize all the amounts:
```
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]
```
- for loop can do it by looping through all amounts and adding them to a 0 variable
- just like map() or filter(), reduce() is a function on the array object and just like
map() and filter(), it takes a callback function. Unlike map() and filter() it wants
an object.
- object is a "starting point" for our sum
```
let reduceTotalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount
}, 0)
```
- the object, "sum", is passed as first argument. `Reduce()` also receives the
iterated item as the second argument.
- Reduce() iterates through and adds the the first amount to the sum and then begins
again with the modified sum:
```
hello 0 {amount: 250}
hello 250 {amount: 400}
hello 650 {amount: 100}
hello 750 {amount: 325}
reduceTotalAmount => 1075
```
- One Line ES6 version:
`let reduceTotalAmount = orders.reduce((sum, order) => sum + order.amount, 0)`

## `Reduce()` Advanced - Part 4 of Functional Programming in JavaScript:
[Part 4](https://www.youtube.com/watch?v=1DMolJ2FrNY)
- `Reduce()` is not limited to reducing a list to a number. It can reduce it to anything,
another array or object.
- HOF compose very well together.
### Transforming tab separated file into an object literal:
```
mark johansson  waffle iron 80  2
mark johansson  blender 200 1
mark johansson  knife 10  4
Nikita Smith  waffle iron 80  1
Nikita Smith  knife 10  2
Nikita Smith  pot 20  3
```
```
import fs from 'fs'

const output = fs.readfileSync('data.txt', 'utf8')
  .trim() //gets rid of line breaks or spaces at end and start of a string
  .split('\n') //splits into an array. '\n' is a line break
  .map(line => line.split('/t')) //map every line and split it on 't' tab characters
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

  console.log('output', JSON.stringify(output, null, 2))
  //creates JSON string from the output with two spaces for indentation
```
- reduce() takes a function and it takes a starting object. In this case we are going
to use an empty object as the starting object. First argument is the "customers" object
that we are constructing or end goal. Second is the thing we are iterating, in this case
it is a line: `['mark johansson', 'waffle iron', '80', '2'],`
- reduce() iterates over the array of arrays.
- Good functional code is made up of small functions that do one thing and you
bind or chain them together.

## `Closures` - Part 5 of Functional Programming in JavaScript :
[Part 5](https://www.youtube.com/watch?v=CQqwU2Ixu-U)

## `Currying` - Part 6 of Functional Programming in JavaScript :
[Part 6](https://www.youtube.com/watch?v=iZLP4qOwY8I)

## `Recursion` - Part 7 of Functional Programming in JavaScript :
[Part 7](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## `Promises` - Part 8 of Functional Programming in JavaScript:
[Part 8](https://www.youtube.com/watch?v=2d7s3spWAzo)
