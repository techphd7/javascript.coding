class user{
    constructor(username){
        this.username=username;
    }

    login(){
console.log(`${this.username},you are logged in`);

    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`a new course is added by ${this.username}`);
        
    }
}

const user1= new teacher("himanshu","him@gmail.com","dsjabhkj")

user1.addCourse();
user1.login()

const user2=new teacher("prabhanhu")
user2.login()


console.log(user1 instanceof teacher)
console.log(user1 instanceof user)