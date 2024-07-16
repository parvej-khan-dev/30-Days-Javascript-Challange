//** Activity 1 : for loop */

// TODO: Task 1: write a program to print numbers from 1 to 10 for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//TODO: Task 2 : write a program to print multiplication table of 5

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//** Activity 1 : while loop */

//TODO: task3 : write a program to calculate sum of numbers from 1 to 10

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum, "1 to 10 sum");

//TODO: task4 : write a program to print numbers 10  to 1 using while loop
console.log(
  "-----------write a program to print numbers 10  to 1 using while loop----------"
);

let num = 10;

while (num > 0) {
  console.log(num);
  num--;
}

//** Activity 1 : do while loop */

//TODO Task5 : write a program to print 1 to 5 number
console.log("-----------write a program to print 1 to 5 number----------");
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

console.log(
  "-----------write a program to to calculate factorial of a number using do while----------"
);

let b = 5;
let fact = 1;
do {
  fact = fact * b;
  b--;
} while (b > 0);

console.log(fact);

//** Activity 1 : Nested loop  */

console.log("--------nested loop-------");

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//** Activity 5  :  loop control statement  */

console.log(
  "-----------write  a program a print a number 1 to 10 skip 5-------------"
);

for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    continue;
  }
  console.log(index);
}

console.log(
  "-----------write  a program a print a number from 1 to 10 stop loop when number reach to 7-------------"
);

for (let index = 0; index < 10; index++) {
  if (index === 7) {
    break;
  }
  console.log(index);
}
