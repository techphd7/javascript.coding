//filter

const num=[1,32,3,54,5,6,7,8,9]

const getnum=num.filter((num)=> num>6)//imp filter use
//console.log(getnum);//paranthesis m return nhi karna padta

//object wale curly bracket m return likhna padta hai

const getnumber=num.filter((num)=>{
    return num<7;
     
})
//console.log(getnumber);
//instead of foreach we also use map

const plus10=num.map((num)=>(num+10))
//console.log(plus10);

//chaining
const prices=[20,30,40,50,60]
const newnums=prices
.map((i)=>i*10)
.map((j)=>j-1)
.filter((k)=>(300))
//console.log(newnums);


//reduce

const arraysNumbers=[1,5,6,7]

const i=0;
const sum=arraysNumbers.reduce((ac,cv)=>(ac+cv+i));
//console.log(sum);

const myarr=[4,5,6,8,7]

const findSum=myarr.reduce(function (acc,cur){
    //console.log(`acumulator ${acc} Current value ${cur}`);
    return acc+cur},0)
   // console.log(findSum);
    
    const shoppingCart=[{item:"mobile",price:20000},
        {item:"mobile",price:20000},
        {item:"tv",price:30000},
        {item:"laptop",price:120000},
        {item:"iron",price:200},
        {item:"fridge",price:20000}]

   let ij=0;
        const totalprice=shoppingCart.reduce((total,product)=>{return total+product.price},0);

    console.log("Total price :",totalprice);

