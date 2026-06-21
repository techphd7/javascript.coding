const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(Math.PI);//3.14->constant
//console.log(descriptor);

//const tool=Object.create(null)

const tool={
    name:'trimmer',
    price:5000,
    isAvailable:true,
    cutting:function (){
     console.log("cutting started");

    }
}

//console.log(Object.getOwnPropertyDescriptor(tool,"name"));
Object.defineProperty(tool,'name',{
    writable:false,
    enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(tool,"name"));
//tool.name="rohit"
//console.log(tool.name);//trimmer now not modifed


for(let [key,value] of Object.entries(tool)){
    if(typeof value!='function'){
        
      console.log(`${key}:${value}`);  
    }
}