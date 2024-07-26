/** creating and exporting modules in ES6 */

import { add, Person } from './script.js';
import { add as additions, multi, sub } from './multi_defaults.js';
import profession from './single_default.js';
import * as math from './multi_defaults.js';

console.log(add(2, 3));

//TASK 2:  Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

console.log('Person', Person);
console.log('person name', Person.name);
console.log('person age', Person.age);

//** Activity 2: Named and Default Exports */

//TODO3 :  Create a module that exports multiple functions using named exports. Import and use these functions in another script.

console.log('multiple export and import', {
  add: additions(2, 4),
  sub: sub(4, 2),
  mul: multi(2, 3),
});

//TODO4 : Create a module that exports a single function using default export. Import and use this function in another script.

console.log('Single Defaults::- ', profession('Software Developer'));

//TODO5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

console.log('all exports', {
  add: math.add(2, 3),
  sub: math.sub(2, 3),
  mul: math.multi(2, 3),
});
