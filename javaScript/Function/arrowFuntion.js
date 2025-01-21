
// Arrow function 

// Price of a Smart phone 

let Ram1= 4;
let Ram2= 8;
let Ram3= 12;

let Storage1 = 64;
let Storage2 = 128;
let Storage3 = 256;

let camera1 = 16;
let camera2 = 32;
let camera3 = 64;

let phonePrice = () =>{
    let randomRam = eval(`Ram${Math.floor(Math.random()*3)+1}`);
    let randomStorage = eval(`Storage${Math.floor(Math.random()*3)+1}`);
    let randomCamera = eval(`camera${Math.floor(Math.random()*3)+1}`);

    let price = randomRam + randomStorage + randomCamera;


console.log(phonePrice);