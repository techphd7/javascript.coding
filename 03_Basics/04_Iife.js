(function database(){//named iife
    console.log(`DB CONNECTED`);
    
})();//iife()()//global scope ke pollution ko hatane ke l;iye iife ka use kiye hai
//; semicolon is used to close the first function if not done then second function will not run give error
((name)=>{//unnamed iife
    console.log(`${name},you are to DB`);
    
})("prabhanshu");