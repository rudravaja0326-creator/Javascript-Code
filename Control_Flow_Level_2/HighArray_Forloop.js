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



let map = new Map();
map.set("In","India");
map.set("Af","Africa");
map.set("Can","Caneda");

console.log(map);


for (const [key,value] of map) {
   console.log(`Key :-${key} Value :- ${value}`); 
}
//For of loop iterates an values , used on [Arrays, Strings, Maps, Sets].

//////////////////////////////////// For in ///////////////////////////////////

const obj = {
    name:"Rudra",
    surname:"Vaja",
    course:"B.Tech",
    CollegeName:"Gmiu",
    id:1546789
};


for (const value in obj) {
             console.log(value);
             console.log(obj[value]);    
}














