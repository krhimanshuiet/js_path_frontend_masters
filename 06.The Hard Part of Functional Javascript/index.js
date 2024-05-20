// Hard Parts of functional programming.
// const num = 3; //in memory ->  label = value
// const multiplyBy2 = (inputNumber) => { // inputNumber -> parameter
//     const result = inputNumber*2;
//     return result;
// }
// const name = "will";
// const output = multiplyBy2(num); // num -> argument
// const newOutput = multiplyBy2(10);
// console.log({output,newOutput});
// stack -> global() -> multiplyBy2(num)
// Higher Order Function
// suppose we have a function copyArrayAndMultiplyBy2
// const copyArrayAndMultiplyBy2 = array => array.map(number => number*2);
// console.log(copyArrayAndMultiplyBy2([1,2,3,4,5]));

// const copyArrayAndMultiplyBy2 = (array) => {
//     const output = [];
//     for(let i = 0 ; i < array.length ; i++){
//         output.push(array[i]*2);
//     }
//     return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);

// console.log(result);

// const copyArrayAndDivideBy2 = (array) => {
//     const output = [];
//     for(let i = 0 ; i< array.length;i++){
//         output.push(array[i]/2)
//     }
//     return output;
// }

// const myArray = [1,2,3,4];
// const result = copyArrayAndDivideBy2(myArray);
// console.log(result);

// const copyArrayAndFollowInstructions = (instruction,array) => {
//     const output = [];
//     for(let i = 0 ; i< array.length ; i++){
//         output.push(instruction(array[i]))
//     }
//     return output
// }

// const instruction = (item) => item * 2;
// const array = [1,2,3,4,5,6];
// const result = copyArrayAndFollowInstructions((item) => item*2 , array);
// console.log(result);



// Arrow and Anonymous functions


// arrow function in es2015 

// const multiplyBy2 = (input) => {return input*2};

// or
// const multiplyBy2 = (input) => input *2;
// const output = multiplyBy2(8);

//or
const multiplyBy2 = input => input*2;
const output = multiplyBy2(89);











