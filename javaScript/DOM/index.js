// const { createElement } = require("react");

document.getElementById("heading1");

const heading = document.getElementById("heading1");

heading.innerHTML = "The heading is Manipulated";


document.getElementsByClassName("box");



window.onload = () => {
    const newheading = document.createElement("h1");
    const newheadingtext = document.createTextNode("Creating new heading with DoM");
    newheading.append(newheadingtext);
    document.body.appendChild(newheading);
};


let newbox = document.createElement("div");
newbox.classList.add("box", "container");
// newbox.classList.add("container");
let newboxtext = document.createTextNode("Box-7");

newbox.append(newboxtext);
document.body.appendChild(newbox);



// ----------------------------------------------------------//


let heading2 = document.getElementById("heading1");

let nexthead = document.createElement("h2");
nexthead.textContent = "This is my new heading with H2";

heading2.insertAdjacentElement('beforeend',nexthead);


let box7 = document.getElementById("container");

let newbox2 = document.createElement("div");
newbox2.classList.add("container", "box");
newbox2.textContent = "Box-7";
box7.insertAdjacentElement('beforeend', newbox2);



//  ---------------------------------------------------------------------------------------------//


// Css properties



let first = document.getElementById("heading1");

first.style.cssText = 'color: brown; text-align: center; background-color: aqua; margin-top: 25px; padding: 10px;'



let boxes = document.getElementsByClassName("box");
boxes[3].style.cssText = 'color: white; background-color: black; text-align: center; padding-top: 10px;'