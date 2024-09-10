console.log("Radhe Radhe !!!");


// const promiseOne = new Promise(function(res,rej){
//     let error = true
//     if(!error){
//         setTimeout(()=>{
//             res("Promise reslove")
//         },1000)
//     }
//     else{
//         rej("404 Error")
//     }
// })

// promiseOne.then((res)=>{console.log(res);
// }).catch((err)=>{console.log(err);
// })

async function promiseAsync (){
    try {
      console.log("Heyyy");
       
    } catch(e){
  throw new Error("new hai")
        
    }
}
// const data = 
promiseAsync()

// data.then((res)=>{console.log(res);
// }).catch((rej)=>{console.log(rej);
// })
