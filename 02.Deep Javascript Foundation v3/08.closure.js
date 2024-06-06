// closure
/*
closure is when a function "remembers" its lexical scope even 
when the function is executed outside that lexical scope.
PLSRD -> persistent lexical scoped referenced data
*/

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("what is closure");

function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("what is closure?");

myQuestion();

// closing over variables
var teacher = "Kyle";
var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";
myTeacher();
var i;
for (i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i ${i}`);
  }, i * 1000);
}

/* using let we can solve this, after each iteration new i 
declaration is done and prev value of i is assigned to new i and that new i gets closed over 
the timer function, so for each timer function different i is attached,
before that using var it was getting single variable i and that same i was getting attached to 
every timer function and so it was giving 4,4,4
*/
for (var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function () {
    console.log(`j ${j}`);
  }, i * 1000);
}
// so closure is preservation of a linkage to a variable not the capturing of value.

// module pattern
// namespace , not module
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("It this a module?");

// module -> data encaptulation, idea of visibility,data hiding
/*
Modules encapsulate data and behavior (methods) together.
The state (data) of a module is held by its method via closure.
*/

var workshop = (function Module(teacher) {
  var publicAPI = { ask };

  return publicAPI;
  function ask(question) {
    console.log(teacher, question);
  }
})("kyle");

workshop.ask("its a module,right?");

// module factory
function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}
var workshop = WorkshopModule("Kyle");

workshop.ask("Its a module,right?");

// es 6 modules and node js

// var teacher = "Kyle";

// export default function ask(question) {
//   console.log(teacher, question);
// }

// es 6 module syntax

// import ask from "workshop,mjs"; -> default named import

// ask("Its a default module import.");

// import * as Workshop from "workshop.mjs"; -> namespace import
// workshop.ask("its a namespace import");

function defineWorkshop() {
  var currentEnrollment = [];
  var studentRecords = [];
  var publicAPI = {
    addStudents,
    enrollStudent,
    enrollPaidStudents,
    printCurrentEnrollment,
    remindUnpaidStudents,
  };
  return publicAPI;

  function addStudents(id, name, paid) {
    studentRecords.push({ id, name, paid });
  }

  function enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      currentEnrollment.push(id);
    }
  }

  function enrollPaidStudents() {
    currentEnrollment = paidStudentsToEnroll();
  }

  function printCurrentEnrollment() {
    printRecords(currentEnrollment);
  }
  function remindUnpaidStudents() {
    remindUnpaid(currentEnrollment);
  }

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
}
