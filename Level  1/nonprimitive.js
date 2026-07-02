//Reference(Non primitive Data Type)

//Arry , Objects  , Functions


let ArrayExample = ["Rudra" , "Javascript"];
//Array But Type Is Object When use typeof keyword.

let ObjectExample = {Name:"Rudra",Age:19};//Object

let functionExample = function(){
    console.log("Hello World");
}//Function

console.log(typeof ObjectExample,ArrayExample);
console.log(typeof ObjectExample,ObjectExample);
console.log(typeof functionExample,functionExample);
let arr = [1, 2, 3];

console.log(Array.isArray(functionExample));//return true or flase , when that perticuler data type not match.
