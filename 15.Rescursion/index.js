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
