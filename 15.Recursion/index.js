//Activity 1 : Basic Recursion

//Task1 : factorial

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5), 'factorial');
console.log(factorial(10), 'factorial');

//Task2: fibonacci number

function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6), 'fib');

//Activity 2 : Recursion with Array

// Task3 : Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let [firstElement, ...rest] = arr;
  return firstElement + sumArray(rest);
}

console.log(sumArray(arr), 'Sum Array');

//Task4 : Find Maximum element

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const [firstElement, ...restOfArray] = arr;
  const maxOfRest = findMax(restOfArray);
  if (firstElement > maxOfRest) {
    return firstElement;
  } else {
    return maxOfRest;
  }
}

console.log(findMax(arr));

//Write a recursive function to reverse an array. Log the result for a few test cases.

function reverse(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let [firstEl, ...rest] = arr;

  const revEl = reverse(rest);

  return revEl.concat(firstEl);
}

console.log(reverse(arr));

// Activity 3: String Manipulation with Recursion

//Task 5:

function stringReverse(str) {
  if (str.length <= 1) {
    return str;
  }
  let [first, ...rest] = str;

  return stringReverse(rest) + first;
}

console.log(stringReverse('Parvejkhan'));
console.log(stringReverse('madam'));
console.log(stringReverse('Javascript'));

function palindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  let [first, ...rest] = str;

  return first === rest.slice(-1)[0] && palindrome(rest.slice(0, -1));
}

console.log(palindrome('madam'));

//Activity 4: Recursion with Objects

//Task 7 :

function recursiveBinarySearch(arr, target, low = 0, high = arr.length) {
  console.log(low, high, target);
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return recursiveBinarySearch(arr, target, low, mid - 1);
  }
  return recursiveBinarySearch(arr, target, mid + 1, high);
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

//task 8 :

function occrunace(arr, target, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  if (arr[index] === target) {
    return 1 + occrunace(arr, target, index + 1);
  }
  return occrunace(arr, target, index + 1);
}

console.log(occrunace([1, 2, 1, 6, 7, 6, 7, 8, 9], 6));
