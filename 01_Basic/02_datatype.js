"use strict"//treat all code in new version

//alert(3+3)//because this is use in browser not in node.js

console.log("sum :",3+3);
//data types in js
//1.Primitives 2.Non-Primitives
//1.Primitives->string,number,bigint,boolean,undefined,null,symbol


let name="rakesh";//string
let age=35//number
let accountNO=15644656515689486565556n//bigINt
let ifrunning=true//boolean
let average=5.5//float
let find;//undefined
let box=null;//null
//symbol ->unique

console.log([name,age,accountNO,ifrunning,average,find,box,]);
 console.log(typeof[name,age,accountNO,ifrunning,average,find,box,]);//object
 console.log("rakesh type :" ,typeof name);//string
 console.log(typeof null);//object
 console.log(typeof undefined);//undefined


 //2.Non-Primitives->object,array,function
//object->key value pair
//array->collection of similar or different data types
//function->block of code which perform a specific task
//data types in js are dynamic means we can change the data type of variable at runtime
//datatype of object and array is object ,function is function
 const cricketer={
    name:"virat",
    age:35,
    country:"india",
    isplaying:true
 }
 console.log("object");
 console.log(cricketer);//object

 let arr=[1,2,3,4,5];
 
 console.log("array");//object
 console.log(arr);

 const addtion=function add(a,b){
    return a+b;
 }
 console.log("function");
 console.log(addtion(5,3));
 
 
 
 

