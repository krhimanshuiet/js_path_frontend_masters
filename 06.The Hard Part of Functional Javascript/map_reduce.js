// map and reduce

const map = (array, instruction) => {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      const output = [];
      for (let i = 0; i < array.length; i++) {
        output.push(instruction(array[i]));
      }
      return output;
    } else {
      throw new Error("Array can not be empty");
    }
  } else {
    throw new Error("map is not a function.");
  }
};

const output = map([1, 2, 3, 4], (input) => input * 2);

console.log(output);


const reduce  = (array,howToCombine,buildingUp) => {
    for(let i = 0 ; i < array.length ; i++){
        buildingUp = howToCombine(buildingUp,array[i]);
    }
    return buildingUp;
}

const add = (a,b) => a+b;
const summed = reduce([1,2,3,4],add,0);

console.log(summed);
