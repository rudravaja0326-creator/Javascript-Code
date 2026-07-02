const marvel = ["captain america","thor","Hulk","Ironman"];

const dc = ["Batman","Superman","Flash","Wonder Women"];


// marvel.push(dc);//Add element and change original array

// console.log(marvel);

// console.log(marvel[4][1]);

let allhero = marvel.concat(dc);//Join arrays and create a new array

console.log(allhero);


// let SpreadOprator = [...marvel,...dc];/The spread operator (...) expands an array, object, or iterable into individual elements.
// console.log("This is spread oprator",SpreadOprator);


const multiArray = [
  1,
  2,
  [3, 4, 5, 55, "rudra", 4, 6, 78, 9, [8, ["rudra", "vaja"], [4, 8, 7, 6]]],
  56,
  12,
  78,
];


console.log(multiArray.flat(Infinity));//creates a new array by flattening (removing) nested arrays into a single array.

const arr = [1, 2, 3];

console.log(Array.isArray(arr)); //Checks whether a value is an array and returns true or false.

console.log(Array.from("rudravaja")); //Output ['r', 'u', 'd', 'r', 'a', 'v', 'a', 'j', 'a'].

let Array_new = 100;
let Array_new1 = 200;
let Array_new2 = 300;

console.log(Array.of(Array_new, Array_new1, Array_new2));//make array of Differant elements.
