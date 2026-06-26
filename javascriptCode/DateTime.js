var date = new Date();

console.log(date);//Type is object

console.log(typeof Date());//Type is string


// if you define date without making object when their datatype was string ,
// when using new keyword make object of date then that consider as object.

console.log(Date());


var datefuncTion = new Date("2026-06-26");
console.log(datefuncTion.toLocaleString());

console.log(String.fromCharCode("h"));
