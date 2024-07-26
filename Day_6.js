// Activity 1
let arr = [1,2,3,4,5];
console.log(arr);
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];
console.log(`First element: ${firstElement}, Last element: ${lastElement}`);

console.log("-------------");
// Activity 2
arr.push(6);
console.log("Using push method" ,arr);
arr.pop()
console.log("Using pop method" ,arr);
arr.shift();
console.log("Using shift method" ,arr);
arr.unshift(7);
console.log("Using unshift method" ,arr);
// Activity 3
console.log("-------------");
let usingMapMethod = arr.map((item)=> item*2)
console.log("Using map method" ,usingMapMethod );

let usingFilterMethod = arr.filter((item) => item%2==0) 
console.log("Using filter method" ,usingFilterMethod );

let usingReduceMethod = arr.reduce( (acc, curr)  => acc+curr , 0)
console.log("Using reduce method" ,usingReduceMethod );
console.log("-------------");
// Activity 4
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}
console.log("-------------");
arr.forEach(item => {
    console.log(item);
});
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
