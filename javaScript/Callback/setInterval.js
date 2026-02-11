console.log("Using Setinterval ")

// let sayMYname = function() {
//     return "Tony" + " " + Date.now();

// }

// let content;
// document.getElementById('start').addEventListener('click', function(){
//     content =  setInterval(() => {
//         // document.appendChild.seyMYname;
//         console.log(sayMYname());
//     }, 1000);
// })


// document.getElementById('end').addEventListener('click', function(){
//     clearInterval(content);
//     console.log("interval has stopped");
// })



let sayMyname = function() {
    return "Tony Stark " + " " + Math.random();
}
 
let content;

document.getElementById('start').addEventListener('click', function(){
    content = setInterval(() => {
        let newLine = document.createElement('p');
        newLine.textContent = sayMyname();
        document.getElementById('output').appendChild(newLine);
    }, 1000);
})

document.getElementById('end').addEventListener('click', function() {
    clearInterval(content);
    let endmessage = document.createElement('p');
    endmessage.textContent = "You have stopped the interval function";
    document.getElementById('output').appendChild(endmessage);
})

