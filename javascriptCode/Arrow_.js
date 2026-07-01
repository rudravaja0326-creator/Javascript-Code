// const arrow = (n1,n2)=>{
//         return n1+n2;
// }//when use {} braces use return keyword.


//An Arrow Function is a shorter and cleaner way to write functions in JavaScript.


const arrow = (n1,n2)=>(n1+n2);
arrow(2, 5);

// const obj = {
//   name: "Rudra",
//   age: 19,
//   meth: function (name1, age1) {
//     console.log(`My name is ${name1} and my age is ${age1}`);
//   },
// };

// obj.meth("Rudra", 19);

const obj = {
  name: "Rudra",
  age: 19,
  meth: () => {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

obj.meth();




