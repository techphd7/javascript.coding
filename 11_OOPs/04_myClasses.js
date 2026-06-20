//ES 6
 class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
    this.password=password;    }
 

 encryptPassword(){
    return `${this.password}abc`
 };

 changeUsername(){
return`${this.username.toUpperCase()}`
 }
}


 const person=new user("himanshu","him@gmail.com","123")

 console.log(person.encryptPassword());
 console.log(person.changeUsername());
 