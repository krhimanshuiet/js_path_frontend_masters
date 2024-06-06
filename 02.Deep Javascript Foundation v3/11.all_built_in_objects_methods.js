// array,string,map,set,date methods

// array.prototype  methods

// static methods

// 1. Array.from

/*
 The Array.from() static method creates a new,
 shallow-copied Array instance from an iterable 
 or array-like object.
*/

const array = ["apple", "orange", "banana", "mango"];
// from string
const str = "apple";
const array_from_string = Array.from(str);
array_from_string;

// from set
const set = new Set([
  "apple",
  "apple",
  "mango",
  "strawberry",
  "grapes",
  "mango",
]);
const array_from_set = Array.from(set);
array_from_set;

// from map

const map = new Map([
  ["apple", 1],
  ["orange", 2],
  ["grapes", 3],
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

const isArray = Array.isArray(["23"]);
isArray;

//The Array.of

/*
The Array.of() static method creates a new Array instance from a variable number of arguments, 
regardless of number or type of the arguments.
*/

const newArray = Array.of("30", undefined, null, true);
newArray;

// prototype methods
//1. Array.prototype.at()

// const fruits = ["apple", "orange", "banana", "grapes", "mango"];
// console.log(fruits.at(3));
// console.log(fruits.at(-1));
// console.log(fruits.at(-1));

//2. Array.prototype.concat()

const new_fruits = ["apple", "orange", "banana", "grapes", "mango"];
const all_fruits = new_fruits.concat(["jack fruit"]);
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

const fruits = ["apple", "orange", "banana", "grapes", "mango"];

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
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}

//5. Array.prototype.every()
/*
The every() method of Array instances tests whether all elements in the array pass the test implemented 
by the provided function. It returns a Boolean value.
*/

const array1 = ["apple", "orange", "banana", null, undefined];

const is_every = array1.every((fruit) => typeof fruit === "string");
is_every;

//6. Array.prototype.some()

/*
The some() method of Array instances tests whether at least one element in the array 
passes the test implemented by the provided function. It returns true if, in the array,
it finds an element for which the provided function returns true; otherwise it returns false.
It doesn't modify the array.
*/

const array2 = ["apple", "orange", "banana", null, undefined];
const is_some = array2.some((fruit) => typeof fruit === "string");
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

const array4 = ["apple", "orange", "banana", "grapes", "mango", "mango"];

const fruit_with_not_mango = array4.filter((fruit) => fruit != "mango");
fruit_with_not_mango;

//9. Array.prototype.find()
/*
The find() method of Array instances returns the first element in the provided array that 
satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/

const array5 = ["apple", "orange", "banana", "grapes", "mango", "banana"];

const banana = array5.find((fruit) => fruit == "banana");
banana;

//10. Array.prototype.findIndex()
/*
The findIndex() method of Array instances returns the index of the first element in an array
that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.
*/

const array6 = ["apple", "orange", "banana", "grapes", "mango", "banana"];

const index_of_grapes = array6.findIndex((fruit) => fruit == "grapes");
index_of_grapes;

//11. Array.prototype.findLast()
/*
The findLast() method of Array instances iterates the array in reverse order 
and returns the value of the first element that satisfies the provided testing 
function. If no elements satisfy the testing function, undefined is returned.
*/
const array7 = ["apple", "orange", "banana", "grapes", "mango", "banana"];

// const last_banana = array7.findLast(fruit => fruit == "banana")

//12. Array.prototype.findLastIndex()
/*
The findLastIndex() method of Array instances iterates the array in reverse order and returns 
the index of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.
*/
const array8 = ["apple", "orange", "banana", "grapes", "mango", "banana"];

// const last_banana_index = array8.findLastIndex((fruits) => fruits == "banana");

//13. Array.prototype.flat()
/*
The flat() method of Array instances creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth.
*/
const array9 = [
  "apple",
  ["orange", "banana", ["orange"]],
  "banana",
  "grapes",
  "mango",
  "banana",
];
const flat_fruits = array9.flat(3);
flat_fruits;
