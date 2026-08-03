//fetch() is a built-in JavaScript function used to send HTTP requests and get data from a server or API.

//fetch() asks a server for data and returns a Promise.

 const p = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m");

console.log(p);

p.then((ans)=>{
        setTimeout(()=>{console.log("This is first then");},2000)
        return ans.json();
}).then((back)=>{
        console.log("Second then");
        // console.log(back);
        console.log(back.latitude);
})

//setTimeout(...) registers a timer for 1 second.
// JavaScript does not wait for that timer.
// It immediately executes:
// return ans.json();
// ans.json() resolves quickly.
// The next .then() is queued as a microtask and runs immediately after the current code finishes.
// After 1 second, the timer callback finally runs.

// ouput

// Promise { <pending> }
// Second then
// 52.52
// This is first then

