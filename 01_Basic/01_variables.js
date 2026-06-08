const accountId=15;

let accountEmail="dkhdgas@gmail.com";//local scope

var accountPassword="admin";//global scope

accountCity="Raipur";//don't use it like this  but it can happen also

let accountState;//undefined if not defined

// don't use var because it is global so anyone can not use same varaible name again.
//accountId=0323;//not allowed

accountEmail="prabhanshupawar@gmail.com";//allowed
accountPassword="12345";
accountCity="pune";//allowed


console.log([accountId,accountEmail,accountPassword,accountCity,accountState]);//[] is tree where all variable or some variable can write in console.log()
