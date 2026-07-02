const obj1 = {1:"H",2:"i"};
const obj2 = {2:"Y",3:"O"};


console.log(obj1,obj2);

const obj3 = {...obj1,...obj2};//modern way

console.log(obj3);

let result = Object.assign({},obj1,obj2);//old way
// Object.assign(target, source1, source2, ...)
console.log(result);

console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.keys(obj2));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty('1'));//old method.

//that hasownproperty check only key value it cant be check value in object.
console.log(Object.hasOwn(obj1,"1"));//check key have in object or not, modern method.
console.log('hello' === "hello");


const course = {
    studentName:"Rudra",
    id:"145sa",
    InstructorName:"Hitesh",
    Fees:999,
}

console.log(course);

console.log(course.InstructorName);//directfetch data.


const {InstructorName} = course;//data destructure.
console.log(InstructorName);

const {InstructorName:InNAME} = course;//data destructure.
console.log("",InNAME);
