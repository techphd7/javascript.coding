//singleton object=> only one instance of the object can be created
//object literal syntax
const mysym=Symbol("*");
const Jsuser={
    name: "Prabhanshu",
    "full name":"Prabhanshu Pawar",
    age:28,
    email:"prabhanshu@example.com",
    location:"India",
    isLoggedIn:true,
    "symbol":Symbol("$"),
    [mysym]:"Hello",
    lastLoginDays:["Monday", "Tuesday", "Wednesday"],
}
console.log(Jsuser.name);
console.log(Jsuser["email"]);//both are correct ways to access properties of an object
console.log(Jsuser.email)
//Console.log(Jsuser.full name);//error
console.log(Jsuser["full name"]);//correct way to access property with space in name
console.log(typeof Jsuser["symbol"]);
console.log(Jsuser["symbol"]);
console.log(Jsuser[mysym]);//undefined because mysym is not a property of Jsuser, it's a variable holding a string value "Hello"




const mySymbol=Symbol("Key1");
console.log(mySymbol);

Jsuser.age=29;//updating existing property
//Object.freeze(Jsuser);//freezing the object to prevent further modifications
Jsuser.age=30;
console.log(Jsuser);

Jsuser.greeting=function(){
console.log("Hello, welcome to JavaScript!");

}
Jsuser.greetingTwo=function(){
console.log(`Hello ${this.name}, welcome to JavaScript!`);

}
console.log(Jsuser.greetingTwo());