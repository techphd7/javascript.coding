//date information
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//why date is used ,when did it started ,how to use date in js
//date is used to work with date and time in js
//it started in 1995 by Brendan Eich
//to use date in js we can create a new date object using the Date() constructor
//1 january 1970 is calculated as the base date and its united in milliseconds
let Date1= new Date();//object of dateb 
console.log(Date1);
let Date2= new Date();
console.log(Date2.toDateString());
console.log(Date2.toTimeString());
console.log(Date2.toLocaleDateString());
console.log(typeof Date2);
let mydate= new Date(2023,5,10,12,30,0);//year month date hours minutes seconds
console.log(mydate);

console.log(`Date ${Date.now()}`);
let date5=new Date();
console.log(`Year ${date5.getFullYear()}`);
console.log(`Month ${date5.getMonth()+1}`);
console.log(`Date ${date5.getDate()}`);
console.log(`Hours ${date5.getHours()}`);
console.log(`Minutes ${date5.getMinutes()}`);
console.log(`Seconds ${date5.getSeconds()}`);

console.log(`Day ${date5.toLocaleString('default',{weekday:"long",timeZone:"UTC"})}`);
