function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = target - nums[i];
    if (map.has(current)) {
      return [i, map.get(current)];
    }
    map.set(nums[i], i);
  }
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// Task Reverse Integer

const int = 1234560;

function reverseInt(int) {
  const sign = Math.sign(int); // Get the sign of the number (-1, 0, 1)
  console.log(sign, 'sign');
  const reversedNum =
    parseInt(Math.abs(int).toString().split('').reverse().join('')) * sign;

  if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversedNum;
}

console.log(reverseInt(int));

var isPalindrome = function (x) {
  if (x < 0) return false;
  return Number(x.toString().split('').reverse().join('')) === x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(763));

class LinkNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = function (l1, l2) {
  const temp = new LinkNode();
  let current = temp;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }
  return temp.next;
};

console.log(mergeTwoLists(l1, l2));

function valid(str) {
  const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  
  let stack = [];
  for (let char of str) {
    if (char in bracketsMap) {
      stack.push(char);
    } else if (stack.length > 0 && bracketsMap[stack.at(-1)] === char) {
      stack.pop();
    } else {
      return false;
    }
    return stack.length === 0;
  }
}
console.log(valid('()'));
console.log(valid('(]'));
console.log(valid('[]'));
console.log(valid('[({})]'));
