console.log("using the 'promise.all'  , 'promise.allsettle'  , 'promise.race'   , 'promise.any'; method to take multiple promises");

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("first promise");
    }, 1000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("second promise");
    }, 2000);
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("third promise");
    },3000);
})

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("forth promise");
    }, 5000);
})


// Promise.all([promise3, promise1, promise2,promise4]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });

//The above code will run and if the all the promises has fullfilled it will show the output on the console and display the message there; but if any of the promises has rejected then it will not display the any fullfilled value of the other promisses....................

Promise.allSettled([promise3, promise1, promise2,promise4]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});

//The above code is based on the allSettled that will run the all code and display all the fullfilled and rejected promises and also display the message........................

// Promise.race([promise3, promise1, promise2,promise4]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });

// The above code will run and check for the only first promise once it run wheather it is fullfilled or rejected it will become the outcome or it will display on console.


// Promise.any([promise3, promise1, promise2,promise4]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });


//the above code will run the code and check for the promises if the first promise is fullfilled then it will not check the further and display the message of the first promise but if the first promise is reject then it will go to the second one if that is fullfilled it will display the message of the second promises if rejected then it will go further and check and settle where the condition is fullfilled...............................