console.log("Example of the promises with more nasted promises");

let nastedPromise = new Promise((resolve, reject) => {
    // let success = true;
    let success = false;
    if(success)
    {
        resolve(10);
    }
    else
    {
        reject("the promises did not meet the condition so it is rejected");
    }
});


nastedPromise.then((message1) => {
    console.log("The first value taken by the resolve: " ,message1);
    return 20;
} ).then((message2) => {
    console.log("The second value is taken by the message 1: ", message2);
    return 30;
}).then((message3) => {
    console.log("The second value is taken by the message 2: ", message3);
    return 40;
}).then((message4) => {
    console.log("The second value is taken by the message 3: ", message4);
    return 30;
}).catch((err) => {
    console.log(err);
}).finally((finalMessage) => {
    console.log("This is final message that will run in any conditon where the promise is fullfilled or rejected");
})