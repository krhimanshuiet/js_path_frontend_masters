// types

// "In JS everything is object" -> false

// Instead most of the types behave like object.

// primitive types
/*
1.Undefined
2.Null
3.Boolean
4.String
5.Symbol
6.Number
7.Object
*/

// undefined
// string
// number
// boolean
// object
// symbol
// null
// undefined

// undeclared ?
// null ?
// function ?
// array ?
// bigint ?

/*
not objects
undefined
string
number
boolean
object
symbol
null
bigint(future)

is objects
object
function
array
*/

// In Js variables do not have types values do.

var v;
console.log(typeof v);
v = "1";
console.log(typeof v);
v = 2;
console.log(typeof v);
v = true;
console.log(typeof v);
v = {};
console.log(typeof v);
v = Symbol();
console.log(typeof v);

console.log(typeof doesnotExist);

var v = null; // bug
console.log(typeof v);

v = function () {};

console.log(typeof v);

v = [1, 2, 3];
console.log(typeof v);
console.log(Array.isArray(v));

// coming soon

// var v = 42n
// var v = BigInt(42)
// console.log(typeof b) -> "bigint"

// undefined vs undeclared vs uninitialized ( aka TDZ -> temporal dead zone)
//special values
// NaN = invalid number  -> spec no : iee754

var myAge = Number("0o46");
console.log(myAge);
var myNextAge = Number("39");
console.log(myNextAge);
var myCatsAge = Number("n/a");
console.log(myCatsAge);
console.log(myAge - "my sons age");
console.log(myCatsAge === myCatsAge);
// NaNs are not equal to each other

console.log(isNaN(myAge));
console.log(isNaN(myCatsAge));
console.log(isNaN("my sons age"));

console.log(Number.isNaN(myCatsAge));
console.log(Number.isNaN("my sons age"));
console.log(typeof NaN);

// NaN -> Invalid Number

// Negative Zero -> used for games in what direction the car would be it is stopped

var trendRate = -0;

console.log(trendRate === -0);

console.log(trendRate.toString());
console.log(trendRate === 0);
console.log(trendRate < 0);
console.log(trendRate > 0);
console.log(Object.is(trendRate, -0));
console.log(Object.is(trendRate, 0));
console.log(Object.is(NaN, NaN));

console.log(Math.sign(-3));
console.log(Math.sign(3));
console.log(Math.sign(-0));
console.log(Math.sign(0));

// fix Math.sign(..)

function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

console.log(sign(-3));
console.log(sign(3));
console.log(sign(-0));
console.log(sign(0));

function formatTrend(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "down" : "up";
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0));
console.log(formatTrend(0));

// polyfill of Object.is

Object.prototype.myIs = function (x, y) {
  var xNegZero = isItNegZero(x);
  var yNegZero = isItNegZero(y);
  if (xNegZero || yNegZero) {
    return xNegZero && yNegZero;
  } else if (isItNaN(x) || isItNaN(y)) {
    return true;
  } else {
    return x === y;
  }

  function isItNegZero(v) {
    return v == 0 && 1 / v == -Infinity;
  }
  function isItNaN(v) {
    return v !== v;
  }
};

// Fundamental Object aka Built-In Objects aka Native Functions

// use new:
// Object()
// Array()
// Function()
// Date()
// RegExp()
// Error()

// not use new -> can be used with new but do not use with new
// String()
// Number()
// Boolean()

var yesterday = new Date("May 29,2024");
console.log(yesterday.toUTCString());

var transcript = {
  gpa: 3.54,
};

var myGPA = String(transcript.gpa);

console.log(myGPA);
