function add(num1,num2){
    //console.log(`${num1} +${num2} =${num1+num2}`);
    
}

add(5,10);

function subtract(num1,num2){
    return num1-num2;
}

const result=subtract(10,5);
//console.log("subtract result:", result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        
    }
return `Welcome back, ${username}!`
}

//const message=loginUserMessage("Prabhanshu");
const message=loginUserMessage();//undefined because we are not passing any argument to the function, so username is undefined
console.log(message);

function calculateCartPrice(value1,value2,...num1){
return num1; 
}

console.log(calculateCartPrice(200,400,500,700,800,900));//value1=200,value2=400and rest is array of num1

const user={
    username:"prabhanshu",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price${anyObject.price}`);
    
}
handleObject({username:"prabhanshu",
    price:199})
//handleObject(user);

const newarray=[200,400,600,100]

function getArray(thisArray){
return thisArray[1];
}

//console.log(getArray(newarray));//200->0,1->400
console.log(getArray([1005,40,80,64]))