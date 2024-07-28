// Understanding Closures

//Task 1: Create a closure

function sum(a) {
  let b = 10;
  return function () {
    return a + b;
  };
}

const add = sum(10);
console.log(add());

//Task2 :

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
//Task 3 :

function makeCounter2() {
  let lastId = 0;
  return function () {
    lastId++;
    return lastId;
  };
}

const counter2 = makeCounter2();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

//task 4:
function greeting(username) {
  return function () {
    return `Good Morning ${username}`;
  };
}

const shayam = greeting('Shayam');

console.log(shayam());

//Activity 3 : Closures in loops

//task 5:

let arr = [];
for (let index = 0; index < 5; index++) {
  arr.push(function () {
    return index;
  });
}

console.log(arr, 'Function loop closure');

for (const iterator of arr) {
  console.log(iterator());
}

//task 6

function User() {
  let userList = [];
  function add(username) {
    userList.push(username);
    return `${username} add successfully`;
  }

  function remove(username) {
    const filter = userList.filter((usr) => usr !== username);
    userList = filter;
    return `${username} removed success`;
  }

  function getList() {
    return userList;
  }

  function isUserExist(username) {
    const userExist = userList.find((user) => user === username);
    if (!userExist) {
      return false;
    }
    return true;
  }

  return {
    add,
    remove,
    getList,
    isUserExist,
  };
}

const user = User();

console.log(user.getList(), 'user list');
console.log(user.add('Parvej'), 'user list');
console.log(user.getList(), 'user list');
console.log(user.isUserExist('Parvej'));
console.log(user.remove('Parvej'));

//Activity 5 Memoization

//Task 7:

function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

function add1(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add1);
console.log(memoizedAdd(2, 3)); // else block run
console.log(memoizedAdd(2, 3)); // if block run

//Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize2(fn) {
  let cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

const memoizedFactorial = memoize2(factorial);
console.log(memoizedFactorial(5)); // else block run
console.log(memoizedFactorial(5)); // if block run
