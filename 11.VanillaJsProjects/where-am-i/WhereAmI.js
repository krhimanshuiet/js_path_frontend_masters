import { say } from "cowsay";
console.log("hello world");
let currentDir = process.cwd(); // current working directory.
const message = 'Moo are here:\n' + currentDir;
console.log(say({text:message}));
setTimeout(() => console.log(currentDir),1000);

// modules
// commonJS modules
// original Node module system still around

// const cowsay = require("cowsay");
// module.exports = {
//     moove:() => cowsay.say({text:"Get Going"});
// }

// ECMAScript Module

// The newish hotness supported by browsers too

// import {say} from "cowsay"
// export const moove = () => say({text:"Get Going."})

// In Browsers

{/* <script type="module"></script> */}
//Node

//1 .mjs extension
//2 "type":"module" in package.json


// Evolution of JS Tooling

