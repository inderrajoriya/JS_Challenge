let a = 80, b = 20;  // Activity 1
console.log("Sum :", a + b);
console.log("Difference :", a - b);
console.log("Product :", a * b);
console.log("Division :", a / b);
console.log("Remainder :", a % b);
console.log('-----------');
let num_1 = 10;   // Activity 2
num_1 += 1
console.log("Value is 10 and after value using this += :", num_1);
let num_2 = 10;
num_2 -= 1
console.log("Value is 10 and after value using this += :", num_2);
console.log('-----------');
let number_1 = 10;
let number_2 = 20;
let number_3 = '30';
let number_4 = 40;
if (number_1 > number_2) {
    console.log(number_1, "is greater then", number_2)
} 
if(number_1 < number_2){
    console.log(number_1, "is less then", number_2)
}else{
    console.log(number_1, "is equal to", number_2)
}


console.log(number_4 == number_3);
console.log(number_4 === number_3);
console.log('-----------');
let isLogIn = true;
if(!isLogIn){
    console.log("You are not logged in")
}
else{
    console.log("You are logged in")
}
console.log('-----------');
let mynum = -10;
(mynum>0)?console.log("Number Is Positive") : console.log("Number Is Negative");;