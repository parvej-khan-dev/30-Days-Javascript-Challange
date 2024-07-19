//** Objects in Javascript  */

//TODO Task 1 :  Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: 'Rich Dad, Poor Dad',
  author: 'Robert Kiyosaki',
  year: 1997,
};

console.log(book);

//TODO task 2 :  Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

//*** Activity 2: Object Methods */

//TODO task 3 :  Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getBookInfo = function () {
  console.log(`${this.title} and ${this.author}`);
};

// TODO 4 : add a method that take a year in perametor and update book object year and console the book object ?
book.updateYear = function (year) {
  this.year = year;
};

book.getBookInfo();
book.updateYear(1999);
console.log(book);

//** Activity 3: Nested Objects */

//TODO: 5 :  Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: 'Iqra Libray',
  books: [
    { id: 1, title: 'Rich Dad Poor Dad', author: 'Robert k', year: 1997 },
    { id: 2, title: 'Think and grow', author: 'PeterT', year: 2022 },
    { id: 3, title: 'Epic shit', author: 'Ankur wariko', year: 2022 },
  ],
};

console.log(library, 'Library Name');
//TODO: 6-  Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);

for (let book of library.books) {
  console.log(book.title, 'Book Title');
}

/// *** Activity this keyword */

//TODO:7  Add a method to the book object that uses the , keyword to return a string with the book's title and year, and log the result of calling this method.
library.updateTitle = function (bookId, title) {
  const updateBooks = this.books.map((book) => {
    if (book.id === bookId) {
      book.title = title;
    }
    return book;
  });
  this.books = updateBooks;
};

library.updateTitle(1, 'My Dad Rich');
console.log(library);

/**
 * @alias Activity 5: Object Iteration
 */

//TODO 8 : use a for in loop to iterate over the properties of the book object and log each property and its value.

for (let key in book) {
  console.log(book[key], key);
}

//TODO : 9 : use Object.values and Object.keys  methods to log all the keys and values of the book object.

const ObjectKey = Object.keys(book);
const ObjectValue = Object.values(book);
const objectAssign = Object.assign({}, book);
const ObjectEntries = Object.entries(book);

console.log({
  keys: ObjectKey,
  values: ObjectValue,
  entries: ObjectEntries,
  assign: objectAssign,
});

console.log('End day 7');
