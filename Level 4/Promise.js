const pro2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(pro2);
    let error = false;
    if (!error) {
      resolve({ username: "Rudra", id: 456789 });
      console.log(pro2);
    }
    else {
      reject('have any error');
    }console.log(pro2);
  }, 1000)
});


pro2.then(function (user) {
  console.log(user);//user is treat as resolve parameter.
  console.log("this is first function");
  return user;
}).then(function (secondthen) {
  console.log(secondthen);
  console.log("this is second function");
  return secondthen;
})
  .then((main) => {
    console.log("this is third function");
    console.log(main);
    return main;
  }).catch((error) => console.log("any error"))
  .finally(() => console.log("task compelete"))

//We use return when we want to send a value back from a function.


//when used single function you dont wrote an return value but when multiple functontion they used further that same data when used return type.


