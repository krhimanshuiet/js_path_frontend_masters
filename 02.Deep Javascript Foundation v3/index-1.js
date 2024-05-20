/*
x++ as x = x +1;
*/

function plusPlus(orig_x) {
  var orig_x_coerced = Number(orig_x);
  x = orig_x_coerced + 1;
  return orig_x_coerced;
}

var x = "5";
// console.log(plusPlus(x))
// console.log(x)

/*
in js everything is object
OVERVIEW
types
primitive types
abstract operations
coercion
equality
typescript , flow
scope
Nested scope
Hoisting
Closure
Modules
Object (Oriented)
this
class {}
Prototypes
OO vs OLAO
*/

// primitive types

// undefined
// string
// number
// boolean
// object
// symbol
// null
//future
// bigint

// other types
/*undeclared
in js variables don't have types values do have types
// objects
object
function
array 
*/

// var v;
// console.log(typeof v);

// v = "1";
// console.log(typeof v);

// v = 2;
// console.log(typeof v);

// v = true;

// console.log(typeof v);

// v = {};

// console.log(typeof v);
// v = Symbol();
// console.log(typeof v);

// console.log(typeof undefined);

// typeof doesNotExist
// var v = null
// console.log(typeof v)

// v = function(){};
// console.log(typeof v)
// v = [1,2,3]
// console.log(typeof v)

/* output
undefined
string
number
boolean
object
symbol
*/

// var v = 42n

// console.log(typeof (typeof v))

/*
undefined vs undeclared vs uninitialized(TDZ - temporal dead zone)
undefined - there is a defenetly a variable and at the moment it has no value
undeclared - it has never been created in any scope that we have access to 

*/

//speacial values

/*
NaN("not a number") - "NaN means invalid number"
*/

// var myAge = Number("0o46");
// var myNextAge = Number("39");
// var myCatsAge = Number("n/a");

// console.log(myAge === myCatsAge);

// console.log(isNaN(myAge));
// console.log(isNaN(myNextAge));
// console.log(isNaN(myCatsAge));
// console.log(isNaN("my sons age"))

// console.log(Number.isNaN(myCatsAge))
// console.log(Number.isNaN("my sons age"))

// console.log(myAge - "my sons age")

// (anything) operation{+,-,*,/} NaN - NaN

// console.log(myCatsAge === myCatsAge)

// IEEE says NaN are not equal to each other , it does not have identity itself

// console.log(typeof NaN) // because it is Invalid Number

// Negative Zero

// console.log(0 + NaN)

// const s = new String("hello")
// console.log(typeof s)
// console.log(s.__proto__ === String.prototype)

// Negative zero

// var trendRate = -0;

// console.log(trendRate === -0);
// trendRate.toString();
// console.log(trendRate === 0);

// console.log(trendRate < 0);
// console.log(trendRate > 0);

// console.log(Object.is(trendRate , -0));
// console.log(Object.is(trendRate , 0));

// console.log(Math.sign(-3))
// console.log(Math.sign(3))
// console.log(Math.sign(-0))
// console.log(Math.sign(0))

// "fix" Math.sign(..)

// function sign(v){
//   return v !== 0 ? Math.sign(v) : Object.is(v , -0) ? -1 : 1;
// }

// console.log(sign(-3))
// console.log(sign(3))
// console.log(sign(-0))
// console.log(sign(0))

// function formatTrend(trendRate){
//   var direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "down" : "up";

//   return `${direction} ${Math.abs(trendRate)}`
// }

// console.log(formatTrend(-3))
// console.log(formatTrend(3))
// console.log(formatTrend(-0))
// console.log(formatTrend(0))