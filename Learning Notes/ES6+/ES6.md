# ES6 notes
- module syntax?
- arrow functions
- constructors

# Egghead.io Learn ES6 course
[Course link](https://egghead.io/courses/learn-es6-ecmascript-2015)
- 

## React: ES6, ES2016, and Beyond course (Carl Peaslee)
-


## Functional Programming (https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257)
- First class functions: The ability to use functions as data values: pass functions as arguments, return functions, and assign functions to variables and object properties. This property allows for higher order functions, which enable partial application, currying, and composition.
- Anonymous functions and concise lambda syntax: x => x * 2 is a valid function expression in JavaScript. Concise lambdas make it easier to work with higher-order functions.
- Closures: A closure is the bundling of a function with its lexical environment. Closures are created at function creation time. When a function is defined inside another function, it has access to the variable bindings in the outer function, even after the outer function exits. Closures are how partial applications get their fixed arguments. A fixed argument is an argument bound in the closure scope of a returned function. In add2(1)(2), 1 is a fixed argument in the function returned by add2(1).
- Purity: In JavaScript, purity must be achieved by convention. If you’re not building most of your application by composing pure functions, you’re not programming using the functional style. It’s unfortunately easy in JavaScript to get off track by accidentally creating and using impure functions.
- Immutability: In pure functional languages, immutability is often enforced. JavaScript lacks efficient, immutable trie-based data structures used by most functional languages, but there are libraries that help, including Immutable.js and Mori. I’m hoping that future versions of the ECMAScript spec will embrace immutable data structures.
There are signs that offer hope, like the addition of the const keyword in ES6. A name binding defined with const can't be reassigned to refer to a different value. It's important to understand that const does not represent an immutable value.
A const object can't be reassigned to refer to a completely different object, but the object it refers to can have its properties mutated. JavaScript also has the ability to freeze() objects, but those objects are only frozen at the root level, meaning that a nested object can still have properties of its properties mutated. In other words, there's still a long road ahead before we see true composite immutables in the JavaScript specification.
- Recursion: JavaScript technically supports recursion, but most functional languages have a feature called tail call optimization. Tail call optimization is a feature which allows recursive functions to reuse stack frames for recursive calls.
Without tail call optimization, a call stack can grow without bounds and cause a stack overflow. JavaScript technically got a limited form of tail call optimization in the ES6 specification. Unfortunately, only one of the major browser engines implemented it, and the optimization was partially implemented and then subsequently removed from Babel (the most popular standard JavaScript compiler, used to compile ES6 to ES5 for use in older browsers).
- Bottom line: It still isn’t safe to use recursion for large iterations — even if you’re careful to call the function in the tail position.

- A const object can't be reassigned to refer to a completely different object, but the object it refers to can have its properties mutated.
- While it may not be absolutely ideal for every programmming style, JavaScript is unapologetically a general-purpose language designed to be usable by various people with various programming styles and backgrounds.

## A Functional Programmer’s Introduction to JavaScript (Composing Software)
(https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30)
- If you want to assign existing variables to object property keys of the same name, there’s a shortcut for that. You can just type the variable name instead of providing both a key and a value:
```const a = 'a';
const oldA = { a: a }; // long, redundant way
const oA = { a }; // short an sweet!
```
- Object Spread Operator (...)
```const c = {...oA, ...oB}; // { a: 'a', b: 'b' }
```
- iterates over the properties in oA and assigns them to the new object, then does the same for oB, overriding any keys that already exist on the new object.
- In my experience, mutating an existing object rather than creating a new object is usually a bug. At the very least, it is error-prone. Be careful with Object.assign().
- A ternary expression is an expression that lets you ask a question using a comparator, and evaluates to a different answer depending on whether or not the expression is truthy:
```14 - 7 === 7 ? 'Yep!' : 'Nope.'; // Yep!
```
-


## Babel for browser compiling
- http://ccoenraets.github.io/es6-tutorial/setup-babel/
- $ npm install babel-cli babel-core --save-dev
- $ npm install babel-preset-es2015 --save-dev


## Object Oriented JavaScript
- https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/

-  `Classes` give us a convenient syntax to define the state and behavior of objects that will represent our concepts.

- If you can think of something as a separate entity, it’s likely you should define a `class` to represent that “thing” in your program.

### Constructors
= The `constructor` method is special, and it solves the first problem. Its job is to initialize an instance to a valid state, and it will be called automatically so we can’t forget to initialize our objects.
