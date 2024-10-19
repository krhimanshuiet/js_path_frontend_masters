// Iteration in JS

// ways to iterate

// .map only works on Array and its descendants but 
// for .. of works on any iterable object

// what makes an object iterable

// an iterable object has an @@iterator method 
// the object has a [Symbol.iterator] property
// the value of that property is function which returns an iterator object

// ok so what makes an object an iterator

// Has a .next() method
// .next() returns an object of shape
// {done,value}

// Generators
// special functions declared with function*
// can pause execution with yield before a final stop with return
// Qualify as both an iterator and iterable
// make great values for [Symbol.iterator]
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = myGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { done: true }


function* dogerator(){
    yield "so iteratble";
    yield "much generate";
    yield "wow";
    return
}

const meme = {
    [Symbol.iterator]:dogerator
};

for (const phrase of meme) {
    console.log(phrase)
}

// Date
