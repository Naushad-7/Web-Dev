const getcolor = ()=> {
    const randomNumber = Math.floor(Math.random()* 16777215);
    const randomCode = "#"+randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    // document.body.style.backgroundColor = randomCode;
    let backgroundColor = document.getElementById('container');
    backgroundColor.style.backgroundColor = randomCode;
    

}

document.getElementById("button").addEventListener("click", getcolor);