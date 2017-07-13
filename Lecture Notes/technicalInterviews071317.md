# The Technical Interview
## First things first
Every interview will have different questions. These can take many forms including whiteboard problems, computer science theory questions, riddles, live coding on a computer, or Github Repos looking for improvements (opinions vary greatly on the validity of each of these methods). The point of this lecture isn’t to make you an expert in any of these topics, it’s to make it so that when you hear these terms in an interview, you can know what to expect. Not knowing these things DOES NOT mean you will not get a job.

Luke’s philosophy for interviews is, “If you aren’t getting rejected on a regular basis, you aren’t trying hard enough.”

## What is a technical interview
### Who?
Often times your future developer buddies or your future technical manager. Titles often include (Developer, Lead, Architect). These are people who typically know how to code and have been doing it for a while.

### When?
After they decide they like you a little (or that your resume now makes you look like a developer). Good job! Now you need to show them you have the technical chops.

### Where?
Most of the time, these will be on site, sometimes, these can be on a google doc or something else for live coding.

### Why?
For entry level positions many companies are looking for, “People who can find the answers.” You need to show that you are that person. Ask questions, and show them that they would want you on their team.

### Fundamentals of Whiteboard Problem:
- Attempt every problem.
- Ask for clarification
- Think out loud.
- Making mistakes is better than doing nothing.
- Admit when you don’t know things. “I’m not really sure, but this is how I might start…”
- Ask questions when you get stuck or if you start making up functions, “I think strings have a .split() function that does these nice things for me? Is it ok to use this?”.
- Be honest about your strengths and weaknesses (I am pretty good with MEAN stack, I don’t have a lot of experience with C# and Java, but I finished a code school tutorial, started building an application in C#, and I’m excited to learn more.)
- When you are done, test your solution, walk through it, try to think of edge cases that would break it.

## Some Theory
Sorting Algorithms:
https://en.wikipedia.org/wiki/Sorting_algorithm
### The Bad Ones:
Insert Sort
Selection Sort
### The Good Ones:
Merge Sort
Quick Sort

## Big O Notation:
BigO is just a way to measure the speed of an algorithm. It is especially important for large data sets. This is where you can use the word “performance”
https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/

# Data Structures:
https://www.coursera.org/specializations/data-structures-algorithms

How data is stored:
By Reference
By Value

Lists:
- Linked-List: http://en.wikipedia.org/wiki/Linked_list
- Doubly-Linked-List: http://en.wikipedia.org/wiki/Doubly_linked_list
Trees:
- Binary Trees: http://en.wikipedia.org/wiki/Binary_tree
- Binary Search Trees: http://en.wikipedia.org/wiki/Binary_search_tree
- Heaps: http://en.wikipedia.org/wiki/Heap_(data_structure)
Hashes:
- Hash Table: http://en.wikipedia.org/wiki/Hash_table

# Object Oriented Design:
http://en.wikipedia.org/wiki/Object-oriented_programming
I'd recommend at least understanding the concepts discussed in the "Fundamental Features and Concepts" section. Remember that once you understand how OO Design works, you can apply those concepts to any OO language (C#, Java, C++). If you think you will be asked about this in an interview, research Inheritance, Encapsulation, Abstraction, Polymorphism
The Whiteboard Interview Question
The Steps
- Ask a lot of clarifying questions
- Draw a few input outputs (“Yellow” -> “Blue”) to confirm
- Don’t stop thinking out loud

### Fizz-Buzz
‘Write a program that prints the numbers from 1 to 100. But for multiples of three print

"Fizz" instead of the number and for the multiples of five print "Buzz". For numbers

which are multiples of both three and five print "FizzBuzz".’

1 -> 1
2 -> 2
3 -> Fizz
4 -> 4
5 -> Buzz
6 -> Fizz
.
.
10 -> Buzz
.
.
15 -> FizzBuzz

### Leap Year
‘Write a program that takes in a year (as an integer) and returns true if the year is a leap year. Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, but years that are divisible by 400 are leap years.’

1999 -> false (normal year)
2004 -> true (divisible by 4)
2100 -> false (divisible by 100)
2000 -> true (divisible by 400)

### Palindrome
‘Write a program that takes in a string and returns true if the string is a palindrome and false if the string is not a palindrome.’

“Potato” -> false
“Taco Cat” -> true
“noon” -> true

### Big O Array Checking
Write a program that will take in an ordered array of numbers and a sum and determine if two of the inputs can add up to the sum.
array: [1,2,3,4,8], sum: 6 -> true
array: [1,2,3,4,7], sum: 9 -> true
array: [1,2,3,7], sum: 6 -> false

Once you find the “Brute Force” Solution, can you find a faster solution? https://jsfiddle.net/3c4kyjkv/
Here is an “N” solution: https://jsfiddle.net/afqs1q42/
Taken from this video: https://www.youtube.com/watch?v=XKu_SEDAykw

### Fibonacci
Write a program that can find the nth Fibonacci number.
1 -> 1
2 -> 1
3 -> 2
4 -> 3
5 -> 5
6 -> 8

Implement a Queue using 2 Stacks
Stacks are Last In First Out (LIFO)
Queues are First In First Out (FIFO)

## String Parsing
### Reverse word order
‘Hello World’ -> ‘World Hello’
‘Hi There’ -> ‘There Hi’

### Reverse character order/determine if a string is a palindrome
‘Hello World’ -> ‘dlroW olleH’
‘Hi There’ -> ‘erehT iH’

Swap 2 integer variable values without using a third variable

# “Problem Solving” (Obnoxious Riddles)
What is the octet equivalent to the decimal number 10?
How would you design a DB on a server with limited space?
How many McDonald's are there in MN?
How many hot dogs would it take to stretch to the moon?
Why are manhole covers round?
3 light bulbs in a room problem

Suppose that you are standing in a hallway next to 3 light switches, which are all off.

There is another room down the hallway, where there are 3 incandescent light bulbs –

each light bulb is operated by one of the switches in the hallway. Because the light bulbs

are in another room, you cannot see them since you are standing in the hallway. How

would you figure out which switch operates which light bulb, if you can only go the

room with the light bulbs one time, and only one time?



# Language Syntax:
(most popular outside of javascript in MN interviews)
C# (http://en.wikipedia.org/wiki/C_Sharp_syntax)
Java (http://en.wikipedia.org/wiki/Java_syntax)

There are many ways to learn Java and C# online. A lot of it will feel familiar, variables and functions still exist, but a little practice won’t hurt. When you graduate from Prime, study in a way that makes sense to you, and in a way that relates to the companies you are applying to. There are a million sites. Here is one:
http://www.learncs.org/
FizzBuzz in many languages

Access Modifiers
https://en.wikipedia.org/wiki/Access_modifiers
- Public
- Private
- Protected

More interview sample problems can be found at:
www.codewars.com/
www.hackerrank.com
www.codeeval.com
www.codechef.com
www.codeabbey.com

Coursera Algorithms Course
https://www.coursera.org/learn/algorithms-part1

Assignment
Pick one (or more) questions from one of these sites, solve/research it, and present it to the cohort.

https://www.toptal.com/javascript/interview-questions
http://www.skilledup.com/articles/20-must-know-javascript-interview-qa
https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers?utm_source=sendgrid&utm_medium=email&utm_term=21js-qs&utm_content=tutorial&utm_campaign=newsletter20150923
