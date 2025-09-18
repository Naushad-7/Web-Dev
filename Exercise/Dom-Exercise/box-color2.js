let boxes = document.getElementsByClassName("box");

function createColor() {
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);

    return `rgb(${val1}, ${val2}, ${val3})`;

}

// This code will fill the color to the box each time when we open the webpage but it will not change the color..............
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = createColor();
    e.style.color = createColor();
});


    // Add event listener to the button
document.getElementById("color").addEventListener("click", function() {
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = createColor();
        e.style.color = createColor();
    });
});


