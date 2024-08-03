//Activity 1: Sorting Algorithms
// Task 1: Bubble Sort
// Task 2: Selection Sort
// Task 5: Quick Sort

function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const arr = [1, 2, 4, 6, 5, 7, 3, 9];

console.log(BubbleSort(arr));

//Task 2 : Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_i = i;
    console.log(min_i, 'min i', arr[min_i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_i]) {
        min_i = j;
      }
    }
    if (min_i !== i) {
      let temp = arr[i];
      arr[i] = arr[min_i];
      arr[min_i] = temp;
    }
  }
  return arr;
}

const my_array = [64, 34, 25, 5, 22, 11, 90, 12];

console.log(selectionSort(my_array), 'select sort');

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr), 'Quick sort');

// Activity 2: Searching Algorithms

//Task 4 : Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 5), 'Linear search');

function binarySearch(arr, target, low = 0, high = arr.length) {
  if (low > high) {
    return -1; // Target not found
  }

  const mid = Math.floor((low + high) / 2);
  const midEl = arr[mid];
  if (midEl === target) {
    return mid;
  }

  if (mid > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

console.log(binarySearch(arr, 5), 'Binary search');

// Activity 3  : String Algorithms

function occurrenceCount(string) {
  const count = {};
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    count[element] = count[element] ? count[element] + 1 : 1;
  }
  return count;
}

console.log(occurrenceCount('madam'), 'Count occurrence');

function longestSubString(str) {
  console.log(str, 'str');
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    let seen = new Map();
    let subString = '';
    for (let j = i; j < str.length; j++) {
      if (!seen.has(str[j])) {
        subString += str[j];
        seen.set(str[j], true);
        if (subString.length > longest.length) {
          longest = subString;
        }
      } else {
        break;
      }
    }
  }
  return longest;
}

console.log(longestSubString('Parvejkhanmalwan'), 'longest substring');

//** Array Algo */

function rotateArray(arr, k) {
  while (k > 0) {
    const pop = arr.pop();
    arr.unshift(pop);
    k--;
  }

  return arr;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotateArray(arr1, 2), 'rotate array for k position');

function mergeArr(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  const sorted = quickSort(arr);
  return sorted;
}

const arr2 = [35, 64, 78];

console.log(mergeArr(arr1, arr2), 'merge and make a sort arr');

function fib(num, memo = {}) {
  if (num in memo) {
    return memo[num];
  }
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}

function fib2(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr, 'Arr');
  return arr[num];
}

console.log(fib(10), 'fib');
console.log(fib2(10), 'fib 2');
