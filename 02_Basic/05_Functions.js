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