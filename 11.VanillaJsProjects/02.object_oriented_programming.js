// OOPS

// Functions

// back to callbacks 

// addEventListener(eventname,handlerFn)
// setTimeout(callbackFn,delay)
// setInterval(callbackFn,interval)

// JS has first class functions (fn can be passed around to functions like any other data)
// Function that operate on other functions are higher-order-functions


// const printLog = console.log.bind(console,"DEBUG:")
function makeLogger(logLevel){
    return function log(msg){
        console[logLevel](msg);
    }
}
let level = "warn";
const worryUser = makeLogger(level);
worryUser("oho");
// worryUser "remembers" what level was when worryUser was declared

// A closure is a function that closes over valus in its defining scope,remembering them forever.
// PLSRD -> persistent lexical scoped refrenced data OR Backpack OR Closure.

// Programming Paradigm

// Functional Programming -> Declarative -> "what"
// OOP -> Imperetive -> "how"

// OOPS 

const config = {paradigm:"imperetive"}

// const program = new Program(config);


// program.run = (args) => {
//     console.log(`programming ${paradigm}`);
// }
// const output = program.run();

// FP

const op = (function program({paradigm}){
    return function run(args){
        return `do stuff ${paradigm}ly`
    }
})({paradigm:"declarative"})()

console.log(op)

// IIFE:Immediately Invoked Function Expression

// Function expression
function bling(line){
    console.log("one thing",line)
}

// Invoked function
bling("hotline")

// IIFE
(function(line){
    console.log("one thing")
})()

// JS is called a multi-paradigm language.

// OOP

const engines = ["V8","SpiderMonkey"];

for (let engine of engines) {
    console.log(engine.toUpperCase());
}

const doc = document.documentElement;

for (const child of doc.children) {
    console.log(child.tagName)
}

engines.map(e => e.toUpperCase())

Array.from(doc.children).map(c => c.tagName)

// Every Object has a prototype

Object.getPrototypeOf(engines);
Object.getPrototypeOf(doc.children);

// follow the prototype chain
engines.__proto__;
// Array
engines.__proto__.__proto__;
//Object
engines.__proto__.__proto__.__proto__;
// null


engines.__proto__.__proto__.toString()
// [object Object]


// Own Properties

const obj = {name:"himanshu",isGenie:true};
Object.entries(obj);

// [["name","himanshu"],["isGenie",true]]

obj.toString;
// function toString()

obj.hasOWnProperty("toString");
//false
obj.toString()
// [object,Object]


engines.hasOWnProperty("map")
//false
engines.__proto__.hasOWnProperty("map")
// true

// array supplies the .map property 
//HTMLCollection is not an array does not have .map