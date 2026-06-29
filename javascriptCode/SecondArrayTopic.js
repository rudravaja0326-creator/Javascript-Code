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




