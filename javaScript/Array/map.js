let arr = [7,8,9,2,5,1];

let newArr = arr.map((e) => {
    return e*2;
});

console.log(newArr);

// filter method


let arr1 = arr.filter((a) => {
    return a > 5;
});

console.log(arr1);

// reduce method.............

const arr2 = (a, b) => {
    return a*b; 
}

console.log(arr.reduce(arr2));