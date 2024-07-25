let n = 9;
if (n > 0) {
    console.log(n, "number is positive");
}
else if (n < 0) {
    console.log(n, "number is negative");
}
else {
    console.log(n, "number is zero");
}
console.log("----------------------");

function gradeDetermine(score) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        case score >= 50:
            grade = "E";
            break;
        default:
            grade = "F";
            break;
    }
    console.log(`Score is : ${score} , Grade will be ${grade}`);
} 
gradeDetermine(87)


console.log("----------------------");
let num=8;
(num%2===0)?console.log("Even"):console.log("Odd");

console.log("----------------------");

let year = 2020;
((year%4===0 && year%100===0)|| (year%400===0)) ? console.log(year ,"leap year"):console.log(year, "Not leap yaer" );