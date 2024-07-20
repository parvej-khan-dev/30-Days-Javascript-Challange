/**
 * @author("Parvej khan")
 * @todo (Es6 feature)
 */

// Template Literal

/*** Activity 1: Template Literals */

//TODO:  Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = "Parvej";
const age = 24;
console.log(`My name is ${name} and I am ${age} years old.`);

// TODO 2:  Create a multi-line string using template literals and log it to the console.

console.log(`
    my name is ${name} and I am ${age}
    years old form jaipur Rajasthan
    `);

//*** Activity 2: Destructuring */

//TODO 3:  Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second);

//TODO 4:  Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "My diary",
  author: "annie frank",
};

const { title, author } = book;
console.log({
  title,
  author,
});

//***  Activity 3: Spread and Rest Operators */

//TODO: 5 -  Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

// spread oprator

const newArr = [...arr, 7, 8, 9];
console.log(newArr);

//TODO 6 : -  Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...arg) {
  return arg.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

//*** Activity 4: Default Parameters */

//TODO 7 :  Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(name, price = 10) {
  console.log("Product info", {
    name,
    price,
  });
}
product("Armani");

/*** Enhance Object Literal */
//TODO 8 :  Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const programmingLang = "Javascript";
const officeTime = "7 hours";

const isActive = () => {
  console.log("yes");
};

const ProfessionalInfo = { programmingLang, officeTime, isActive };
ProfessionalInfo.isActive();

//TODO 9 :  Create an object with computed property names based on variables and log the object to the console.
// Define variables for property names
const firstName = "first";
const lastName = "last";

// Create object with computed property names
const person = {
  [firstName]: "John",
  [lastName]: "Doe",
  [`${firstName}${lastName}`]: "JohnDoe",
};

// Log the object to the console
console.log(person);
