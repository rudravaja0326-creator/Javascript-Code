// ===============================
// JavaScript String Methods
// Definitions + Examples + Output
// ===============================

// padStart()
// Definition: Adds characters to the beginning of a string until it reaches the specified length.
console.log("5".padStart(3, "0"));
// Output: "005"


// padEnd()
// Definition: Adds characters to the end of a string until it reaches the specified length.
console.log("5".padEnd(3, "0"));
// Output: "500"


let str = "Hello JavaScript World";

// search()
// Definition: Searches a string for a specified value and returns the index of the first match.
console.log(str.search("JavaScript"));
// Output: 6


// match()
// Definition: Searches a string using a regular expression and returns the matched value(s).
console.log("abc123xyz".match(/[0-9]+/));
// Output: ["123"]


// localeCompare()
// Definition: Compares two strings alphabetically and returns -1, 0, or 1.
console.log("apple".localeCompare("banana"));
// Output: -1

console.log("banana".localeCompare("apple"));
// Output: 1

console.log("apple".localeCompare("apple"));
// Output: 0


// valueOf()
// Definition: Returns the primitive value of a string object.
console.log(str.valueOf());
// Output: "Hello JavaScript World"


// String.fromCharCode()
// Definition: Converts Unicode/ASCII values into their corresponding characters.
console.log(String.fromCharCode(72, 101, 108, 108, 111));
// Output: "Hello"


// String.raw()
// Definition: Returns a raw string without processing escape characters.
console.log(String.raw`Hello\nWorld`);
// Output: Hello\nWorld


// Additional Example
console.log(String.raw`C:\Users\Rudra`);
// Output: C:\Users\Rudra



let split = "my name is rudra vaja";
console.log(split);




