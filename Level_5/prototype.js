// A prototype in JavaScript is an object from which another object inherits properties and methods.

// Think of it like this:

// Prototype = Parent Object

// Child Object → automatically gets access to the parent's properties and methods.

const animal = {
    eat() {
        console.log("Animal is eating");
    }
};

const dog = {
    name: "Tommy"
};

// Set animal as dog's prototype
Object.setPrototypeOf(dog, animal);

console.log(dog.name); // Tommy
dog.eat();             // Animal is eating


