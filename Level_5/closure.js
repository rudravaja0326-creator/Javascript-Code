function outer(){
    var name = 'outer function';
    // console.log(age);
    function inner(){
        console.log('inner function');
        console.log(name);
         let age = 19;
        //  console.log(inner2example);
    }
    function inner2(){
        inner2example = 'inner function 2';
        console.log('inner function 2');
        console.log(name);
        // console.log(`the age is ${age}`);
    }
    inner();    
    inner2();
}
outer();
