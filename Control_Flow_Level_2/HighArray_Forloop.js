// //The for...of loop is used to iterate over the values of an iterable object such as:

// // Arrays
// // Strings
// // Maps
// // Sets

// // const Loop = "My name is rudra Vaja";

// // for(const print of Loop){
// // console.log(print);
// // }


// // const array = ["Hello","Insta","Whatsapp","Snap"];

// // for(const num of array){
// //     console.log(num);
// // }



// // let map = new Map();
// // map.set("In","India");
// // map.set("Af","Africa");
// // map.set("Can","Caneda");

// // console.log(map);


// // for (const [key,value] of map) {
// //    console.log(`Key :- ${key} Value :- ${value}`); 
// // }
// // //For of loop iterates an values , used on [Arrays, Strings, Maps, Sets].

// // //////////////////////////////////// For in ///////////////////////////////////

// // const obj = {
// //     name:"Rudra",
// //     surname:"Vaja",
// //     course:"B.Tech",
// //     CollegeName:"Gmiu",
// //     id:1546789
// // };


// // for (const value in obj) {
// //              console.log(value);
// //              console.log(obj[value]);    
// // }

// // // The for...in loop is used to iterate over the keys (property names) of an object.



// // const Array = ["Yo",1,2,3,4,6,7,9];

// // Array.forEach( value=> {
// //     console.log(value);
// // });


// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printitem(items, ind , arr){
//     console.log(items, ind , arr);
//     console.log(ind)
// }


// coding.forEach(printitem);



// // coding.forEach((items, ind , arr)=>{console.log(items,ind,arr)});


// // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ For each loop }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// // forEach() Method
// // The forEach() method executes a function once
// // for each element in an array.
// // It is used to perform an action on every array item.


// const AB = [{
//     nameOFStudent:"Rudra",
//     id:45
// },
// {
//     nameOFStudent:"sam",
//     id:46
// },
// {
//     nameOFStudent:"David",
//     id:47
// },
// {
//     nameOFStudent:"Parker",
//     id:48
// },
// {
//     nameOFStudent:"Peter",
//     id:49
// },
// ];

// console.log(AB);

// AB.forEach((itemsi)=>{
//     console.log(itemsi.nameOFStudent , itemsi.id);
// });

const objarray = [
  {
    title: "JavaScript Basics",
    genre: "Programming",
    publish: 2023,
    edition: 1
  },
  {
    title: "JavaScript Basics", // Same title
    genre: "Programming",       // Same genre
    publish: 2024,
    edition: 2
  },
  {
    title: "Python Guide",
    genre: "Programming",
    publish: 2022,
    edition: 3
  },
  {
    title: "Marvel Comics",
    genre: "Comics",
    publish: 2021,
    edition: 4
  },
  {
    title: "Marvel Comics", // Same title
    genre: "Comics",        // Same genre
    publish: 2000,
    edition: 5
  }
];

// console.log(objarray);


// let same = objarray.filter((ti)=>{//filter() is used when you want to select only some elements that match a condition.
//     if(ti.genre === "Programming"){
//     console.log(ti.genre);
//     }
// })

// same = objarray.filter(gi=>gi.publish >= 2022)
// console.log(same);

const objarray1 = [1,2,3,4,5,6];

const maper = objarray.map((value)=>{//map() is used when you want to modify/transform every element of an array and create a new array.
    console.log(value);
    // return value+index;
});


// const doubled = numbers.map(num => num * 2);

// console.log(doubled);
// console.log(numbers);


//reduce() is an array method that takes all elements of an array and combines them into a single value.

const numbers = [1, 2, 3, 4];

// let redcueexample = numbers.reduce((accumaltor,current)=>{
//   console.log(`Accumalotor value:${accumaltor} Current value ${current}`);
//           return accumaltor + current;
// },
// 0);

// console.log(redcueexample);
let redcueexample1 = numbers.reduce((accu1 , curr1)=>(accu1+curr1));
console.log(redcueexample1);




const day = 5;


switch (day) {
  case 1:
    console.log("Monday");
        break;
   case 2:
  console.log("Tuesday");
  break;
  case 3:
    console.log("Thursday");
   break;
   case 5:
    console.log("Friday");
    break;
  default:
    console.log("Moj karo");
    break;
}













