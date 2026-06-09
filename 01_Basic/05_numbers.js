const num = 5;
console.log(num);//5

const num2= new Number(10);//object
console.log(num2);//[Number: 10]
console.log(num2.toString().length);//2
console.log(num2.toFixed(2));//10.00

const num3=1245.6546546
console.log(num3.toFixed(2));//1245.65
console.log(num3.toPrecision(4));//1246

const crore=10000000;
console.log(crore.toLocaleString('en-IN'));//1,00,00,000
console.log(crore.toLocaleString());//10,000,000

//******************Maths******************** */

console.log(Math);//Object [Math] {}
console.log(Math.PI);//3.141592653589793
console.log(Math.abs(-5));//5
console.log(Math.round(4.5));//5
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4
console.log(Math.sqrt(16));//4
console.log(Math.pow(2,3));//8
console.log(Math.max(1,2,3,4,5));//5
console.log(Math.min(1,2,3,4,5));//1
console.log(Math.random());//0.8810287236984326
console.log((Math.random()*10)+1);//8.810287236984326
console.log(Math.random()*100);//76.34290280827335
console.log(Math.floor(Math.random()*100));//12

const min=10;
const max=20;
const randomNum=Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNum);//15//10-20
