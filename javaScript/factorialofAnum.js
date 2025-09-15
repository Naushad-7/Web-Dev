// // create a fatorial of number 

// let arr = [6,5,4,3,2,1];

// let fact = (a,b) => {
//     return a*b;
// }
// console.log(arr.reduce(fact));

// // let num = 5;
// // let fact = 1;
// // for(let i = 1; i<=num; i++)
// // {
// //     fact = fact*i;
// // }
// // console.log(fact);



// =--------------------------------------------------------------------------------------------=//
let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys());       //Here we are creating a Array with using Array.from property its an easy way to do so and its very effective way ........
    console.log(arr.slice(1,)); // here we have sliced the first index of the array so that it start with number 1 not zero......

    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c);
}


factorial(a);