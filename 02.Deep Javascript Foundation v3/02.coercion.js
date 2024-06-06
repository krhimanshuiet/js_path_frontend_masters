// coercion in js

// abstract operations
// non primitive to primitive -> (ToPrimitive(hint) -> algorithm)

// hint:"number"
// valueOf
// toString

// hint:"string"
// toString()
// valueOf()

// ToString

/*
null -> "null"
undefined -> "undefined"
true -> "true"
false -> "false"
3.14159 -> "3.14159"
0 -> "0"
-0 -> "0"
*/

// toString(object) -> toPrimitive(string) aka toString() / valueOf

// ToString(Array)
console.log(String([]));
console.log([1, 2, 3].toString());
console.log([null, undefined].toString());
console.log([[], [], [], []].toString());
console.log([, , ,].toString());

// ToString(object)

console.log({}.toString());
console.log({ a: 2 }.toString());
console.log(
  {
    toString() {
      return "X";
    },
  }.toString()
);

// ToNumber

/*
"" -> 0
"0" -> 0
"-0" -> -0
" 009" -> 9
"3.14151" -> 3.14159
"0." -> 0
".0" -> 0
"." -> NaN
"0xaf" -> 175
false -> 0
true -> 1
null -> 0
undefined -> NaN
*/

console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));

// ToNumber(object) -> ToPrimitive(number) aka valueOf() / toString

// for [] and {} by default:  valueOf(){return this;} -> toString()

console.log(Number([""]));
console.log(Number(["0"]));
console.log(Number(["-0"]));
console.log(Number([null]));
console.log(Number([undefined]));
console.log(Number([1, 2, 3]));
console.log(Number([[[[]]]]));

console.log(["0"].valueOf());

// ToBoolean

// falsy -> null , undefined , 0, false,NaN,-0

// truthy -> 1 , true,[1,3],{a:1},function(){}

console.log(Boolean([]));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));

// coercion
var numStudents = 16;
console.log(`There are ${numStudents} students.`);
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
console.log(3 + "r");

console.log(`There are ${[numStudents].join("")} students.`);
console.log(`There are ${numStudents.toString()} students.`);
console.log(`There are ${String(numStudents)} students.`);

// string to number
// + operator is overloaded
function addAStudent(numStudent) {
  return numStudent + 1;
}
console.log(addAStudent(+"3"));
console.log(addAStudent(Number("3")));

// to Boolean
console.log(Boolean(" ".trim()));

console.log(!!true);

var student = { name: "hks" };
var workshop = { name: "mns" };
if (!!true) {
  console.log(`Welcome ${student.name} to ${workshop.name}.`);
}

console.log(Boolean(undefined));
console.log(Boolean(null));

// Boxing

// primitive to object

var studentNameElem = "12";

if (studentNameElem.length > 50) {
  console.log("Student name is too long..");
}

// coercion corner cases.

console.log(Number(""));
console.log(Number(" \t\n"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([]));
console.log(Number([1, 2, 3]));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number({}));
console.log(String(-0));
console.log(String(null));
console.log(String(undefined));
console.log(String([null]));
console.log(String([undefined]));
console.log(Boolean(new Boolean(false)));

// root of all coercion evil

var student = "";
console.log(Number(student));

student = "  \t\n";

console.log(Number(student));

console.log(Number(true));
console.log(Number(false));

console.log(1 < 2);
console.log(1 < 3);
console.log(1 < 2 < 3);

console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3);

console.log(3 > 2);
console.log(3 > 1);
console.log(3 > 2 > 1);
console.log(3 > 2 > 1);
console.log(1 > 1);

// philosophy of coercion

// implicit coercion
var num1 = "78";
var num2 = "34";
if (num1 > num2) {
  console.log("hello");
}

// write the validation functions

function isValidName(name) {
  if (typeof name == "string" && name.trim().length >= 3) {
    return true;
  }
  return false``;
}

function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }

  return false;
}

console.log(hoursAttended(3, 5));
