//1. Find the Missing Number in an Array

const arr = [1, 2, 3, 5, 6];

const findMissingElement = (arr) => {
  let n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((a, b) => a + b, 0);
  return sum - arraySum;
};

console.log(findMissingElement(arr));

//2. Reverse a String

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
//Time Complexity: O(n)

console.log(reverseString('Parvejkhan'));

//3 . Check for Palindrome

const Palindrome = (str) => {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
};
//Time Complexity: O(n)
console.log('Palindrome', Palindrome('madam'));
console.log('Palindrome', Palindrome('khan'));

//3. Find the First Non-Repeated Character

const nonRepeatingChar = (str) => {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of str) {
    if (map[char] === 1) {
      return char;
    }
  }
};
//Time Complexity : O(n)

console.log('nonRepeatingChar', nonRepeatingChar('programming'));

// 5. Implement a Queue using Two Stacks

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    return this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.stack1);
console.log(queue.stack2);
queue.dequeue();
console.log('\n');
console.log(queue.stack1);
console.log(queue.stack2);
queue.dequeue();
console.log('\n');
console.log(queue.stack2);
// Time complexity: O(1) amortized for enqueue and dequeue

//6. Validate Parentheses

const validateParentheses = (str) => {
  let bracketPair = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let stack = [];

  for (let char of str) {
    if (char in bracketPair) {
      stack.push(char);
    } else if (stack.length > 0 && bracketPair[stack.at(-1)] === char) {
      stack.pop();
    } else {
      return false
    }
  }
  return stack.length === 0;
};

console.log(validateParentheses('{[()]}')); // Output: true
