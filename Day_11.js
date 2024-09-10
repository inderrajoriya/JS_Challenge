

// const promiseTwo = new Promise(function(reslove , reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             reslove({username : "Inder"})
//         }
//         else{
//             reject("Error 404 ")
//         }},1000)
// })

// promiseTwo.then(function(user){
//     return user.username
// }).then((username)=>{
// console.log(username);

// }).catch((error)=>{
//     console.log(error)
// })


// new Promise(function(reslove , reject) {
//     setInterval(() => {
//         let error = false
//         if(!error){
//             reslove({username : "Krishna"})
//         }
//         else{
//             reject("Error 404 ")
//         }
//     }, 2000);
// }).then((user)=>{
//     console.log(user.username); 
// }).catch((error)=>{
//     console.log(error);
// })

// async function freeApiData() {
//     try {
//      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
//      const data = await response.json()
//      console.log(data);

//     } catch (error) {
//         console.log(error);

//     } 
// }
// freeApiData()


// fetch('https://randomuser.me/api/')
// .then((Response)=>{
//     return Response.json()
// }).then((data)=>{
//     console.log(data);   
// }).catch((err)=>{
//     console.log(err);  
// })




// // // Activities Start
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);
// });

// promise1.then(message => console.log(message));


// const promise2 = new Promise((_, reject) => {
//     setTimeout(() => {
//         reject("Promise rejected after 2 seconds");
//     }, 2000);
// });

// promise2.catch(error => console.log(error));


// const fetchData = (data, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Fetched ${data}`);
//              resolve(data);
//         }, delay);
//     });
// };

// fetchData("Radhe Radhe ", 1000)
//     .then(() => fetchData("Hare Krishna", 2000))
//     .then(() => fetchData("Shree Ji ", 3000));





// const asyncFunctionWithErrorHandling = async () => {
//     try {
//         const message = await promise2;
//         console.log(`By async function ${message}`);
//     } catch (error) {
//         console.log(error);
//     }
// };

// asyncFunctionWithErrorHandling();

const p = new Promise((res)=>{
    res("Radhe Radhe !!!")
})
async function getData(){
    return p
}

const promiseData = getData()
promiseData.then((res) => console.log(res))


const asyncFunction = async () => {
    const message = await p;
    console.log(`By async function  ${message}`);
};

asyncFunction();



// // const asyncFunction2 = async () => {
// //     try {
// //         const response = await fetch('https//official-joke-api.appspot.com/random_joke')
// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("Page not found");
        
// //     }
// // }
// // asyncFunction2();


// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(error => console.error('Error:', error));

// const promise3 = Promise.resolve('Promise 3 resolved');
// const promise4 = Promise.resolve('Promise 4 resolved');

// Promise.all([promise1, promise3, promise4])
//     .then(values => console.log(values));

// Promise.race([promise1, promise3, promise4])
//     .then(value => console.log('First resolved promise:', value));
