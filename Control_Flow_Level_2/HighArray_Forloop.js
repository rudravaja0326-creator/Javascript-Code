//The for...of loop is used to iterate over the values of an iterable object such as:

// Arrays
// Strings
// Maps
// Sets

// const Loop = "My name is rudra Vaja";

// for(const print of Loop){
// console.log(print);
// }


// const array = ["Hello","Insta","Whatsapp","Snap"];

// for(const num of array){
//     console.log(num);
// }



// let map = new Map();
// map.set("In","India");
// map.set("Af","Africa");
// map.set("Can","Caneda");

// console.log(map);


// for (const [key,value] of map) {
//    console.log(`Key :- ${key} Value :- ${value}`); 
// }
// //For of loop iterates an values , used on [Arrays, Strings, Maps, Sets].

// //////////////////////////////////// For in ///////////////////////////////////

// const obj = {
//     name:"Rudra",
//     surname:"Vaja",
//     course:"B.Tech",
//     CollegeName:"Gmiu",
//     id:1546789
// };


// for (const value in obj) {
//              console.log(value);
//              console.log(obj[value]);    
// }

// // The for...in loop is used to iterate over the keys (property names) of an object.



// const Array = ["Yo",1,2,3,4,6,7,9];

// Array.forEach( value=> {
//     console.log(value);
// });


const coding = ["js", "ruby", "java", "python", "cpp"]

function printitem(items, ind , arr){
    console.log(items, ind , arr);
    console.log(ind)
}


coding.forEach(printitem);



// coding.forEach((items, ind , arr)=>{console.log(items,ind,arr)});


// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ For each loop }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// forEach() Method
// The forEach() method executes a function once
// for each element in an array.
// It is used to perform an action on every array item.


const AB = [{
    nameOFStudent:"Rudra",
    id:45
},
{
    nameOFStudent:"sam",
    id:46
},
{
    nameOFStudent:"David",
    id:47
},
{
    nameOFStudent:"Parker",
    id:48
},
{
    nameOFStudent:"Peter",
    id:49
},
];

console.log(AB);

AB.forEach((itemsi)=>{
    console.log(itemsi.nameOFStudent , itemsi.id);
});

