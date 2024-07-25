//Activity 1
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(`This number ${num} is even`);
    } else {
        console.log(`This number ${num} is odd`);
    }
}
checkEvenOdd(8)

function square(n) {
    return n * n; 
}
console.log("Square of the number is :" , square(5));

//Activity 2
const maxTwoNumber = function (num1 , num2) {
   return Math.max(num1 , num2)
}
console.log("Maximum number is :",maxTwoNumber(51,7));

const concatenateString = function(str1,str2) {
    return str1 + str2
}
console.log("Concatenated string is :",concatenateString("Hello ","World"))

//Activity 3

const sumOfTwoNumber = (n1,n2)=>{
    return n1+n2
}
console.log("Sum of two numbers is :",sumOfTwoNumber(5,7));

const containsCharacter = (str, char) => str.includes(char);

let result = containsCharacter("Hello, world!", "w");
console.log(result); // Output: true

result = containsCharacter("Hello, world!", "z");
console.log(result);

const multiply = (a, b = 1) => a * b;

// Example usage
let result1 = multiply(5, 2);
console.log("without default parameter : " ,result1); // Output: 10

let result2 = multiply(5);
console.log("with default parameter : " ,result2); // Output: 5 (since b defaults to 1)

function greeting(name , age = 24) {
    return console.log(`Welcome to JS challenge I'm ${name} and my age is ${age} `);
}
greeting("Inder");

const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};
const sayRadhe = () => console.log("Radhe Radhe!");

repeatFunction(sayRadhe, 3);

