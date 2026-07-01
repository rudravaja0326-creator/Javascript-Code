function globle() {
  const userName = "Rudra";
  console.log("Globle Scope Function:", userName);
  function Child() {
    const Local = "Inner";
    console.log(userName);
    console.log("Local Scope:", Local);
    console.log(Local);
  }

  // console.log(Local);//cant be use property.
  Child(); //you can use whole function itself.

  console.log("Globle Scope:", userName);
}

globle();

//==================================== Differ Functions Variablescop =======================//
console.log(access(8));
function access(n) {
  return n + 1;
}

// console.log(local(5)); //you can not use that kind of syntax when hold function in variable.
const local = function notaccess(n2) {
  return n2 + 9;
};

// 1. Global Scope

let name = "Rudra"; // Global variable

function showName() {
  console.log(name);
}

showName(); // Rudra
console.log(name); // Rudra

// 2. Function Scope

function myFunction() {
  var age = 20;
  console.log(age);
}

myFunction(); // 20
// console.log(age); // Error: age is not defined

// 3. Block Scope
{
  let city = "Bhavnagar";
  const country = "India";

  console.log(city); // Bhavnagar
  console.log(country); // India
}

// console.log(city); // Error
// console.log(country); // Error

// 4. Local Scope

function test() {
  let message = "Hello";
  console.log(message);
}

test(); // Hello
// console.log(message); // Error
