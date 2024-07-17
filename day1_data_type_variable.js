var age = 24; // DateType = string
console.log("age with var", age);

let full_name = "parvej khan"; // DataType = String
console.log("variable declaration with let", full_name);

const isAdult = age > 18 ? true : false; // DataType = Boolean
console.log(isAdult, "constant declaration");

const hobbies = ["coding", "reading", "movie"]; // dataType = Array

const personInfo = {
  // DataType = Object
  name: full_name,
  age,
  isAdult,
  hobbies,
};

console.log(personInfo);

//*** Re- Assigned  variable */

let name = "parvej";
console.log(name, " before variable reassign");

name = "parvej khan";
console.log(name, " after variable reassign");
// output = parvej khan

//** Re- assigned with const  */

const favoriteLang = "Javascript";

// favoriteLang = "python"; // output : TypeError: Assignment to constant variable.

function typeOf(value) {
    let data= {}
    data.value = value;
    if (value === null) {
        data.type = 'null';
        
    }

    if (Array.isArray(value)) {
        data.type = 'array'
    }

    if (value instanceof Date) {
       data.type = 'date'
    }

    if (value instanceof RegExp) {
        data.type = 'regexp';
    }

    if (typeof value === 'object' && value !== null && value.constructor && value.constructor.name) {
        data.type = value.constructor.name.toLowerCase();
    }

    return data;
}

const map = new Map([[1, "One"], [3, "Three"], [4, "Four"]]);
const set = new Set([1,3,45,68,3])
console.log(typeOf(set))