// lexical scope (advance scope) determined at compile time

var teacher = "Kyle";
function otherClass() {
  var teacher = "Suzy";
  function ask(question) {
    console.log(teacher, question);
  }
  ask("why");
}
// function scoping
var teacher = "Kyle";
function anotherFunction() {
  var teacher = "Suzy";
  console.log(teacher);
}
anotherFunction();
console.log(teacher);

// IIFE pattern
var teacher = "Kyle";
(function anotherFunction() {
  var teacher = "Suzy";
  console.log(teacher);
})();

console.log(teacher);

// this iife is anonymous
(function (teacher) {
  console.log(teacher);
})("Suzy");

var teacher;

try {
  teacher = fetchTeacher(1);
} catch (error) {
  teacher = "Kyle";
}

var teacher = (function getTeacher() {
  try {
    return fetchTeacher(1);
  } catch (error) {
    return "Kyle";
  }
})();

// block scoping (encaptulation)
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);
}

console.log(teacher);

function diff(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }
  return y - x;
}

function repeat(fn, n) {
  var result;
  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

function lookupRecord(serachStr) {
  try {
    var id = getRecord(serachStr);
  } catch (err) {
    var id = -1;
  }
  return id;
}

function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO/.test(str)) {
    return str;
  }
  return str.slice(4);
}
// const
var teacher = "Kyle";
teacher = "Kyle";

const myTeacher = teacher;
// myTeacher = "Suzy";
// const teacher = ["kyle", "suzy"];
// teacher[1] = "Brian";

// Hoisting

student;
teacher;

var student = "you";
var teacher = "kyle";

var teacher = "Kyle";

otherTeacher();

function otherTeacher() {
  console.log(teacher);
  var teacher = "Suzy";
}

// let does not hoist ?

teacher = "Kyle"; // tdz error
let teacher;

{
  teacher = "Kyle";
  let teacher;
}

var teacher = "Kyle";
{
  console.log(teacher);
  let teacher = "Suzy";
}

// Hoisting Exercise

function getStudentFromId(studentId) {
  return studentRecords.find(matchId);

  function matchId(record) {
    return record.id == studentId;
  }
}

function printRecords(recordIds) {
  var record = recordIds.map(getStudentFromId);

  records.sort(sortByNameAsc);

  records.forEach(printRecord);
}

function printRecord(record) {
  console.log(
    `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
  );
}

function sortByNameAsc(record1, record2) {
  if (record1 < record2) return -1;
  else if (record1 > record2) return 1;
  else return 0;
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(needToEnroll);

  var idsToEnroll = recordsToEnroll.map(getStudentId);

  return [...currentEnrollment, ...idsToEnroll];
}

function getStudentId(record) {
  return record.id;
}

function needToEnroll(record) {
  return record.paid && !currentEnrollment.includes(record.id);
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(notYetPaid);
  printRecords(unpaidIds);
}

function notYetPaid(studentId) {
  var record = getStudentFromId(studentId);
  return !record.paid;
}
