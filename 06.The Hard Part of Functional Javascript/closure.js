// closure a super power 


/*
functions are our units to build with but they are limited - they forget everything each time they finish running 
with no global state.

---> imagine if we could give our functions memories
*/

const multiplyBy2 = input => input *2;

const output = multiplyBy2(7);
const newOutput = multiplyBy2(3);
console.log({output,newOutput});

const  functionCreater = () => {
    let counter = 0;
    const add3 = (num) => {
        const result = num+3;
        return result
    }
    return add3;
}
const generateFunc = functionCreater();
const result = generateFunc(9);


// calling a function inside the function call in which it was defined

const outer = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
        return counter;
    }
    return incrementCounter;
}

const newFunc = outer();
const newFunc2 = outer();
console.log(newFunc2());
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())

// what determines what data your function have access to when you call the function ? where we call it.

// [[scope]] -> backpack store
// backpack 
// p.l.s.r.d -> persistent lexically stored refrenced data
// c.o.v.e -> closed over varable environment
// closure



