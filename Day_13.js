//Activity 1
function add(a, b) {
    return a + b;
}
module.exports = add;

const add = require('./add');
console.log(add(2, 3));

//Activity 2

const person = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
module.exports = person;

function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
 module.exports = {
    add,
    subtract
  };
//Activity 3
const { add, subtract } = require('./math');

console.log(add(2, 3));
console.log(subtract(5, 2)); 

function greet(name) {
    console.log(`Hello, ${name}!`);
  }  
module.exports = greet;