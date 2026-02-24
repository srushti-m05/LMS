export const topics = {

  // ---------------------- HTML -------------------------
  html: {

    intro: {
      title: "HTML Introduction",
      notes: `
HTML (HyperText Markup Language) is used to structure websites.
It tells the browser what to display like text, images, buttons, videos.

✔ HTML is NOT a programming language — it is a Markup Language.

Why HTML?
-----------------------------------
- Build webpage structure
- Display text, images, videos
- Create forms, links & layout
- Foundation of all websites

Basic Structure
-----------------------------------
<!DOCTYPE html>
<html>
<head>Meta, Title, CSS, JS</head>
<body>Visible Content</body>
</html>

Elements Example
-----------------------------------
<p>Hello World</p>

Self Closing Tags
<br />, <img />, <input />

Attributes Example
<img src="image.png" alt="photo">

Common Attributes:
- id, class, src, href, style, width-height
`,
      video: "https://www.youtube.com/embed/UB1O30fR-EE"
    },

    tags: {
      title: "HTML Tags",
      notes: `
HTML tags build webpage content.

Basic Tags
-----------------------------------
<h1>Heading</h1>
<p>Paragraph text</p>
<a href="https://google.com">Google</a>
<img src="photo.jpg" />

Lists
<ul><li>Item</li></ul>
<ol><li>Item</li></ol>

Div & Span
<div>Block</div>
<span>Inline</span>

Self Closing:
<br />, <hr />, <img />
`,
      video: "https://www.youtube.com/embed/qz0aGYrrlhU"
    },

    forms: {
      title: "HTML Forms",
      notes: `
Forms collect user input.

Example
-----------------------------------
<form>
<label>Name:</label>
<input type="text"/>
<button>Submit</button>
</form>

Controls
-----------------------------------
<input>, <textarea>, <select>, <option>,
<button>, <label>
`,
      video: "https://www.youtube.com/embed/fNcJuPIZ2WE"
    }
  },

  // -------------------- CSS --------------------
  css: {

    intro: {
      title: "CSS Introduction",
      notes: `
CSS styles a webpage.

Controls:
-----------------------------------
Colors, Fonts, Layout, Spacing, Animation

Ways to Apply CSS
-----------------------------------
Inline: <p style="color:red">
Internal: <style>p{}</style>
External: <link rel="stylesheet">

Basic Syntax
selector {property: value;}
`,
      video: "https://www.youtube.com/embed/1Rs2ND1ryYc"
    },

    selectors: {
      title: "CSS Selectors",
      notes: `
Selectors target HTML elements.

Examples:
-----------------------------------
p {color:red;}
.myClass {font-size:20px;}
#id {color:blue;}
input[type="text"]{}
* {margin:0;}
`,
      video: "https://www.youtube.com/embed/1cEG1T8beO4"
    },

    boxmodel: {
      title: "CSS Box Model",
      notes: `
Every HTML element is a box.

Box Includes:
-----------------------------------
Content ➝ Padding ➝ Border ➝ Margin

Example:
div{
 padding:20px;
 border:2px solid;
 margin:10px;
}
`,
      video: "https://www.youtube.com/embed/rIO5326FgPE"
    }
  },

  // ---------------------------JavaScript -------------------------
  js: {

    intro: {
      title: "JavaScript Introduction",
      notes: `
JavaScript makes websites interactive.

Can Do:
-----------------------------------
Change HTML/CSS
Validate forms
Create events & animations

Example:
document.getElementById("demo").innerHTML="Hello JS";
`,
      video: "https://www.youtube.com/embed/W6NZfCO5SIk"
    },

    variables: {
      title: "JavaScript Variables",
      notes: `
Variables store data.

Types:
var (old), let (modern), const (fixed)

Example:
let name="John";
const pi=3.14;
`,
      video: "https://www.youtube.com/embed/Q4p8vRQX8uY"
    },

    loops: {
      title: "JavaScript Loops",
      notes: `
Loops repeat actions.

Example:
for(let i=1;i<=5;i++){console.log(i);}
`,
      video: "https://www.youtube.com/embed/s9wW2PpJsmQ"
    },
    operators: {
      title: "JavaScript Operators",
      notes: `
Arithmetic, Assignment, Comparison, Logical, Ternary
`,
      video: "https://www.youtube.com/embed/6vbgZnQrpbU"
    },
    conditions: {
      title: "JavaScript Conditions",
      notes: `
if, else, switch
`,
      video: "https://www.youtube.com/embed/IsG4Xd6LlsM"
    },
     functions: {
      title: "JavaScript Functions",
      notes: `
Reusable code blocks.
`,
      video: "https://www.youtube.com/embed/N8ap4k_1QEQ"
    },
     arrays: {
      title: "JavaScript Arrays",
      notes: `
Store multiple values.
`,
      video: "https://www.youtube.com/embed/oigfaZ5ApsM"
    },

    dom: {
  title: "DOM (Document Object Model)",
  notes: `
DOM (Document Object Model) represents the HTML document as a tree of objects.
Each HTML element becomes a node that JavaScript can access and modify.

Why DOM?
-----------------------------------
- Access HTML elements
- Change content dynamically
- Modify CSS styles
- Add/remove elements
- Handle user events

DOM Tree Structure
-----------------------------------
Document
 └── html
     ├── head
     └── body
         ├── h1
         └── p

Accessing DOM Elements
-----------------------------------
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("p")
document.querySelector(".class")
document.querySelectorAll("p")

Manipulating DOM
-----------------------------------
element.innerHTML = "New Content"
element.textContent = "Text Only"
element.style.color = "red"

Creating & Removing Elements
-----------------------------------
document.createElement("div")
parent.appendChild(child)
parent.removeChild(child)

DOM Events
-----------------------------------
DOM works with events like click, submit, keydown
to make web pages interactive.
`,
  video: "https://www.youtube.com/embed/0ik6X4DJKCc"
},


    events: {
  title: "JavaScript Events",
  notes: `
JavaScript events allow you to react to user actions.

Events happen when a user interacts with the webpage.

Examples of user actions:
-----------------------------------
- Clicking a button
- Typing in an input
- Hovering over an element
- Submitting a form
- Loading a page

Common Events
-----------------------------------
- click
- change
- input
- submit
- mouseover
- keydown

Basic Example
-----------------------------------
<button onclick="showMessage()">Click me</button>

<script>
function showMessage() {
  alert("Button clicked!");
}
</script>

Using addEventListener (Recommended)
-----------------------------------
<button id="btn">Click</button>

<script>
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});
</script>

Why use addEventListener?
-----------------------------------
- Cleaner code
- Multiple events on same element
- Better control

Summary
-----------------------------------
- Events respond to user actions
- addEventListener is preferred
- Events make pages interactive
`,
    video: "https://www.youtube.com/embed/DTs5nQKp2jI",
},

    hoisting: {
      title: "Hoisting",
      notes: `
      Hoisting moves declarations to the top.

Rules:
-----------------------------------
var → hoisted (undefined)
let & const → hoisted but not initialized
Functions → fully hoisted

Example:
console.log(a);
var a = 10;
Declarations moved to top.
`,
      video: "https://www.youtube.com/embed/Fnlnw8uY6jo"
    },
    promises: {
      title: "JavaScript Promises",
      notes: `
Promises handle async operations.

States:
-----------------------------------
Pending
Resolved
Rejected

Example:
let promise = new Promise((resolve,reject)=>{
  resolve("Success");
});

promise.then(res => console.log(res));
`,
      video: "https://www.youtube.com/embed/DHvZLI7Db8E"
    },

    

  } // end of js

};

  
  

   