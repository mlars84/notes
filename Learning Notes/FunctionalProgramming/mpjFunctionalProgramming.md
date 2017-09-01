# Functional programming concepts in VanilaJS(https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
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

### In JS, functions are values and you can exploit this by dividing your code into
small, simple functions and composing them together using Higher Order Functions

## Map - Part 2 of Functional Programming in JavaScript :
[Part 2](https://www.youtube.com/watch?v=bCqtb-Z5YGQ)
- 

## Reduce basics - Part 3 of Functional Programming in JavaScript :
[Part 3](https://www.youtube.com/watch?v=Wl98eZpkp-c)

## Reduce Advanced - Part 4 of Functional Programming in JavaScript:
[Part 4](https://www.youtube.com/watch?v=1DMolJ2FrNY)

## Closures - Part 5 of Functional Programming in JavaScript :
[Part 5](https://www.youtube.com/watch?v=CQqwU2Ixu-U)

## Currying - Part 6 of Functional Programming in JavaScript :
[Part 6](https://www.youtube.com/watch?v=iZLP4qOwY8I)

## Recursion - Part 7 of Functional Programming in JavaScript :
[Part 7](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## Promises - Part 8 of Functional Programming in JavaScript:
[Part 8](https://www.youtube.com/watch?v=2d7s3spWAzo)
