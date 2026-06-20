class user{
    constructor(username){
        this.username=username;
    }

    login(){
console.log(`${this.username},you are logged in`);

    }

        static  createId(){
        return `123`
    }
}

const user1= new user("himanshu")
//console.log(user1.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}
const iphone=new teacher("prabhnshu","prab@klaj.com")
// console.log(iphone.createId());//not accessible
iphone.login()
