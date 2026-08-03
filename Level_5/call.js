// // //The call() method is one of the most important function methods in JavaScript. It allows you to invoke (execute) a function immediately while explicitly setting the value of this.


// // const person1 = {
// //   name: "John"
// // };

// // const person2 = {
// //   name: "David"
// // };

// // function greet() {
// //   console.log("Hello " + this.name);
// // }
// // greet.call(person1); // Output: Hello John


// // function introduce(age, city) {
// //   console.log(
// //     `I'm ${this.name}, Age ${age}, City ${city}`
// //   );
// // }

// // const user = {
// //   name: "Rudra"
// // };
// // introduce.call(user, 19, "Bhavnagar");




// // let person = {
// //   name: "Rudra",
// //   age: 19,
// //   city: "Bhavnagar",
// //   introduce: function () {
// //     console.log(
// //       `I'm ${this.name}, Age ${this.age}, City ${this.city}`
// //     );
// //   }
// // }

// // let teacher = {
// //   name: "Rudra",
// //   age: 19,
// //   city: "New York"
// // };

// // // person.introduce.call(teacher); // Output: I'm Rudra, Age 19, City New York
// // person.introduce.call(teacher); // Output: I'm Rudra, Age 19, City New York




// // const variable  = {
// //   name: "Rudra",
// //   age: 19,
// //   city: "Bhavnagar",
// // }

// // function name() {
// //   console.log(`My name is ${this.name}, Age ${this.age}, City ${this.city}`);
// // }

// // name.call(variable)



// const person = {
//     name: "John"
// };

// function sayHello() {
//     console.log("Hello " + this.name);
// }

//  const newFunction = sayHello.bind(person);

// newFunction();
