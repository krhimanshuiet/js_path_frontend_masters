// array,string,object,map,set methods
/*
Array
Object
String
Map
Set
*/
// array.prototype  methods

// static methods

// 1. Array.from

/*
 The Array.from() static method creates a new,
 shallow-copied Array instance from an iterable 
 or array-like object.
*/

const array = ['apple', 'orange', 'banana', 'mango'];
// from string
const str = 'apple';
const array_from_string = Array.from(str);
array_from_string;

// from set
const set = new Set(['apple', 'apple', 'mango', 'strawberry', 'grapes', 'mango']);
const array_from_set = Array.from(set);
array_from_set;

// from map

const map = new Map([
  ['apple', 1],
  ['orange', 2],
  ['grapes', 3]
]);
const array_from_map_1 = Array.from(map.values());
const array_from_map_2 = Array.from(map.keys());
const array_from_map_3 = Array.from(map.entries());
array_from_map_1;
array_from_map_2;
array_from_map_3;

// from node list
// const images = document.querySelectorAll("img");
// const sources = Array.from(images, (image) => image.src);
// const insecureSources = sources.filter((link) => link.startsWith("http://"));

// from array like argument

function fn() {
  console.log(Array.from(arguments));
}

fn(1, 2, 3, 4, 5, 6, 7);

// using arrow function

const new_array_with_length_10 = Array.from({ length: 10 }, (_, j) => j + 1);
new_array_with_length_10;

// 2 Array.fromAsync

// const asyncIterable = (async function* () {
//   for (let i = 0; i < 5; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 10 * i));
//     yield i;
//   }
// })();

// Array.fromAsync(asyncIterable).then((array) => console.log(array));

//3. Array.isArray

//The Array.isArray() static method determines whether the passed value is an Array.

const isArray = Array.isArray(['23']);
isArray;

//The Array.of

/*
The Array.of() static method creates a new Array instance from a variable number of arguments, 
regardless of number or type of the arguments.
*/

const newArray = Array.of('30', undefined, null, true);
newArray;

// prototype methods
//1. Array.prototype.at()

// const fruits = ["apple", "orange", "banana", "grapes", "mango"];
// console.log(fruits.at(3));
// console.log(fruits.at(-1));
// console.log(fruits.at(-1));

//2. Array.prototype.concat()

const new_fruits = ['apple', 'orange', 'banana', 'grapes', 'mango'];
const all_fruits = new_fruits.concat(['jack fruit']);
all_fruits;

//3. Array.prototype.copyWithin()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const copied_numbers = numbers.copyWithin(1, 5, -1);
/*
1- target
5-start
-1-end
first slice numbers.slice(5,-1) -> 6,7
then copy at target
*/
copied_numbers;

//4. Array.prototype.entries()

/*
The entries() method of Array instances returns a new array iterator 
object that contains the key/value pairs for each index in the array.
*/

const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango'];

const iterator1 = fruits.entries();
for (const [index, element] of iterator1) {
  console.log(index, element);
}
const iterator2 = fruits.entries();
const a = Object.fromEntries([...iterator2]);
a;

//Calling entries() on non-array objects

const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd' // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}

//5. Array.prototype.every()
/*
The every() method of Array instances tests whether all elements in the array pass the test implemented 
by the provided function. It returns a Boolean value.
*/

const array1 = ['apple', 'orange', 'banana', null, undefined];

const is_every = array1.every(fruit => typeof fruit === 'string');
is_every;

//6. Array.prototype.some()

/*
The some() method of Array instances tests whether at least one element in the array 
passes the test implemented by the provided function. It returns true if, in the array,
it finds an element for which the provided function returns true; otherwise it returns false.
It doesn't modify the array.
*/

const array2 = ['apple', 'orange', 'banana', null, undefined];
const is_some = array2.some(fruit => typeof fruit === 'string');
is_some;

//7. Array.prototype.fill()

/*
The fill() method of Array instances changes all elements within a range of indices in an array to a static value.
It returns the modified array.
*/

const array3 = new Array(10);
const filled_array = array3.fill(1, 0, array3.length);
filled_array;

//8. Array.prototype.filter()
/*
The filter() method of Array instances creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by 
the provided function.
*/

const array4 = ['apple', 'orange', 'banana', 'grapes', 'mango', 'mango'];

const fruit_with_not_mango = array4.filter(fruit => fruit != 'mango');
fruit_with_not_mango;

//9. Array.prototype.find()
/*
The find() method of Array instances returns the first element in the provided array that 
satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/

const array5 = ['apple', 'orange', 'banana', 'grapes', 'mango', 'banana'];

const banana = array5.find(fruit => fruit == 'banana');
banana;

//10. Array.prototype.findIndex()
/*
The findIndex() method of Array instances returns the index of the first element in an array
that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.
*/

