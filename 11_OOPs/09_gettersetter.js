  class User{
    #email;
    #password;//#=>private
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
//In modern JavaScript, private properties are defined using the # (hash) symbol
    get email(){
        return this.#email.toUpperCase();
    }
    set email(ID){
        this.#email=ID
    }

    get password(){
          return this.#password.toUpperCase()  
    }
    set password(value){
    this.#password=value//_ underscore is used private properties
    }
  }

  const user1= new User("prabh@gmail.com","sgad123")
  console.log(user1.password);
  console.log(user1.email);
  
  