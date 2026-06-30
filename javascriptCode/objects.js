//Objects


const id = Symbol("Key1");//"Key1" → Description (label) of the Symbol.

const newobj = new Object();//SingleTone object.





let Obj = {//objects literls
    name:"Rudra Vaja",
    "Full Name":"Rudra Vaja A.",
    [id]:126545,
    email:"Rudavaja776@gmail.com",
    Loggedin:false,
    Loggedout:true,
};

console.log(Obj.name);//Work but not recomeded.
console.log(Obj["name"]);//Modern method in objects. 
console.log(Obj["Loggedin"]);
console.log(Obj["Full Name"]);


Obj.name = "vaja Rudra A."
console.log(Obj["name"]);
// Object.freeze(Obj);//Freeze Method cant not change an obj value anymore.
Obj.name = "Rudra A."//cant not applied.
console.log(Obj["name"]);
console.log(Obj);


const person = {
  name: "Rudra",
  greeting: "Hello!"
};

console.log(person.greeting);

Obj.greeting = function(){
    console.log("Hey JS");
}

Obj.greetingtwo = function(){
    console.log(`This is second Greeting:${this.name}`);
}

console.log(Obj.greeting());//value only.
console.log(Obj.greetingtwo());//value inside text string.


console.log(Obj);
