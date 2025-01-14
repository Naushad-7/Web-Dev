// How to initialize string in Js

// 1. Using single quote

let type_1 = "Signle Quote ";
console.log(typeof type_1); // Signle Quote
console.log(type_1);




// 2. Using double quote

let type_2 = "Double Quote";
console.log(typeof type_2); // Double Quote
console.log(type_2);






// 3.Using  string object

let type_3 = new String("String Object");
console.log(typeof type_3); // String Object
console.log(type_3);






// 4. Using ` ` backtick

let type_4 = `Naushad `;
let type_4_1 = `Alam`;
console.log(typeof type_4); // Naushad
console.log(type_4);





// If you want to write whole string or sentence with seprate line then u can use this method.
//multiline string.............

let type_5 = `This will 
allow different line
and  space and alll.`;
console.log(type_5); // This will allow different line and space and alll.



//String Interpolation ..............

let age = 22;
console.log(`my name is ${type_4} and my age is ${age}`);


//Escape sequence ..........

console.log('MY name is \'Naushad Alam\' '); //single quote and double quote has special meaning or (power) so we cannot use in the sequcence, if we want to use that then we have to use the backslash before the single or double quote.

console.log('MY name is \'Naushad Alam\' and my age is \"23\" ');

// we can use sigle time to make it understand the computer then we can use as many times as we can without using backSlash;
console.log('MY name is \'Naushad Alam\' and my age is "23". I live in "India". ');






// String concatination

let concatinationString = type_1 + type_2; // by using + symbole u can do this that will add both the string and print together.
console.log(concatinationString);
console.log(type_4.concat(type_4_1));
console.log(type_4.concat(type_4_1, " is my full name"));



// length of the string

console.log(type_1.length); // 13
console.log(type_2.length); // 12
console.log(concatinationString.length); //25

console.log(type_1.at(3)); //That will return the single charcterat the index no

console.log(type_3.slice(2, 10)); //That will return the string between two points.
