//fetch("https://www.programmer.com").then()-> resolve ->callback.catch.finally()
//promise is object which is consumed ,fetch the url ,then for reponse ,error in catch,finally run always biut exception in system .exit

const promiseOne=new Promise(function(resolve,reject){
    //do an async task
   // Db Call,crytpography,network call

    setTimeout(function(){
        resolve();
        console.log('async task is complete');
        
    },1000)
}) 

promiseOne.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('async 2 resolved');
    
})


const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
        resolve({username:"prabhanshu",email:"prabhanshu@gmail.com"});
},1000)

})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"himanshu",age:25});
        }else{
            reject('Error: 404 not found')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((myUser)=>{  //channing for database access
console.log(myUser);

})
.catch((err)=>{
console.log(err);

})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
    
})



const promiseFive=new Promise(function(resolve,reject){

setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sachin",age:23});
        }else{
            reject('Error: Db not  found')
        }
    },1000)
})

//same as then we can use async and await

async function consumePromiseFive(){
   try{const Response =await promiseFive
   console.log(Response);}
   catch(error){
    console.log(error);
    
   };
   
   
   
}

consumePromiseFive();


// async function getAllUser() {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
   
   
//         const data =await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("error:",error);
        
//     };
    
    
// }
// getAllUser();



//using .then .catch .finally


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))