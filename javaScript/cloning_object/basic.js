let userdetails = {
    name: "naushad",
    age: 24,
    profession: "engineer"
};


// cloning object using spread properties that is a shallow method ,..........


let clonedetails = {...userdetails};

console.log(userdetails);

console.log("using spread method");
console.log(clonedetails);




// 2ND METHOD 

// USING ASSIGN() OPERATOR ..............
console.log("using Assing ()");
let cloneperson = Object.assign(userdetails);
console.log(cloneperson);


// 3RD METHOD 

//  USING THE JSON.PARSE() , JSON.STRINGIFY().......... IT'S DEEP CLONING METHOD BUT IS HAS SOME DRAWBACK THAT IT DOESNT WORK ON FUNCTION AND SYMBOLS......



let cloningUser = JSON.parse(JSON.stringify(userdetails));
console.log("using JSON method");
console.log(cloningUser);



// 4th method 

// using for in looop to iterate through all the elements that are available in the object......
let dest = {};
// cloning using iteration .......
for (let key in userdetails) {
        let newKey = key ;
        let newvalue = userdetails[key];

        dest[newKey] = newvalue;   
    }

    console.log("using for in loop ");
    console.log(dest);
