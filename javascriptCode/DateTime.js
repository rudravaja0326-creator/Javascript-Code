var date = new Date();

console.log(date); //Type is object

console.log(typeof Date()); //Type is string

// if you define date without making object when their datatype was string ,
// when using new keyword make object of date then that consider as object.

console.log(Date());

var datefuncTion = new Date("2026-06-26");
console.log(datefuncTion.toLocaleString());

let functionOfDate = new Date();
console.log(functionOfDate.getDate());
console.log(functionOfDate.getFullYear());
console.log(functionOfDate.toString());
console.log(functionOfDate.getTimezoneOffset());
console.log(functionOfDate.getUTCDate());
console.log(functionOfDate.getDate());
console.log(functionOfDate.getMilliseconds());
console.log(functionOfDate.toDateString());
console.log(functionOfDate.toLocaleDateString());
console.log(functionOfDate.toLocaleString());
console.log(functionOfDate.toISOString());
console.log(functionOfDate.getMonth() + 1);
console.log(functionOfDate.getUTCMonth() + 1);
