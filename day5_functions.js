console.log(
  "----Task 1: Write a function that check number is odd and even -----"
);

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log("isEven", isEven(5));

console.log(
  "----Task 2: Write a function that calculate square of number -----"
);

function square(arg) {
  return arg * arg;
}

console.log(square(2));

console.log("---Task 3 : write a function find the maximum of two number----");

const maximumTwoNumber = function (a, b) {
  if (a > b) {
    console.log(`${a} is larger then ${b}`);
    return a;
  } else {
    console.log(`${b} is larger then ${a}`);
    return b;
  }
};

console.log(maximumTwoNumber(1, 4));

console.log("Task 4 : write a function concatenate two string");

const stringConcat = function (str1, str2) {
  return str1 + str2;
};

console.log(stringConcat("hello", "Parvej"));

//TODO : write arrow function to calculate the sum of two number and log the result

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

//TODO : write a arrow function that check string contain specfic char

const charExist = (str, char) => {
  return str.includes(char);
};

console.log(charExist("Mahesh", "P"));

//*** Activity 4: Function Parameter and default value  */
//TODO: write a function that take two param and return their product . provide a default value for second value

function productInfo(name, color = "black") {
  return {
    name,
    color,
  };
}

console.log(productInfo("Nike Shoes", "Red"));
console.log(productInfo("Sneaker"));

//TODO:: write a function that takes a person's name and age and return the greeting message, provide default value of age ?

function birthdayWish(name, age = 18) {
  return `Happy Birthday ${name} for ${age} Birthday`;
}

console.log(birthdayWish("Parvej", 24));
console.log(birthdayWish("Aj"));

//*** Activity 5: High Order function   */

//TODO:: Task9: write a high order function that take a function and a number and calls the function the maytimes

function repeatTime(func, num) {
  return function (...args) {
    for (let i = 0; i < num; i++) {
      func(...args);
    }
  };
}

const Alice = repeatTime((name) => {
  console.log("my name is", name);
}, 2);

Alice("Alice");

//TODO: task 10 : write a high order function that take 2 functions and a value ,applies the first function to value, and then a applied on second function

const multiFunction = (fn1, fn2) => {
  return function (value) {
    return fn2(fn2(value));
  };
};

const double = (x) => x * 2;
const add = (x) => x + 1;

const compose = multiFunction(double, add);

console.log(compose(3));
