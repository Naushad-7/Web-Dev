//write a programm the to print the marks of a student in an object using for loops;

let student1 = {
    name: "Naushad",
    age: 25,
    marks: 95
};

let student2 = {
    name: "Warda",
    age: 22,
    marks: 90
};
console.log(student2);

let student3 = {
    name: "Ali",
    age: 20,
    marks: 85
};

for (const key in student1) {
     {
        const element = student1[key];
        console.log(key, element);
        
    }
}

