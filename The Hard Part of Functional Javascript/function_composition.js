// const multiplyBy2 = x => x*2;
// const add3 = x => x+3;
// const divideBy5 = x => x /5;

// const initialResult = multiplyBy2(11);
// const nextStep = add3(initialResult);
// const finalStep = divideBy5(nextStep);

// console.log({finalStep});

// but that's risky , people can override it 

// or we can use the fact that js evaluates every function call before it moves on

// const multiplyBy2 = x => x*2;
// const add3 = x => x+3;
// const divideBy5 = x => x /5;

// const result = divideBy5(add3(multiplyBy2(11)));

// console.log({result});
// now this is pretty unredeable though

const multiplyBy2 = x => x*2;
const add3 = x => x+3;
const divideBy5 = x => x /5;

const reduce = (array,howToCombine,buildingUp) => {
    for(let i = 0 ; i < array.length ; i++){
        buildingUp = howToCombine(buildingUp,array[i]);
    }
    return buildingUp;
}

const runFunctionOnInput = (input,fn) => {
    return fn(input);
}

const output = reduce([multiplyBy2,add3,divideBy5],runFunctionOnInput,11);

console.log({output});


const NewOutput = [multiplyBy2,add3,divideBy5].reduce((acc,item) => item(acc) , 11)

console.log({NewOutput});
 // [multiplyBy2,add3,divideBy5] -> composing the functions



const dounbleOfArray = [1,2,3,4].reduce((acc,input) => [...acc , input*3] , []);

console.log({dounbleOfArray});


// pure function 
/*Functions as tiny units to be combined and run automatically must
be highly predictable
— We rely on using their evaluated result to pass the input to the next
unit of code (automatically). Any ‘side effects’ would destroy this
*/

// impure funtion
/*
If we want the only consequence of map to be on that line and to achieve
‘referential transparency’ (I can the function call with its output and it’s the
same) - then I need to preserve my data and not manipulate it
JavaScript passes a reference (‘link back’) to the arr when it’s inserted into the
function map. If we change (‘mutate’) the input array our function is not pure -
it’s unpredictable - I can’t figure out what it does just be reading it and looking
at its output there in that line - undoes all our hard work
*/