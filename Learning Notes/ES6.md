# ES6 notes
- module syntax?
- arrow functions
- constructors

## Functional Programming
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


## Babel for browser compiling
- http://ccoenraets.github.io/es6-tutorial/setup-babel/
- $ npm install babel-cli babel-core --save-dev
- $ npm install babel-preset-es2015 --save-dev
