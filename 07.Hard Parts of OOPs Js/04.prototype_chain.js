// object default __proto__

const obj = {
  num: 3,
};

console.log(obj.num);
console.log(obj.hasOwnProperty("num"));
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype);
console.log(typeof Object.prototype);

/* Arrays and functions are also objects so they get access to all 
the functions in Object.prototype but also more goodies.
*/

function multiplyBy2(num) {
  return num * 2;
}

console.log(multiplyBy2.toString());

Function.prototype;

multiplyBy2.hasOwnProperty("score");
console.log(Function.prototype.__proto__);
