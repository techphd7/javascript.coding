const name="rakesh";
const age=26;
console.log(`my name is ${name} and my age is ${age}`);//template literals  

const movie=new String("avengers");
console.log(movie[0]);//avengers[0] also works
console.log(movie.length);//8
console.log(movie.toUpperCase());//AVENGERS
console.log(movie.toLowerCase());//avengers
console.log(movie.__proto__);//String {length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}   //functions are present in prototype of string
console.log(movie.charAt(2));//v
console.log(movie.indexOf("e"));//2
console.log(movie.lastIndexOf("e"));//5
console.log(movie.slice(0,3));//ave
console.log(movie.substring(0,3));//ave
console.log(movie.substr(0,3));//ave
console.log(movie.replace("a","A"));//Avengers
console.log(movie.replaceAll("e","E"));//avEngErs
console.log(movie.split(""));//['a', 'v', 'e', 'n', 'g', 'e', 'r', 's']
console.log(movie.split("e"));//['av', 'ng', 'rs']//split by e
console.log(movie.trim());//avengers//trim removes whitespace from both ends of a string
console.log(movie.trimStart());//avengers
console.log(movie.trimEnd());//avengers
console.log(movie.includes("ven"));//true
console.log(movie.startsWith("ave"));//true
console.log(movie.endsWith("ers"));//true

