//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches to the console.
function matchWord(word) {
  return word.match(/JavaScript/g);
}
console.log(matchWord('Nal ay atk'));

// task match digit
function matchDigit(word) {
  return word.match(/\d/g);
}
console.log(matchDigit('my age is 24'));

// Activity 2 : Character Class and Quantifiers

//Write a regular expression to match all words in a string that start with a capital letter. Log the matches
function capitalChar(word) {
  const regex = /\b[A-Z][a-z]*\b/g;
  const matches = word.match(regex);
  return matches;
}

console.log(capitalChar('Hello My Name is Parvej '));

// Task 4 :
function matchDigitSequences(word) {
  const regex = /\d+/g;
  const matches = word.match(regex);
  console.log('🚀 ~ matchDigitSequences ~ matches:', matches);
  return matches;
}

const testString = 'There are 42 apples, 7 oranges, and 365 days in a year.';
matchDigitSequences(testString);

function parsePhoneNumber(phoneNumber) {
  const regex = /\((\d{3})\)\s*(\d{3})-(\d{4})/;
  const matches = phoneNumber.match(regex);
  console.log('🚀 ~ parsePhoneNumber ~ matches:', matches);
  return matches;
}
const phoneNumber = '(123) 456-7890';
parsePhoneNumber(phoneNumber);

function matchEmail(input) {
  const email = 'example@domain.com';
  const regex = /^([^@]+)@([^@]+)$/;
  const match = input.match(regex);
  if (match) {
    const username = match[1];
    const domain = match[2];
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
  } else {
    console.log('Invalid email format');
  }
}
matchEmail('parvej@gmail.com');

function logMatchesAtStart(string, word) {
  const regex = new RegExp(`^${word}\\b`, 'i');
  const match = string.match(regex);
  if (match) {
    console.log(`Match found: ${match[0]}`);
  } else {
    console.log('No match found');
  }
}
logMatchesAtStart('Hello world', 'Hello'); // Match found: Hello

function logMatchesAtEnd(string, word) {
  const regex = new RegExp(`\\b${word}$`, 'i');
  const match = string.match(regex);
  if (match) {
    console.log(`Match found: ${match[0]}`);
  } else {
    console.log('No match found');
  }
}
logMatchesAtEnd('Hello world', 'world'); // Match found: world

function passwordValidate(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const match = password.match(regex);
  if (match) {
    console.log('Password is valid');
  } else {
    console.log('Password is invalid');
  }
}

passwordValidate('Test@123');
passwordValidate('er123');

function urlValidate(url) {
  const regex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  const match = url.match(regex);
  if (match) {
    console.log('URL is valid');
  } else {
    console.log('URL is invalid');
  }
}

urlValidate('https://www.example.com');
urlValidate('ftp://example.com');
