const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const reminder = (a, b) => {
  return a % b;
};

// console.log(add(10, 3));
// console.log(sub(10, 3));
// console.log(multi(10, 3));
// console.log(divide(10, 3));
// console.log(reminder(10, 3));

//*** Activity 2 : Assignment Operators */
let num = 0;
const addNumber = (number) => {
  num += number;
  return num;
};
const subNumber = (number) => {
  num -= number;
  return num;
};

// console.log(addNumber(20))
// console.log(subNumber(10))

//*** Activity 3 : Comparison Operators */
const age = 18;
const isAdult = age >= 18 ? true : false;

const isTeen = age < 18 ? true : false;

const is18Completed = age === 18 ? true : false;
// console.log(isTeen);
// console.log(isAdult);
// console.log(is18Completed);

//*** Activity 4 : Logical Operators */
let gender = "male";
let role = "Software developer";
const isAdultMale = gender === "male" && age >= 18 ? true : false;
const isTeens = age >= 13 || age < 18;
const isFemale = !(gender === "male")

console.log(isAdultMale)
console.log(isTeens)
console.log(isFemale)