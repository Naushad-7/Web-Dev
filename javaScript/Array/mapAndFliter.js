// Map and filter funtions


let arr = [1,2,3,4,5];
let newArr = arr.map((e) => {
    return arr.splice(1,3,'Naushad','alam');
});
console.log(newArr);


// using map and filter together that is speciality of the map funtion;........



// let arr = [1,2,5,6,9];

// let newArr = arr.map((e) => e*2).filter((e)=> e<=8);
// console.log(newArr);

// another way to do the same thing or task



// let arr1 = arr.map((e) => {
//     return arr.splice(1,3,7,4)
//     }).filter((e)=>
//         {
//             return e<=8
//         });
// console.log(arr1);


