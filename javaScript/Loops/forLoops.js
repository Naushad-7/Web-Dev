let i;

for (i = 0; i <= 5; i++) {
    console.log(i);
}

// The above code will print the numbers from 0 to 5. The loop will run 6 times because the condition is i <= 5. The loop will start from 0 and end at 5. The output will be:
let num=2;
console.log("The table of 2 is: ");
for (i=1; i<=10; i++){
    console.log(num + " * " + i + " = " + num*i);
}

// The above code will print the table of 2. The loop will run 10 times because the condition is i <= 10. The loop will start from 1 and end at 10. The output will be:

// var num1 = 3;
// for(i=1; i<=10; i++)
// {
//     console.log(num1 + "*" + i + "=" + num1*i);

// }


for(i=1; i<=7; i++)
{
    if(i == 3){
        break;
    }
    console.log(i);
}

// The above code will print the numbers from 1 to 2. The loop will run 3 times because the condition is i <= 7. The loop will start from 1 and end at 2. The output will be:


for(i=1; i<=7; i++)
{
    if(i == 3){
        continue;
    }
    console.log(i);
}
// The above code will print the numbers from 1 to 7 except 3. The loop will run 7 times because the condition is i <= 7. The loop will start from 1 and end at 7. The output will be: