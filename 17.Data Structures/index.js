// Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstNode = new Node(1);
const secondtNode = new Node(2);
const thirdNode = new Node(3);

firstNode.next = secondtNode;
secondtNode.next = thirdNode;

console.log(firstNode);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (current) {
      prev.next = current.next;
      this.size--;
      return;
    }
    return -1;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  display() {
    let current = this.head;
    console.log(current, 'curret');
    let list = '';
    while (current) {
      list += current.value + ' ';
      current = current.next;
    }
    return list;
  }
}

const List = new LinkedList();
console.log('\n-------');
console.log(List, 'List 1');
List.add(1);
List.add(2);
List.add(3);

console.log(List.display(), 'List 4');
List.remove(3);
// console.log(List.display(), 'List 5');

//** 2. Stack */

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this.top.value;
  }

  pop() {
    // pop
    if (!this.top) return;
    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }
  peek() {
    if (!this.top) return;
    return this.top.value;
  }
}

const reverseString = 'parvejkhan';

const stack = new Stack();

for (let i = 0; i < reverseString.length; i++) {
  stack.push(reverseString[i]);
}
let reverse = '';
while (stack.size) {
  const top = stack.pop();
  if (top) {
    reverse += top;
  }
}
console.log(reverse, 'reverse');

// Activity 3> Queue

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  front() {
    if (!this.first) return null;
    return this.first.value;
  }
}

const Printer = new Queue();

Printer.enqueue(1);
Printer.enqueue(2);
Printer.enqueue(3);
Printer.enqueue(4);
Printer.enqueue(5);
console.log(Printer, 'queue');

//Activity 4 > Binary Tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inOrderTraversal() {
    let result = [];
    this._inOrderTraversalRecursive(this.root, result);
    return result;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertRecursive(this.root, newNode);
    }
  }

  _insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertRecursive(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertRecursive(node.right, newNode);
      }
    }
  }

  _inOrderTraversalRecursive(node, result) {
    if (node) {
      this._inOrderTraversalRecursive(node.left, result);
      console.log(node.value, 'value');
      result.push(node.value);
      this._inOrderTraversalRecursive(node.right, result);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(18);

console.log(`\n BST:`);
console.log(binaryTree.inOrderTraversal(), 'binaryTree');
