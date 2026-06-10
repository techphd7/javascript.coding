//Arrays
//Arrays are used to store multiple values in a single variable. They are a special type of object that can hold a collection of items. Each item in an array has a numeric index, starting from 0.
//Arrays can hold any type of data, including numbers, strings, objects, and even other arrays. They are commonly used to store lists of items, such as names, numbers, or objects.

//Creating an array
let myArray=[5,10,15,11,6,10]
console.log(myArray)


//Accessing array elements
console.log(myArray[4]); // Output: 6
console.log(myArray[2]); // Output: 15

//Modifying array elements
myArray[1] = 14;
console.log(myArray); // Output: [5, 14, 15, 11, 6,10]

//Array length
console.log(myArray.length); // Output: 6

//Adding elements to an array
myArray.push(6);
console.log(myArray); // Output: [5, 14, 15, 11, 6,10,6]

//Removing the last element from an array
myArray.pop();
console.log(myArray); // Output: [5, 14, 15, 11, 6,10]

//shift and unshift
myArray.unshift(0); // Adds an element to the beginning of the array
console.log(myArray); // Output: [0, 5, 14, 15, 11, 6,10]
myArray.shift(); // Removes the first element from the array
console.log(myArray); // Output: [5, 14, 15, 11, 6,10]

//Iterating over an array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//includes method 
console.log(myArray.includes(15)); // Output: true
console.log(myArray.includes(20)); // Output: false

//indexOf method
console.log(myArray.indexOf(15)); // Output: 2
console.log(myArray.indexOf(20)); // Output: -1

//slice method
let newArray = myArray.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(newArray); // Output: [14, 15, 11]

//splice method
myArray.splice(2, 1); // Removes 1 element at index 2
console.log(myArray); // Output: [5, 14, 11, 6,10]
myArray.splice(2, 0, 15); // Adds 15 at index 2 without removing any element
console.log(myArray); // Output: [5, 14, 15, 11, 6,10]

//concat method
let anotherArray = [20, 25];
let combinedArray = myArray.concat(anotherArray);
console.log(combinedArray); // Output: [5, 14, 15, 11, 6,10,20,25]

//join method
let joinedString = myArray.join(", ");
console.log(joinedString); // Output: "5, 14, 15, 11, 6,10"

//reverse method
myArray.reverse();
console.log(myArray); // Output: [10, 6, 11, 15, 14, 5]

//sort method
myArray.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(myArray); // Output: [5, 6, 10, 11, 14,15]