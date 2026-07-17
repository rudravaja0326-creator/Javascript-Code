
function informationofcompany(callback){
    name = "rudra";
    id = 874562;
    console.log("information");
    callback(name,id);
};


function called(name,id){
    console.log(`this is an name ${name} this is an id ${id}`);
    console.log("called function");
}

informationofcompany(called);


