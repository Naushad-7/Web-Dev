console.log("lets understand async and await function");

// async function getData() {


//     let response = await fetch('https://jsonplaceholder.typicode.com/posts ');

//     console.log(response);
//     let data = await response.json();
//     console.log(data);

// }
// getData();


// async function loadData() {
//     console.log("This is sync code that will execute line by line");
//     console.log("this is also a sync code so it will also display the value on the console");


// }


async function getInput() {
    return new Promise((resolve, reject) => {
        console.log("I'm inside the promise function 1");
        setTimeout(() => {
            console.log("I'm inside the setTImeout function 2");
            resolve("promise has resolved");
        }, 3000);

        console.log("I'm out of the setTimeOut function 3");

    })
    
}
console.log("I'm out of the promise function 4");
async function main() {
    
    let data = await getInput();
    console.log(data);
    
    console.log("load data now 5");
    
    console.log("data get loaded: 6");
    
}

main();

// data.then((v) => {
    //     console.log(v);
    
    // })