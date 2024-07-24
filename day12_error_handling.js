//Error handling

/**Activity 1: Basic Error Handling with Try-Catch */

//TODO : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwHandler() {
  try {
    throw 'this is error return';
  } catch (error) {
    console.error('Error', error);
  }
}

throwHandler();

//Task2 :  Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide(a, b) {
  try {
    if (b === 0) {
      throw `b value should be grether then zero`;
    }

    console.log(a / b);
  } catch (error) {
    console.error(error, 'Error while divide');
  }
}

divide(4, 0);
divide(4, 2);

let isLoading = false;

const api = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchPublicApi(api) {
  isLoading = true;
  fetch(api)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(Error, '::', error))
    .finally(() => {
      isLoading = false;
      console.log(isLoading, 'isLoading--1');
    });
  return;
}

fetchPublicApi(api);

//** Custme error  */

//Task 4 :  Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class myError extends Error {
  constructor(message = 'Something went wrong') {
    super(message);
    this.name = message;
  }
}

// try {
//   throw new myError('this is my custom error');
// } catch (error) {
//   console.log(error, 'Error');
// }

//Task 5:  Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateForm(name) {
  try {
    if (typeof name !== 'string') {
      throw new Error('name should be string');
    }
    console.log('name', name);
  } catch (error) {
    console.log('error while validate', error);
  }
}

validateForm('parvej khan');
validateForm(3838383838);

//** Activity 4: Error Handling in Promises */

//Task 6:  Create a promise that randomly resolves or rejects. Use .catch  to handle the rejection and log an appropriate message to the console.
const PromiseCatch = new Promise((resolve, reject) => {
  try {
    // throw new Error('network request error');
    resolve('resolved');
  } catch (error) {
    reject(error);
  }
});

PromiseCatch.then((result) => console.log(result)).catch((error) =>
  console.log(error)
);

const asyncPromise = async () => {
  try {
    const result = await PromiseCatch;
    console.log(result, 'Result');
  } catch (error) {
    console.log('\n');
    console.log(error, 'error while async await');
  }
};
asyncPromise();

//Task fetch  API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const api1 = 'https://jsonplaceholder.typicode2.com/todos/1';

console.log('\n');

async function fetchData() {
  try {
    const res = await fetch(api1);
    const data = await res.json();
    console.log(data, 'data');
  } catch (error) {
    console.log('error', error);
    if (error.cause.code === 'ENOTFOUND') {
      console.log('please provide correct url');
    }
  }
}
fetchData();
