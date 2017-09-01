//Traditional function
function triple(x) {
  return x * 3
}

//Function as a value
let triple = function(x) {
  return x * 3
}

let waffle = triple

waffle(30)

//Filter
let animals = [
{ name: 'Fluffykins', species: 'rabbit' },
{ name:'Caro', species:'dog' },
{ name:'Hamilton', species:'dog' },
{ name:'Harold', species:'fish' },
{ name:'Ursula', species:'cat' },
{ name:'Jimmy', species:'fish' }
]

//"Filter" through with a normal for loop
let dogs = []

for (let i =0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}

//Using `Filter` function
let dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})

//Breaking out callback into a seperate variables
let isDog = function(animal) {
  return animal.species === 'dogs'
}

let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)
