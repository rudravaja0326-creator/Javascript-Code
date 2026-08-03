// class example{
//     name = "rudra vaja";
//     age = 19;
//     yo = 58;
//     password(){
//         console.log("this is a password");
//     }
//             constructor(name , password){
//                 this.name = name;
//                 this.password = password;
//                 console.log(name,password);
//             }
// }

// const object = new example('rudra',75129);



// class Example {
//     constructor() {
//         this._name = "Rudra Vaja";
//         this._age = 19;
//         this._yo = 58;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         this._age = value;
//     }

//     get yo() {
//         return this._yo;
//     }

//     set yo(value) {
//         this._yo = value;
//     }

//     password() {
//         console.log("This is a password");
//     }
// }

// const obj = new Example();

// console.log(obj.name);

// obj.name = "Rudra";

// console.log(obj.name);

//bank example




// class BankAccount {
//     constructor() {
//         this._balance = 1000;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount) {
//         if (amount >= 0) {
//             this._balance = amount;
//         } else {
//             console.log("Balance cannot be negative.");
//         }
//     }
// }

// const account = new BankAccount();

// console.log(account.balance); // Getter

// account.balance = 5000; // Setter

// console.log(account.balance);




class mybank{
    constructor(){
        this.balance = 2000;
}

get seter(){
        return "********";
}

set seter(value){
    if(value >= 0){
        this.balance = value;
        console.log(`your balance is ${this.balance}`);
        console.log('your balance is positive');
    }
}}
const bankdetails = new mybank();


console.log(bankdetails.balance);

bankdetails.balance = 9000;

console.log(bankdetails.seter);//getter

console.log(bankdetails.seter = 5000);//setter

console.log(bankdetails.balance);