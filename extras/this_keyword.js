// "use strict";
console.log(this); // In a Node env, this will be the empty object

function Name() {
  //   console.log(this, "inner function"); // return global context in non-strict mode
}
Name();

function myName() {
  //   console.log(this, "strict mode"); // output - undefined
}
myName();

//  When a function is called as a method of an object, this refers to the object.

let obj = {
  name: "Parvej",
  yourName: function () {
    console.log(this, "object");
  },
};

obj.yourName();

//4. Constructor Context

function Person(name) {
  this.name = name;
}
const person1 = new Person("Alice");
console.log(person1, "this refer to newly instance");

//5. call, apply, and bind Methods


//   You can explicitly set the value of this using call, apply, and bind.

function greet() {
    console.log(this.name);
}
const person = { name: "Bob" };

greet.call(person, "hello"); // Output: "Bob"

// console.log(person,"person")

//Apply same but take multiple arg

function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const personB = { name: "Charlie" };
greet.apply(personB, ["Hello"]); // Output: "Hello, Charlie"



//bind: Returns a new function, permanently bound to the specified this value.

function greet() {
    console.log(this.name);
}

const personC = { name: "Dave" };
const boundGreet = greet.bind(person);
boundGreet()


//6. Arrow Functions

/***
 *  Arrow functions do not have their own this context.
 * Instead, they inherit this from the enclosing scope at the time they are defined.
 */

const objA = {
    name: "Eve",
    regularFunction: function() {
        console.log(this.name); // this refers to obj
    },
    arrowFunction: () => {
        console.log(this.name); // this refers to the enclosing scope (global object in this case)
    }
};

objA.regularFunction(); // Output: "Eve"
objA.arrowFunction(); // Output: undefined (in a browser, it would be the global object, window)
