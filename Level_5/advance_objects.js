const obj = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(obj);

console.log('this is an pi value', Math.PI);
const hey = {
    name: "rudra",
    age: 19,
    yo: 58,
    password: function () {
        console.log("this is a password");
    }
}


console.log(hey);

hey.name = "rudra vaja";
console.log(hey.name);

Object.defineProperty(hey, "name", {
    writable: false,
    enumerable: false,
    configurable: true
})

hey.name = "i am rudra";

console.log(hey.name);
console.log(Object.getOwnPropertyDescriptor(hey, 'name'));

Object.defineProperty(hey, "age", {
    writable: true,
    enumerable: true,
    configurable: true
})

for (let [key, value] of Object.entries(hey)) {
    if (typeof value !== "function") { // an value is equal to function (!==).
                console.log(`${key}: ${value}`);
    }
}



