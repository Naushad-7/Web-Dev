// use logical operator to find weather the age of the person is lies between 10 to 20 or not.
let age = 25;

if (age >= 10 && age <= 20) {
    console.log("Age is between 10 to 20");
} else {
    console.log("Age is not between 10 to 20");
}



// Demonstrate the use of Switch case in javaScript.

// let task = 2;

// switch (task) {
//     case 1: console.log("Task 1 is selected");
//         break;
//     case 2: console.log("Task 2 is selected");
//         break;
//     case 3: console.log("Task 3 is selected");
//         break;
//     default: console.log("Invalid Task");
//         break;
// }


// Write a javaScript code to find weather a number is divided by either 2 or 3.

// let number = 7;
// let divisor = [2, 3];

// // if(number % divisor == 0)
// if (number % divisor[0] == 0 || number % divisor[1] == 0) {
//     console.log("Number is divided by 2 or 3");
// }
// else{
//     console.log("Number is not divided by 2 or 3");
// }


// solving the above problem withou using array

// let number = 9;

// if(number % 2 == 0 || number % 3 == 0){
//     console.log("Number is divided by 2 or 3");
// }
// else{
//     console.log("Number is not divided by 2 or 3");
// }

// Write a javaScript code to find weather a number is divided by  2 and 3.


// let number1 = 9;

// if(number1 % 2 == 0 && number1 % 3 == 0){
//     console.log("Number is divided by 2 and 3");
// }
// else if(number1 % 2 == 0 || number1 % 3 == 0){
//     console.log("Number is divided by only one of them");
// }
// else{
//     console.log("Number is not divided by 2 and 3");
// }



// write a javaScript programm to find out that u can drive a car or not based on the age using turnary operator.

let age1 = 8;
let validAge = (age1 >=18) ? "You can drive a car" : "You can not drive a car";
console.log(validAge);