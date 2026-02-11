console.log("using setinterval")

const  getcolor = () => {
    let randomNumber = Math.floor(Math.random()* 16777215);
    let randomCode = "#" + randomNumber.toString(16);

    console.log(randomCode);

    let backgroundColor = document.getElementById('box');
    backgroundColor.style.backgroundColor = randomCode;
}

// let randomcolor = getcolor();
let color;
document.getElementById('start').addEventListener('click', function(){

    if(!color){
        color =   setInterval(() => {
              getcolor();
          }, 1000);
    }
})


document.getElementById('end').addEventListener('click', function() {
    clearInterval(color);
    color = null;

    console.log("you have stopped the interval");
})