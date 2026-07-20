
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



function firstfunction(callback) {
    console.log("This is firstfunction");
    callback("rudra", 789456);
}

function secondfunction(name, id) {
    console.log(name, id);
    console.log("second function");
}

firstfunction(secondfunction);

1

1

