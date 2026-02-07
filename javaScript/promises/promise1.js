console.log("How the promises work:");

let prom1 = new Promise((resolve, reject) =>{
    console.log("I'm inside the promise1 fuction ");
    let success = false;
    if(success){

        resolve("The promise function is now fulfulled");
    }
    else{
        reject("The promise fuction is now rejected");
    }

})

prom1.then((message) => {
    console.log(message);
}).catch((err)=>{
    console.log(err);
})