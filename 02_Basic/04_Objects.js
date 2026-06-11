const tinderUser0=new Object();//singleton object=> only one instance of the object can be created
const tinderuser={};//object literal syntax
tinderuser.name="Prabhanshu";
tinderuser.id="1234@gmail.com"
tinderuser.isLoggedIn=false;
//console.log(tinderuser);

const GmailUser={
    email:"prabhanshu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Prabhanshu",
            lastname:"Pawar",
        }
    }
    
    
}
//console.log(GmailUser.fullname.userfullname);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
//const obj3={obj1,obj2}//object literal syntax to create nested objects
//const obj3=Object.assign({},obj1,obj2);//using Object.assign() to merge two objects into one
const obj3={...obj1,...obj2};//using spread operator to merge two objects into one
console.log(obj3);

const Users=[
    {
        name:"Prabhanshu",
        age:28,
        email:"prabhanshu@gmail.com"
    },{
        name:"John",
        age:30,
        email:"john@gmail.com"
    
    },
    {
        name:"Jane",
        age:25,
        email:"jane@gmail.com"
    },{
        name:"Doe",
        age:35,
        email:"doe@gmail.com"
    }

]

//console.log(Users[1].name);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasOwnProperty('isLoggedIn'));//true

const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Prabhanshu",
}

//course.courseInstructor="John";//updating existing property
const{courseInstructor:ci}=course;//object destructuring to extract property value into a variable
console.log(ci);