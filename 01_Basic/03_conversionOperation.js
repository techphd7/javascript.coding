/*
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN



// true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/
//***************operation**********************
let value=3
let negativeValue= -value
console.log(negativeValue);

let str1="hello"
let str=" prabhanshu"
let str4=75.75
let str3=str1+str
console.log("string concatenation: " + str3 + " and " + str4);



console.log(8+"2");
console.log(8+8+"2");
console.log("2"+8+8);
console.log("2"+8);
console.log(8+"8"+"2");
console.log(true);
console.log(+true);
console.log(+"");//console.log(+null);//0
console.log(+"1");//1
console.log(+"sjdf");//NaN

//console.log(true+);//error because + is not unary operator for boolean but it is for number
//first it will do 8+8=16 then 16+"2"=162
//first it will do "2"+8="28" then "28"+8="288"
//first it will do "2"+8="28" then "28"+8="288"
//first it will do 8+"8"="88" then "88"+"2"="882"
//in first case it true is converted to 1 then +true will give 1

let count=100;
count++;//post increment
++count;//pre increment
console.log(count);//first it will do count++ then ++count then console.log(count) so it will give 102

let a=10
let b=a++ + ++a + a++ + ++a
//first it will do a++ then ++a then a++ then ++a then it will add all the values and assign to b
//a++ => 10 (then a becomes 11)
//++a => 12 (then a becomes 12)
//a++ => 12 (then a becomes 13)
//++a => 14 (then a becomes 14)
//so b = 10 + 12 + 12 + 14 = 48
console.log(a);//14
console.log(b);//48





