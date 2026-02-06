console.log("Tony Stark"); // that is a sychronous code it will execute first 
console.log("IronMan");

setTimeout (() => { 
    //this is an asychronous code that will take time to execute after every synchronous code will  run because it will go to the browser for the network request after completing the time  it will go to callback que there is will wait fro the every code to run after that call back fuction will run then it will print the scrip ........................
    console.log("I'm inside the timeout function")
}, 2000);

console.log("life line");


console.log("Captain America");
console.log("captain of the Avengers");

const team = (Hulk) => {
    console.log(Hulk)
    console.log("Hulk smash the enemy ");
}
const callback = (arg) => {
    console.log(arg);
    team();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Avengers Assemble");
    document.head.append(sc);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

