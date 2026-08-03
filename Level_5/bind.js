const person = {
    name: "John"
};

function greet(age) {
    console.log(this.name + ", Age: " + age);
}

greet.apply(person,[25]); // Output: John
const newFunction = greet.bind(person,19);
newFunction();//bind() does not call the function immediately.
// It returns a new function that you can call later.