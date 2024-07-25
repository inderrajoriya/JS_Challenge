// Activity 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("------------");
for (let i = 1; i <=10; i++) {
    console.log(`${5} * ${i} =`,5*i);
}
console.log("------------");
// Activity 2
let k=10;
while (k>=1) {
    console.log(k);
    k--;
}
console.log("------------");
let sum=0;
let j=0;
while (j<=10) {
    sum+=j;
    j++;
    }
    console.log(sum);
console.log("------------");
//Activity 3
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
console.log("------------");
let n=5;
let fact = 1;
do {
    fact*=n;
    n--;
    } while (n>=1);
    console.log(fact);
console.log("------------");
//Activity 4 
let num = 5;
for (let i = 1; i <=num; i++) {
for (let j = 1; j <=i; j++) {
    console.log(j);
}   
}

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}

printTriangle(5);

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
