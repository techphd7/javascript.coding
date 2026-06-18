const user={
    username:"prabhanshu",
    loginCount:8,
    signedIn:true,


    getUserDetails:function(){
        // console.log("got user details from database");
        // console.log(this);
    //    console.log(`username:${this.username}`);
       
       
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function details(username,loginCount,IsUserLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.IsUserLoggedIn=IsUserLoggedIn;
}
const user1=new details("Prabhanshu",2,true);
const user2=new details("Himanshu",1,false);

console.log(user1);
console.log(user2);
