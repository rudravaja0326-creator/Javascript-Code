const Arry = [0,1,2,3,4];//An array is a special object that stores multiple values in a single variable using index numbers starting from 0.

// console.log(Array.length);//output 5
// console.log(Arry[1]);//Output 1

// const objectname = new Array(4);
// objectname[6]="Rudra"//creates an array with a length of 4 and four empty slots, not four values.
// console.log(objectname[6]);//Output [ <4 empty items> ]
// console.log(objectname.length);//Output will be 4


console.log(Arry.push(9));//Push Element but return updted length of array.
console.log(Arry);


Arry.pop()
console.log(Arry);
const Array1 = [10, 20, 30];

console.log("10 is Here:",Array1.includes(20));//return true or false, if that value have in that array
console.log("index is:",Array1.indexOf(20));//return index number to given element value.

console.log(Array1.pop());//ouput was 30 show that 30 was pop
console.log(Array1);//Output is [10,20]

Arry.unshift(9);//add element in starting position

console.log(Arry);

Arry.shift();//remove element at starting position
console.log(Arry);//output is [0,1,2,3,4]

Arry.shift();
console.log(Arry);

const myArr = [0, 1, 2, 3, 4, 5];


console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1, 2]
console.log("B ", myArr); // B [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3);

console.log("C ", myArr); // C [0, 4, 5]
console.log(myn2); // [1, 2, 3]
console.log(myArr); // [0, 4, 5]



const arr = [1, 2, 3];

console.log(Array.isArray(arr)); //Checks whether a value is an array and returns true or false.

console.log(Array.from("rudravaja")); //Output ['r', 'u', 'd', 'r', 'a', 'v', 'a', 'j', 'a'].

let Array_new = 100;
let Array_new1 = 200;
let Array_new2 = 300;

console.log(Array.of(Array_new, Array_new1, Array_new2));//make array of Differant elements.
