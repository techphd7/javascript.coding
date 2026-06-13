// for of loop array specific loop
// ["","",""]
// [{},{},{}]

const arr=[1,15,6,4,7,8];

for (const i of arr) {
   //console.log(i);
    
    
}

const greeting="hello world!";

for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
    
}

//maps ->

const map=new Map()

map.set("I","india")
map.set("F","france")
map.set("A","america")

//console.log(map);

for (const [key,value] of map) {
    //console.log(`${key} -> ${value}`);
    
}//map is not iterable

// const myObject={
//     "g1":"ff",
//     "g2":"kgf",
//     "g3":"pubg"
// }

// for (const element of myObject) {
//    // console.log(element);// object are not iterrated like this
    
// }

//for in loop
const obj={
    js:"javascript",
    cpp:"c++",
    cSharp:"c#",
    rb:"ruby"

}

for (const key in obj) {
    
    
   //console.log(`${key} -> ${obj[key]}`);
   
    
    
}

let arr15=[65,556,465,455]

for (const key in arr15) {
    if (!Object.hasOwn(arr15, key)) continue;
    
    const element = arr15[key];
    //console.log(element);
    
    
}
 
//for each

const coding=["js","py","java","cpp"]
coding.forEach(function(i){
    //console.log(i);
    
})//call back fuction

coding.forEach((item)=>{
//console.log(item);

})

function language(i){
   // console.log(i);
    
}
//coding.forEach(lang);

coding.forEach((item,index,arr)=>{
//console.log(item,index,arr);

})

const codingInfo=[{
    codeLanguage:"java",
    langFile:"java"

},{codeLanguage:"javascript",
    langFile:"js"

},{codeLanguage:"python",
    langFile:"py"

},{codeLanguage:"c++",
    langFile:"cpp"

}]

codingInfo.forEach((item)=>{
    //console.log(item.langFile);
    
})

