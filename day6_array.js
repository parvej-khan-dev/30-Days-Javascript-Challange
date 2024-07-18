// Day 6 Array

//*** Activity 1 : Array creation and access   */

// TODO: create a array from and 1 to 5 and log the array

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Todo: access the first and last element of array and console the result

const firstEl = arr[0]; // arr.at(0)
const lastEl = arr[arr.length - 1]; // another way arr.at(-1)
console.log({
  first: firstEl,
  last: lastEl,
});

//*** Activity 2 : Array methods (Basic) */

// TODO :: Task 3 - use push method to add new element at the end of array

arr.push(6);

console.log(arr, "after push");

//TODO: Task 4 - use pop method to remove last element at end of array and console the result

arr.pop();

console.log(arr, "after pop");

//TODO: Task 5 - use shift method to remove first array at start of array and console the result

arr.shift();
console.log(arr, "after shift");

// TODO: Task6 - use unshift to add element at the start of array on 0 index and console the result

arr.unshift(0);
console.log(arr, "after apply unshift");

//*** Activity 3 : Array method (Intermediate) */

// TODO: Task 7 - use map method to create a new array where each number is double and log the result

const double = arr.map((ar) => ar * 2);

console.log(double, "after apply map");

//TODO : task 8 - use filter method to create new array only even number and log the result

const evenNumber = arr.filter((ar) => ar % 2 === 0);
console.log(evenNumber, "After filter");

//TODO: task 9 - use reduce method to calculate the sum of array and log the result

const sum = arr.reduce((ar, cum) => ar + cum, 0);
console.log(sum, "After reduce ");

//*** Activity 4 : Array Iteration */

//TODO : Task 10 - use for loop to iterate over the array and log each element

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element, "after for loop iterate");
}

//TODO: Task 11 - use forEach method to iterate over array and log the each element

arr.forEach((el) => {
  console.log(el, "use forEach");
});

//*** Activity 5 : Multi-dimensional Array  */

// TODO 12 - create a two dimensional array (matrix)

let multiDArray = [];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let newArr = [i, j];
    multiDArray.push(newArr);
  }
}

console.log("multiDArray", multiDArray);

//TODO 13 - access and log specific element from two -dimensional array - find that key-value pair that sum is five

for (let i = 0; i < multiDArray.length; i++) {
  const innerArray = multiDArray[i];
  let sum = 0;
  for (let j = 0; j < innerArray.length; j++) {
    const innerEl = innerArray[j];
    sum += innerEl;
  }
  if (sum === 5) {
    console.log("inner array", innerArray);
  }
}

for (let i = 0; i < multiDArray.length; i++) {
  const innerArr = multiDArray[i];
  for (let j = 0; j < innerArr.length; j++) {
    const element = innerArr[j];
    if (element === 2) {
      console.log(innerArr);
    }
  }
}

let numArr = [];
for (let i = 0; i < multiDArray.length; i++) {
  const innerArr = multiDArray[i];
  let sum = 0;
  for (let j = 0; j < innerArr.length; j++) {
    let el = innerArr[j];
    sum += el;
  }
  numArr.push(sum);
}

// console.log(numArr);

console.log("------------------------")
for (let i = 0; i < numArr.length; i++) {
  for (j = 1; j < numArr.length; j++) {
    if(numArr[i] + numArr[j] === 4){
        console.log(multiDArray[i], multiDArray[j])
    }
  }
}

