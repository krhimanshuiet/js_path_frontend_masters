// function declaration
function teacher() {}
// function expression
var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
};
console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher);

// named function expression

// anonymous function expression
var clickHandler = function () {};

// named function expression -> uncommon and unfamous
var keyHandler = function keyHandler() {};

// prefer named function expression
/*
1.reliable function self-reference (recursion)
2.more debuggable stack traces.
3.more self-documenting code.
*/

// named function expressions vs anonymous arrow function

var ids = people.map((person) => person.id); // anonymous arrow function

var ids = people.map(function getId(person) {
  // named function expression
  return person.id;
});

getPerson()
  .then((person) => getData(person.id))
  .then(renderData);

getPerson()
  .then(function getDatFrom(person) {
    return getData(person.id);
  })
  .then(renderData);

// named (arrow) function expressions

var getId = (person) => person.id;

var ids = people.map(getId);

var getDataFrom = (person) => getData(person.id);

getPerson().then(getDataFrom).then(renderData);

// function types hierarchy

//(named) function declaration > named function expression > anonymous function expression

// function expression exercise

function getStudentById(studentId) {
  return studentsRecords.find(function matchId(record) {
    record.id == studentId;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentById);
  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) {
      return -1;
    } else if (record1.name > record2.name) {
      return 1;
    } else {
      return 0;
    }
  });

  records.forEach(function printRecord(record) {
    console.log(
      `${record.name} ${record.id}: ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
}

function paidStudentToEnroll() {
  var idsToEnroll = studentsRecords
    .filter(function needsToEnroll() {
      return record.paid && !currentEnrollments.includes(record.id);
    })
    .map(function getStudentId(record) {
      return record.id;
    });

  return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(function isUnpaid(studentId) {
    var record = getStudentById(studentId);
    return !record.paid;
  });

  printRecords(unpaidIds);
}

// arrow functions expressions

var getStudentById = (studentId) =>
  studentsRecords.find((record) => record.id == studentId);

var printRecords = (recordIds) =>
  recordIds
    .map(getStudentById)
    .sort((record1, record2) =>
      record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
    )
    .forEach((record) =>
      console.log(
        `${record.name} ${record.id}: ${record.paid ? "Paid" : "Not Paid"}`
      )
    );

var paidStudentToEnroll = () => [
  ...currentEnrollments,
  ...studentsRecords
    .filter((record) => record.paid && !currentEnrollment.includes(record.id))
    .map((record) => record.id),
];

var remindUnpaid = (recordIds) =>
  recordIds.filter((studentId) => !getStudentById(studentId).paid);
printRecords();
