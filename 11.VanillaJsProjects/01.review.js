// DOM -> Document Object Model
// document 
const IdElement1 = document.getElementById("my-id");
const IdElement2 = document.querySelector(".my-class");
const btn = document.createElement("button");
btn.innerText = "click me"

IdElement1.appendChild(btn)

IdElement1.setAttribute("class","himanshu")
console.log("IdElement",IdElement2)

const attr = IdElement1.getAttribute('class')
btn.getAttribute("disabled") // ""
btn.setAttribute("disabled","false"); // 
btn.hasAttribute("disabled"); // true
btn.removeAttribute("disabled");
console.log("btn",btn)
document.documentElement

// event handlers
btn.addEventListener("click",(e) => {
    console.log("you clicked me",e.target);
})


// Asynchronous JS
// async and await

async function fetchData(){
    const response = await fetch("some.api/resource");
    return await response.json();
}

// some actions take time to complete
// The browser needs to stay responsive
// But JS is single Threaded (does 1 thing at a time)


// browser
// call stack -> functions stack up when called , run to completion, pop off when done
// heap -> data stored in a big ol' pile of memory
// queue -> messages get in line to send function calls to the stack.
// event loop -> infinite while pops 1st message from queue and sends call to stack (if empty)

// event loop talk.

// js -> a single threaded non-blocking asynchronous concurrent language
// one thread == one call stack == one thing at a time

function multiple(a,b){
    return a*b;
}

function square(n){
    return multiple(n,n);
}

function printSqaure(n){
    var squared = square(n);
    console.log("sq",squared)
}

printSqaure(4);

console.log("Hi");

setTimeout(function cb(name){
    console.log("hi there , i am cb",name);
},0,"himanshu")

console.log("JS Talk")

// callstack -> main() , printSqaure() , sqaure() , multiply()
// learning functional programming with js talk.

// function =  input -> output
// functional

function greet(name){
    return  `Hi, I'am ${name}`;
}
greet("Himanshu")
// pure funciton -> output only depends opon the parameter received.

// hof

function makeAdjectifier(adjective){
    return function(string){
        return `${adjective}   ${string}`
    }
}

var coolifier = makeAdjectifier('cool');
coolifier('conference') // cool conference

// Browser APIS

console.log(window)

window.location.toString();

document === window.document; // true

console == window.console // true

console.log(navigator);

console.log(navigator.userAgent);

//Dates and Times

const today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(Date.now());

const start = Date.now();

// longRunningOperation();

const end = Date.now();
console.time("stopwatch")
console.time('lap');
// runArround()
console.timeEnd();

// runAround()
console.timeEnd("stopwatch")


// Timeouts

console.log("prints immed");

setTimeout(() => console.log("prints -> 1 second later"),1000);

console.log("prints immed");

// Cancelling Timeouts

const countDown = setTimeout(() => {
    console.log("liftoff")
},10000);
console.log(countDown);
abortButton.addEventListener("click",() => {
    clearTimeout(countDown);
})

// Intervals

const travelling = setInterval(() => {
    console.log("are we there yet?")
},1000)

clearInterval(travelling);
