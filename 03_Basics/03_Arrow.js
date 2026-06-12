const user={
    username:"prabhanshu",
    price:333,

    welcomeMessage:function(){
        console.log(`${this.username},welocme to website`);
        console.log(this);//current context
        
    }

}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

//console.log(this);//node->empty//in browser->window
// function chips(){
//     let username="prabhanshu"
//     console.log(this.username);//undefined
    
// }
// chips();

const chai= ()=>{
    let user="pankaj"
    console.log(this);
    
}
// chai();

// const add=(num1,num2)=>{
//     return num1+num2;

// }
//console.log(add(1,2));


//implicite return
const sub=(num1,num2)=>(num1-num2)//{} use hoga tho return likhna padega
//const sub=(num1,num2)=>({username:"lalu"})//object return karne ke liye parantheis m karna padta hai

console.log(sub(4,2));

const myarray=[1,4,5,2,];
//myarray.forEach(()=>{})//or (()={}) or(function (){})