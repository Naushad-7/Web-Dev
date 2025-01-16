// Basic function without Parameter...........

//here we are defining the funtion parameters ........
function printnum(){
    let num=10;
    console.log(num);
}

// and here we are calling the function and that will retrun the value of the num.
printnum();


// Example No 2 with Strings.......
function myName(){
    let name= 'Naushad';
    console.log(name);
}

myName();

// print the counting from 1 to 20 ;

function printCounting()
{
    for(let i= 1; i<=20; i++)
    {
        console.log(i);
    }
}

printCounting();


// Print the Average of the two numbers

function getAvg(num1, num2)
{
    let avg = (num1 + num2) / 2;
    console.log(avg);
}
// here we are calling the function with two parameters
console.log("The avg of two numbers");
getAvg(10, 20);


// print the sum of the 3 numbers

function getSum(n1, n2, n3)
{
    let sum = (n1+n2+n3);
    // console.log(sum);
    return sum;
}
console.log("The sum of three numbers");
let ans = getSum(2,3,6);
console.log(ans);




//Printing the full name with concationation ........

function fullName(first_name, Last_name)
{
    let full_name = first_name + " " + Last_name;
    console.log(full_name);
}
// here we are calling the function with two parameters
console.log("The full name");

fullName("Naushad ", "Alam");