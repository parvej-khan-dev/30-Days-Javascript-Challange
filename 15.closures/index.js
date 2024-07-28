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
