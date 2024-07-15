///*** Activity 1 : if-else statement */

//TODO: Task : 1 write a program to check if a number is positive, negative, or zero and log the result in console

let num = 1;

if (num > 0) {
  console.log("number is positive", num);
}
if (num < 0) {
  console.log("number is negative", num);
}

if (num === 0) {
  console.log("number is zero", num);
}

//TODO: Task 2 : write a program to check is person is eligible to vote (age >= 18 ) log the result

let age = 18;

if (age >= 18) {
  console.log(`Person is eligible for voting`);
}

/*** Activity 2 */

//TODO:Task 3 : write a program to find the largest of three number using nested if-else statement;

let num1 = 100;
let num2 = 200;
let num3 = 300;

if (num1 > num2 && num1 > 3) {
  console.log(`${num1} is largest number`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is largest number`);
} else {
  console.log(`${num3} is largest number`);
}

//** Activity 3 :- Switch Case */

// TODO:: Task 4 : write a program that uses a switch case to determine the day of week based on number(1-7) and log the day to console

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    null;
}

// TODO : write a program the uses the switch case to assign a grade ("A",'B',"C","D,"E","F") based on score
let score = 90;

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  case score >= 50:
    console.log("E");
    break;
  default:
    console.log("F");
}

//** Activity 4 :- Ternary Operator */

//TODO: Task6 : write a program that uses the ternary operator to check if a number is even or odd and log the result

function isEven(value) {
  return value % 2 === 0 ? true : false;
}

console.log(isEven(2));

//** Activity 5 :- Combining conditions */

//TODO: Task 7 : write a program to check if a year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400)

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
