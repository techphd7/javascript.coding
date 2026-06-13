let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 50) {
    console.log("Grade: B");
} else {
    console.log("Grade: Fail");
}
let isLoggedIn = true;
let role = "admin";

if (isLoggedIn) {
    if (role === "admin") {
        console.log("Welcome Admin!");
    } else {
        console.log("Welcome User!");
    }
} else {
    console.log("Please log in first.");
}
let choice = 2;

switch (choice) {
    case 1:
        console.log("You selected Pizza 🍕");
        break;
    case 2:
        console.log("You selected Burger 🍔");
        break;
    case 3:
        console.log("You selected Pasta 🍝");
        break;
    default:
        console.log("Invalid choice ❌");
}

//Nullish coalescing operator(??):null undefined
let vali;
//vali=5??10//like exception prefere value over null and undefined
 //vali=5??10//5
 vali=null??10//10
 vali=undefined??15//15
 vali=null??10??20

 console.log(vali);
 
//ternary operator

//condition?true:false