

if(true){
    let a=10
    const b=29
    var c=23
}//block scope

//console.log(a);//not define
//console.log(b);
//console.log(c);//global scope var ke liye

//in window or browser and node scope are different

function one(){
    const name="Prabhanshu";
    function two(){
        const coding ="javascript";
        console.log(name);
        console.log(coding);
    }
    
    two();
}
one();

