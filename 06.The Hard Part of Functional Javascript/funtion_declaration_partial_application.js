// funtion decoration


//to add apermanent memory to an existing function we have to create a new function that will run the existing function inside of itself

const oncify = (convertMe) => {
    let counter = 0;
    const inner = (input) => {
        if(counter === 0){
            const output = convertMe(input);
            counter++;
            return output;
        }
        return "sorry"
    }
    return inner
}

const multiplyBy2 =  num => num*2;
const oncifiedMultiplyBy2 = oncify(multiplyBy2);

oncifiedMultiplyBy2(10);
oncifiedMultiplyBy2(7);


// partial application and curring 

const multiply = (a,b) => a * b;

function prefillFunction(fn,prefilledValue){
    const inner = (liveInput) => {
        const output = fn(liveInput,prefilledValue);
        return output
    } 
    return inner;
}

const multiplyByTwo = prefillFunction(multiply,2);
const result1 = multiplyByTwo(5)
const result2 = multiplyByTwo(50)
console.log(result1,result2);