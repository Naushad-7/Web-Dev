// Basic of Array
// Array is a collection of elements. Array is a collection of elements. It can hold more than one value at a time

// Array Declaration
// The array can be declared in JavaScript by using the following syntax.
// var array_name = [value1, value2, value3, ...., valueN];

// Example
var arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Array Length
// The length property of an array returns the number of elements in an array.
// The length property is always one more than the highest array index.
// It means if an array has 5 elements then the length property will return 6

// Example
var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5

// Accessing Array Elements
// Array elements are accessed using their index. Array index starts from 0.
// The index of the first element is 0, the index of the second element is 1, and so on.

// Example
var arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2
console.log(arr[2]); // Output: 3
console.log(arr[3]); // Output: 4
console.log(arr[4]); // Output: 5

// Adding Array Elements
// Array elements can be added by using the push() method. The push() method adds elements to the end of an array.

// Example
var arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Removing Array Elements
// Array elements can be removed by using the pop() method. The pop() method removes the last element from an array.

// Example
var arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4]

// Adding Array Elements at the Beginning
// Array elements can be added at the beginning of an array by using the unshift() method.

// Example
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.slice(1,2);
console.log("sliced");
console.log(arr1);
arr.splice(1,3);
console.log(arr)
arr.splice(2,3, 'naushad','alam');
console.log(arr);