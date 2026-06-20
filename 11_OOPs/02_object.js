function mutiplyBy5(num){
    return num*5
}

mutiplyBy5.power=2
console.log(mutiplyBy5);
console.log(mutiplyBy5(5));

console.log(mutiplyBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;//jisne bhi bulaya hai uska kaam karo
}

createUser.prototype.printme=function(){
    console.log(`the price :${this.score}`);
    
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printme()