console.log("This is setTimeout example");

const getText = function() {
    return "No they will never understand you because they don't know how to understand you";       
}

const changeText = function() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.innerHTML = getText();
    }
}

const changeTextBack = function() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.innerHTML = "Do people  understand me";
    }
}

document.getElementById('start').addEventListener('click', function(){
    console.log("returning the change value")
    setTimeout(changeText, 2000);
})

document.getElementById('end').addEventListener('click', function(){
    console.log("reverting back to original text")
    changeTextBack();
})