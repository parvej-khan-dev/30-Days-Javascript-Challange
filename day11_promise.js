/*** Day 11: Promises and Async/Await */

//** Activity 1: Understanding Promises */

//Task 1 :  Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello, this message is shown after 2 seconds');
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.log(err));

//task 2:  Create a promise that rejects with an error message after a 2-second timeout and handle the error using

const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('promise failed after 2 second');
    }, 2000);
  });

rejectPromise()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

//*** Activity 2: Chaining Promises */
//task 3:  Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchPromise = (url) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`data fetch success ${url}`);
    }, 1000);
  });

fetchPromise('http://google.com/users')
  .then((res) => {
    console.log(res);
    return fetchPromise(`/users/data`);
  })
  .then((result) => {
    console.log(result);
    return fetchPromise(`/data/map`);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//*** Activity 3: Using Async/Await */

//Task 4 :  Write an async function that waits for a promise to resolve and then logs the resolved value.

const fetchData = async () => {
  const data = await fetchPromise('https://localhost:5000');
  console.log(data);
};
fetchData();

//Task 5:Write an async function that handles a rejected promise using try-catch and logs the error message.

const handleRejection = async () => {
  try {
    const data = await rejectPromise();
    console.log('success', data);
  } catch (error) {
    console.log(error);
  }
};

handleRejection();

//TODO: Activity 4: Fetching Data from an API

//Task 6 : use API to get data from a public API and log the response data to the console using promises.
const api = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchPublicApi() {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(Error, '::', error));
}

fetchPublicApi();

//Task 7 : use a API to get data from a public API and log the response data to the console using async/await.

async function fetchAPIData(api) {
  try {
    const res = await fetch(api);
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

fetchAPIData(api);

//** Activity 5: Concurrent Promises */

//task 8: use a Promise.all  to wait for multiple promises to resolve and then log all their values.

const fetchAll = async () => {
  try {
    const result = await Promise.all([fetchAPIData(api), fetchPublicApi()]);
    console.log(result, 'result');
  } catch (error) {
    console.log(error, 'error');
  }
};
fetchAll();

//Task9 : use promise.race to log the value of the first promise that resolves among multiple promises.

const api1 = 'https://jsonplaceholder.typicode.com/posts/1';
const api2 = 'https://jsonplaceholder.typicode.com/posts/2';

const fetchAllRace = async () => {
  try {
    const result = await Promise.race([
      fetchAPIData(api1),
      fetchPublicApi(api2),
    ]);
    console.log(result, 'result');
  } catch (error) {
    console.log(error, 'error');
  }
};

fetchAllRace();
