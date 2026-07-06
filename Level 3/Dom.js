// DOM (Document Object Model).



// The DOM (Document Object Model) is a programming interface that represents an HTML or XML document as a tree of objects. It allows JavaScript to access, modify, add, or remove elements and content on a web page dynamically.

// Method	Returns	Can use .style directly?
// querySelector()	Single element	✅ Yes
// getElementById()	Single element	✅ Yes
// querySelectorAll()	Multiple elements (NodeList)	❌ No
// getElementsByClassName()	Multiple elements (HTMLCollection)	❌ No


// ==============================================================                                                              
// innerHTML gets or sets the HTML content inside an element.

// <h1 id="title"></h1>
// document.getElementById("title").innerHTML = "<b>Rudra</b>";

// innerHTML gets or sets the HTML content inside an element.

// Rudra (bold)

// Because <b> is treated as HTML.
// ==============================================================

// ====================================================================
// innerText gets or sets only the visible text of an element.
// It ignores hidden text.

// <div id="box">
//     Hello
//     <span style="display:none;">World</span>
// </div>
// console.log(
//     document.getElementById("box").innerText
// );
// Ouutput: Hello
// ========================================================================
//                                     TextContent                        
// ==========================================================================
// textContent gets or sets all text inside an element, including hidden text.
// It does not understand HTML tags.

//<div id="box">
//Hello
//<span style="display:none;">World</span>
//</div>
//console.log(
//document.getElementById("box").textContent
//);
//Output:Hello World
//============================================================================
