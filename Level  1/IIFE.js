//IIFE (Immediately Invoked Function Expression) is a function that is created and executed immediately.

//Syntax

//()()     First () → Wrap the function (make it an expression).
// Last () → Call the function immediately.

// It is mainly used to create a private scope and prevent global namespace pollution.



(function () {
    console.log("Application Started");
})();



(function (name) {
    console.log("Application Started",name);
})("RUDRA");


(function(){
    console.log("Hey Js");
})();



// No need to call the function separately.
