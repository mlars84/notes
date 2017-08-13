## Javascript30 day challenge
- https://javascript30.com/

## 01 - Drum Kit
- key event listener, audio play and toggle class.

### Bind an event to our keys when they are pressed.

`window.addEventListener('keydown', playSound)`

- `playSound()` is a listener for `keydown` events registered using `window.addEventListener`.
- `window` is the global object in a browser, or the root object of the DOM. And `document` stands for DOM.
- `data-key` has its own value on `<div>`s and `<audio>`s in HTML

```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```
- `keyCode` property is the *KEY* to connect our buttons(`<div>`s) and sounds(`<audio>`s).
- `keyCode`'s value is same as `ASCII` code (in lowercase letter ), check keycodes [here](http://keycode.info/).
- data-key is set for mapping buttons and audios to get the `keyCodes` via `keydown` event.
the whole `querySelector` expression has to be in back ticks.
- `${}` is syntactic sugar for template literals, read more about `Expression interpolation` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### About playing sounds

- How do we prevent delay playing sound, if we keep hitting a key?

just add `audio.currentTime = 0;` before `audio.play();`

### Toggling styles

- use `item.classList.add('className')` to add class when key pressed. (same as `element.addClass('className')` in jQuery)

- use `transitionend` event to remove `play` class. since we want to just remove `transform` property, so add a condition to skip others.

```
if(e.propertyName != 'transform') return;
this.classList.remove('playing'); // `event.target.classList.remove('playing');`
```

### forEach and Arrow function

`items.forEach()` instead of just `forEach`, which means it's a property of an array.

- Arrow functions is ES6 syntax,

```keys.forEach(key => key.addEventListener());
```

# 02 - JS + CSS Clock
pointers rotate animation, get times, changing pointer positions.

### Initialize pointer positions and rotation along the x-axis

`transform-origin: 100%; // transform-origin: right;`

`transition-timing-function: cubic-bezier();`

- `transform-origin` moves the origin of rotation along x-axis. check it out [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).

- `transition-timing-function` here is for the real clock **tic-tock**-like effect.

### Get time

`setInterval(setDate, 1000);`

- the `setInterval` function runs a function passed to it every interval to implement the second pointer's rotating effect.

- create `Date()` to get `now.getSeconds()`, `now.getMinutes()` and `now.getHours()`.

- calculating angles of pointers...

`const secondDegrees = ((seconds / 60) * 360) + 90;`

(the initial state of pointers is 90 degrees)

### Initial glitch

Due to a glitch that occurs before the hour turnover second and our transition is set at 0.05s. When hand transition from final state to initial state, because the number of degrees reduce, the hand makes a (reverse) anti-clockwise motion to reach the 0 degree mark, so we'll see it occurs.

To bypass it, we remove the `transition` property at the specified degrees (where glitch occurs) via JavaScript.

```
if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
else secondHand.style.transition = 'all 0.05s';

if (minsDegrees === 90) minHand.style.transition = 'all 0s';
else minHand.style.transition = 'all 0.1s';
```

# 03 - CSS Variables and JS
`data-` attribute, `:root`, CSS Variables definition `var(--xxx)`, `filter: blur()`, `change` event and `mousemove` event

- [`dataset`](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset) property allows to custom data attributes like `data-xxx` on the element, either in HTML or in the DOM. It's a map of **DOMString**, one entry for each custom data attribute.

- `:root` selector matches the document's root element is always the html element and it's also where we declare the variable for the base element in HTML.

- once we declare CSS Variables, then we can add it to our specific elements, like `img` below, check how to declare it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

- CSS Variable declare syntax is `--`, just like `$` in SASS.

```
:root {
  --spacing: 10px;
}

img {
  padding: var(--spacing);
}
```

- CSS `filter` provides `blur`, `bightness` and so on, take a look at it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).

- NodeList vs. Array : NodeList is **NOT** an Array. You can open the `proto` in dev tool and  see its methods, there are `forEach()`, `keys()`..., and Array's prototype has `map()`, `pop()`...etc.

### Handling suffix with dataset

use `dataset` to deal with suffix `px` by adding `data-sizing: px` as an attribute on input element.

```
<input type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```

and the get the suffix by `dataset.sizing` w/ JS

```
const suffix = this.dataset.sizing || '';
```

and don't forget the condition with `|| ''` for `<input type=color>` which has no `px`.

### Changing CSS property via JS

`document.documentElement` is the root element in JS, so we can change the global CSS variables with JS just `setProperty` to `style` like so:

```
document.documentElement.style.setProperty('--base', '#000');
```

# 04 - Array Cardio Day 1
- array methods: filter, map, sort, reduce, (gateway drug to functional programming)etc.
```
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
```  

## First problem:
```
Array.prototype.filter()
```
- The `filter()` method creates a new `array` with all elements that pass the test implemented by the provided `function`.

1. Filter the list of inventors for those who were born in the 1500's

### Solution:
```
const fifteen = inventors.filter(inventor => {
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true; // keep it!
  } else {
    return false;
  }
  });
console.log(fifteen);
```
- `console.table();` "logs" as a table in the console

## Second Problem:
```
Array.prototype.map()
```
- The `map()` method creates a new `array` with the results of calling a provided `function` on every element in the calling `array`.

2. Give us an array of the inventors' first and last names

### Solution:
```
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullNames);
```

## Third Problem:
```
Array.prototype.sort()
```
- The `sort()` method sorts the elements of an `array` in place and returns the `array`. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

3. Sort the inventors by birthdate, oldest to youngest

### Solution
```
const ordered1 = inventors.sort(function(a, b) {
  if(a.year > b.year){
    return 1;
  } else {
    return -1;
  }
})
console.table(ordered1);
```
- Ternary Operator
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
```
const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table('ordered2 =>', ordered2);
```

## Fourth Problem:
```
Array.prototype.reduce()
```
- The `reduce()` method applies a function against an accumulator and each element in the `array` (from left to right) to reduce it to a single value.

4. How many years did all the inventors live?

### Solution
- reduce() gives us a running total from what we've returned last time.
```
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
console.log(totalYears);
```

## Fifth Problem:
5. Sort the inventors by years lived

```
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = a.passed - a.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.log('oldest =>', oldest);
```

## Sixth Problem:
6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
[here](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)

### Solution
```
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
// ES6 spread - const.links = [...category.querySelectorAll('a')];

const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'))

```
```
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
```

## Seventh Problem:
7. sort Exercise (Sort the people alphabetically by last name)

### Solution
```
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1;
})
console.log(alpha);
```

## Eighth Problem:
8. Reduce Exercise (Sum up the instances of each of these)
```
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
```

### Solution
```
const transportation = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0;
  }
    obj[item]++;
    return obj;
  }, {})
console.log(transportation);
```
