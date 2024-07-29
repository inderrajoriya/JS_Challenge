// Activity 1
console.log('------------------');

const name = "Inder";
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Each new line is represented directly within the template literal.`;
console.log(multiLineString);
console.log('------------------');

// Activity 2

 let tech = ["Javascript" ,"React" , "NodeJS" , "MongoDB" , "NextJS"]
 let [first , second] = tech;
 console.log(first , second);

 let bookStore = {
    title : "The Bhagavad Gita ",
    author: "Lord Krishna",
    year: "500BC-200BC"
}

let { title , author} = bookStore;
console.log("Book Title :", title , "Book Auhtor :", author);
console.log('------------------');

// Activity 3
let arr_1 = [1,2,3,4,5]
let arr_2 = [6,7,8,9,10]
let mergedArray = [...arr_1 , ...arr_2]
console.log("Merged Array :" ,mergedArray);
console.log('------------------');

function sum(...num) {
    return num.reduce((a, b) => a + b, 0);
}
let result = sum(1,2,3,4,5)
console.log(result);

const username = "Inder";
const user_age = 25;
console.log('------------------');

const person = {
  username,
  user_age,
  greet() {
    console.log(`Hello, my name is ${this.username} and I am ${this.user_age} years old.`);
  }
};

console.log(person);
person.greet();
console.log('------------------');
