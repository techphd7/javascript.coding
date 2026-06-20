let myName="prabhanshu";

//console.log(myName.length);


let myHeroes=["thor","hulk","spiderman"]

let heroPower={
    thor:"thunder",
    hulk:"gamma",
    spiderman:"spider",

    getSpriderman:function(){
        console.log(`spider power id ${this.spiderman}`);
        
    }
}
Object.prototype.prabhanshu=function(){
    console.log(`prabhanshu is present in all object`);
    
}

Array.prototype.heyPrabhanshu=function(){
    console.log(`hello prabhanshu is present in Array`);
    
}
//heroPower.prabhanshu();
//myHeroes.prabhanshu();

//myHeroes.heyPrabhanshu();



//prototypal inheritence
const vehicle={
    car:true,
    bike:true,
    cycle:true,
    aeroplane:true
}
const bike={
    twoTyre:true,
    __proto__:vehicle
}

const car={
    fourTyre:true,
    __proto__:vehicle
}
const aeroplane={
    fly:true,
    __proto__:vehicle
}

const pilot={
    drive:"aeroplance",
    flyingExp:"25 year"
}


aeroplane.__proto__=pilot
//modern syntex

Object.setPrototypeOf(aeroplane,pilot)


let user="PhLearner   "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);

}
user.truelength();

"Prabhanshu".truelength()