const array6 = ['apple', 'orange', 'banana', 'grapes', 'mango', 'banana'];

const index_of_grapes = array6.findIndex(fruit => fruit == 'grapes');
index_of_grapes;

//11. Array.prototype.findLast()
/*
The findLast() method of Array instances iterates the array in reverse order 
and returns the value of the first element that satisfies the provided testing 
function. If no elements satisfy the testing function, undefined is returned.
*/
const array7 = ['apple', 'orange', 'banana', 'grapes', 'mango', 'banana'];

// const last_banana = array7.findLast(fruit => fruit == "banana")

//12. Array.prototype.findLastIndex()
/*
The findLastIndex() method of Array instances iterates the array in reverse order and returns 
the index of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.
*/
const array8 = ['apple', 'orange', 'banana', 'grapes', 'mango', 'banana'];

// const last_banana_index = array8.findLastIndex((fruits) => fruits == "banana");

//13. Array.prototype.flat()
/*
The flat() method of Array instances creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth.
*/
const array9 = ['apple', ['orange', 'banana', ['orange']], 'banana', 'grapes', 'mango', 'banana'];
const flat_fruits = array9.flat(3);
flat_fruits;

//Calling flat() on non-array objects

const array_like = {
  length: 3,
  0: [1, 2, 3, 4],
  1: { length: 2, 0: 1, 1: 2 },
  2: [1, 2, 3, 4, 5, 6]
};

const array_like_flat = Array.prototype.flat.call(array_like);
array_like_flat;

//14.Array.prototype.flatMap()

/*
The flatMap() method of Array instances returns a new array formed by applying
a given callback function to each element of the array, and then flattening the result 
by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()),
 but slightly more efficient than calling those two methods separately.
*/

const array10 = [1, 2, 3, 4, 5];

const array_flat_map = array10.flatMap(item => (item == 2 ? [2, 2] : 1));
array_flat_map;

//Calling flatMap() on non-array objects
const array_like2 = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4 // ignored by flatMap() since length is 3
};

const array_like_flat_map = Array.prototype.flatMap.call(array_like2, item => (item == 2 ? [2, 2, 2] : 1));
array_like_flat_map;

//15.Array.prototype.forEach()
/*
The forEach() method of Array instances executes a provided function once for each array element.
*/
const array12 = ['orange', 'banana', 'apple', 'guava'];
array12.forEach(item => {
  console.log(item);
});
//Using thisArg

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions have their own this bindings.
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
console.log(obj.sum);

//16.Array.prototype.includes()
/*
The includes() method of Array instances determines whether an array includes
a certain value among its entries, returning true or false as appropriate.
*/

const array13 = ['apple', 'orange', 'banana', 'grapes'];

const is_grapes_included = array13.includes('apple', 0);
is_grapes_included;
//Calling includes() on non-array objects

const array_like_3 = {
  length: 3,
  0: 'apple',
  1: 'orange',
  2: 'banana'
};

const is_apple_included_in_array_like = Array.prototype.includes.call(array_like_3, 'apple');
is_apple_included_in_array_like;
//17.Array.prototype.indexOf()

const array14 = ['orange', 'apple', 'banana', 'gauva'];

const index_of_apple = array14.indexOf('apple');
index_of_apple;

//18.Array.prototype.join()

const array15 = ['a', 'p', 'p', 'l', 'e'];
const joined = array15.join('-');
joined;

//19.Array.prototype.keys()

const array16 = [1, 2, 3, 4, 5];

const keys = [...array16.keys()];
keys;

//20.Array.prototype.lastIndexOf()

const array17 = [89, 45, 23, 45, 23, 67];

const lastIndex = array17.lastIndexOf(67);
lastIndex;

//21.Array.prototype.map()

const array18 = ['apple', 'orange', 'banana', 'mango', 'guava'];

const maped = array18.map(item => '@' + item);
maped;

//22.Array.prototype.pop()

const array19 = [1, 23, 54, 34, 23, 89];
const poped = array19.pop();
array19;
poped;

//23.Array.prototype.push()
/*
The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
*/
const array20 = ['apple', 'orange', 'banana', 'mango'];

const newLength = array20.push('lichi');
newLength;

//24.Array.prototype.reduce()
/*

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer 
across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place.
Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element 
(index 1 instead of index 0).
*/

const array21 = [1, 2, 3, 4, 5, 6, 7];

const sum = array21.reduce((acc, item) => acc + item, 0);
sum;

//Function sequential piping
/*
The pipe function takes a sequence of functions and returns a new function. 
When the new function is called with an argument, the sequence of functions are called in order,
which each one receiving the return value of the previous function.
*/

const pipe = (...functions) => {
  return initialValue => {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };
};

// Building blocks to use for composition
const double = x => 2 * x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
