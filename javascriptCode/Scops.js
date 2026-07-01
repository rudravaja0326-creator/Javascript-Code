function globle(){
        const userName = "Rudra";
        console.log("Globle Scope Function:",userName);
      function Child(){
        const Local = "Inner";
        console.log(userName);
        console.log("Local Scope:",Local);
      }

console.log("Globle Scope:",userName);
}

globle();


