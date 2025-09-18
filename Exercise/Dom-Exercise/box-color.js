// function createColor() {

//   for(let i =0; i < 6; i++)
//   {
//   const randomNumber = Math.floor(Math.random()*16777215);
//   const randomCode = "#"+randomNumber.toString(16).padStart(6, "0");
//   // console.log(randomCode);
//   return randomCode;
// }
// }

// function createColor() {
//   // Generates a random hex color
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//     console.log(color);
//   }

//   return color;
// }
// createColor();

// function getcolor (){

//   for(let i = 1; i <= 5; i++)
//   {
//     let boxColor = document.getElementById(`box${i}`);
//     if(boxColor){
//       boxColor.style.backgroundColor = createColor();
//       boxColor.style.color = createColor();
//       boxColor.addEventListener("click", function() {
//         this.style.backgroundColor = createColor();
//         this.style.color = createColor();
//       });
//     }
    
//   }
// }

// window.onload = getcolor;
// document.getElementById("color").addEventListener("click", getcolor);