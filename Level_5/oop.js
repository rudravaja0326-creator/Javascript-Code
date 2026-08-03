function user(username, loggedin, loggedout){
    this.username = username;
    this.loggedin = loggedin;
    this.loggedout = loggedout;
    // console.log(this.username,loggedin,loggedout);
    // console.log(username);
        return this;
}
// console.log(this);

const printvalue = new user("rudra",19,true);
const printvalue2 = new user('vaja',19,false);
console.log(printvalue);
console.log(printvalue2);

function call(name){
    return name*5;
}
call(5);
console.log(call(5));
console.log(call.prototype);

function back(username,price){
    this.username = username;
    this.price = price;
}
back.prototype.callme = function(){
    console.log(`this is price of coffe ${this.price}`);
}
back.prototype.secondfunction = function(){
    console.log(`this is id ${this.username}`);
}
Object.prototype.thirdfunction = function(){
    console.log(`this is third function`);
}


const chai = new back("rudra",500);
const tea =  new back("rudra",5000);
console.log(chai);
chai.callme();
chai.secondfunction();
chai.thirdfunction();


