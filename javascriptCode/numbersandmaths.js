var exampleofNumber = Number(200); //Output 200

console.log(exampleofNumber);

var exampleofNumber = new Number(200); //Output [Number 200]

console.log(exampleofNumber);

console.log(exampleofNumber.toString()); //Convert into string

console.log(exampleofNumber.toString().length); //count length of string

console.log(exampleofNumber.toFixed(2));

const perosicion = 1478.4545;

console.log(perosicion.toPrecision(5)); //Take an roundfigure value given number of count

const CountMoney = 1000000;

console.log(CountMoney.toLocaleString("en-in")); //Output 10,00,000 ('en-in')use for indian counting mathod

//===================================== MATHS FUNCTION =======================================//

const MathFun = -12.4589;

console.log(MathFun, Math.abs(MathFun));
console.log(Math.round(MathFun));
console.log(Math.floor(MathFun));
console.log(Math.ceil(MathFun));
console.log("Min Value is:",Math.min(4, 5, 8, 6, 99));
console.log("Max Value is:",Math.max(4, 5, 8, 6, 99));
