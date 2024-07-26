//Task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreet() {
    console.log(`hello how are you its message from static method`);
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Parvej', 24);

person.greeting();
console.log(person);

//Task 2 :

person.updateAge = function (age) {
  this.age = age;
};

person.updateAge(40);
console.log(person, 'updated person');

// Class Inheritance

class Student extends Person {
  static totalStudent = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.totalStudent++;
  }

  getStudentId() {
    return this.studentId;
  }
}

const student = new Student('Mahesh', 23, 12);
console.log(student, 'Student');
student.greeting();
const studentID = student.getStudentId();
console.log(studentID, 'student id');

student.greeting = function () {
  console.log(
    `My name is ${this.name} and I am ${this.age} years old.and student id is ${this.studentId}`
  );
};

student.greeting();

//Act : 3 static method and properties

Person.genericGreet();

//Task 6:
console.log(Student.totalStudent, 'Total Student enroll');

//Act :  Getters and Setters

class PersonInfo {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName || '';
    this.lastName = lastName || '';
  }
}

console.log('\n getter setter');
const person1 = new PersonInfo('Parvej', 'Khan');
console.log(person1.fullName);

person1.fullName = 'wasim akka';
console.log(person1.fullName);

//Act 5 : Private Fields

//Task 9 :

class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}

console.log('-------private property--------');
const account = new Account();
account.deposit(1000);
console.log(account.getBalance(), 'After deposit');
account.withdraw(500);
console.log(account.getBalance(), 'After withdraw');
