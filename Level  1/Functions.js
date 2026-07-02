// Example 1: Function without return

function FirstExample(n1, n2) {
    console.log(n1 + n2); // Prints 7
}

const res = FirstExample(5, 2); // Calls function and executes it
console.log(res); // undefined (because function does not return anything)


// Example 2: Function with return

function secondExample(number1, number2) {
    // console.log("Heyyyyy"); // Prints "Heyyyyy"
    return number1 + number2; // Returns 52
}

const resu = secondExample(45, 7); // Calls function and stores returned value (52) in resu
console.log(resu); // Prints 52



function consolee(username){
    return `${username} this is username`;
}

console.log(consolee("Vaja"));


let print = consolee("Rudra");
console.log(print);


function shopingcart(...n1){//rest oprator make an array.
        return n1;
}

console.log(shopingcart(4,5,8,6,9));

function shopingcart(n1,n2,...n3){
        return n3;
}

console.log(shopingcart(4,5,8,6,9));

// const user = {
//     username: "hitesh",
//     price: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  //direct created object.
  username: "Rudra",
  price: 500,
});

const newarray = [1,8,6,9,6];

function arrayfunction(arraypara){
     return arraypara[1];
}

console.log(arrayfunction(newarray));





