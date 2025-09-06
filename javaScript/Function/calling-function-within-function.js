
// creating function with in function and then returning its value .......


// function solve(number){

//     return function(number){
//         return number*number;
//     }

// }

// let ans = solve(5);

// let finalans = ans(10);
// console.log(finalans);



// creating array function and then calling by its index number........

// const arr = [

//         function(a,b)
//         {
//             return a+b;
//         },

//         function(a,b)
//         {
//             return a-b;
//         },

//         function(a,b)
//         {
//             return a*b;
//         }
// ]

// let ans = arr[1];
// let finalans = ans(5,12);
// console.log(finalans);



// creating the objects and a arrow funtction in the obj

let obj = {

    age:25,
    wt:45,
    ht:5,

    greet: () => {
        console.log("Hi, Tony How are u today");
    }
}

console.log(obj.greet());