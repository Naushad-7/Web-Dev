console.log("Multiple promises using multiple then()");

let Promisefirst = new Promise((resolve, reject)=> {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber < 0.6){
        setTimeout(() => {
            console.log("I'm inside the timeout function");
            resolve("The condition is fulfilled so the if condition is working well ");
        },2000);
    }

        else{
            console.log("I'm inside the else part ");
            reject("The number didn't met the condition so the promise is rejected");
        }
})


Promisefirst.then((Message) => {
    console.log("This is first promise", Message);
}).then((Message) => {
    console.log("This is my second promise", Message);
}).then((Message) => {
    console.log("This is my third promise", Message);
}).catch((err) => {
    console.log(err);
})
