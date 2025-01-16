/* create a faulty calculator using javaScript

        This Faulty calculator does following 
    1.  It takes two number as a input from user
    2.  It performs wrong operation as follow..
        1. + ----> -
        2. - ----> *
        3. * ----> +
        4. / ----> -
        5. % ----> +


But it will will give fault ans with some point not always

*/

let random = Math.random();
console.log("random number is = ", random);

let num1 = prompt("Enter the Fist number");
let operator = prompt("Enter the any operator (+, -, *, /, %)");
let num2 = prompt("Enter the second number");



let misCalc = {
    "+": "-",
    "-": "*",
    "+": "*",
    "/": "-",
    "%": "**",
    "*": "+",
}

alert(`your have enter the ${num1}  ${operator} ${num2}`);

if(random > 0.1)
{
    //correct ans will generate
    alert(`The result is ${eval(`${num1}  ${operator} ${num2}`)}`);
}
else
{
    //wrong ans will generate
    operator = misCalc[operator];
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}