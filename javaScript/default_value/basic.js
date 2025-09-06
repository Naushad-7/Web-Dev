// function student(fname, lname)
// {

//     console.log("The student full name ",fname, lname);
// }

// student('Tony', 'Stark');




function wrongname(fname = 'Naushad', lname ='Alam' )
{
    console.log("The worng name always taken by othes = ", fname, lname);

}


function wrongname1(fname = 'Naushad', lname = fname.toUpperCase() )
{
    console.log("The worng name always taken by othes = ", fname, lname);

}

wrongname('laiba');
wrongname1();





// In default value we can add object, array , and string as well as we can add another funtion to the the array tooo

// In default value when we pass the null the vlaue it will print the null as a vlaue even if we have given default parameter 
// but in any fuction we have pass the default value and in the calling time we r giving the parameter as undefined then the value will be chaged as per the defalut value that we have given to the function .........



function getage()
{
    return 60;
}

function fetchage(myage = 23, fakeage = getage())
{
    console.log("my real age is = " , myage);
    console.log("my fake age is = ", fakeage);
}

// fetchage(null);
// fetchage(undefined, null);
fetchage(25)