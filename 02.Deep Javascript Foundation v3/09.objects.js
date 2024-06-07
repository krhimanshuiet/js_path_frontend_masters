// Objects (Oriented)

/*
this
class {}
prototypes
inheritance vs behavior delegation
OO vs OLOO
*/

// this

/*
A function's this references the execution context for that call, 
determined entirely by "how the function was called".


A "this" aware function can thus have a different context each time its called,
which makes it more flexible and reusable.
*/

// dynamic scope
var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy";
  ask("Why");
}

otherClass();

// dynamic context ~= js dynamic scope

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };

  ask.call(myContext, "Why");
}

otherClass();

// four different ways to invoke the function.

// 1. implicit binding

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("what is implicit binding");

// 2. dynamic binding -> sharing

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do i share a method");
workshop2.ask("How do i share a method");

//3. explicit binding

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Suzy",
};

var workshop2 = {
  teacher: "Kyle",
};

ask.call(workshop1, "Can I explicitly set context?");
ask.call(workshop2, "Can I explicitly set context?");

// variation of explicit binding -> hard binding

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this"); // invokes in global window like cb.call(window,"Lost this") "cb -> callback passed in timeout" and in window object  we do not have teacher

// solution
setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this");

// new binding
// constructor calls

function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("what is new doing here");

/* new steps 
1.create a brand new empty object.
2.*link that object to another object.
3.call function with this set to the new object 
4. if function does not return an object  assume return this 
*/

// 4. default binding \

var teacher = "Kyle";
function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What the non-strict-mode default");
// askAgain("What the strict-mode default"); // type error

// binding precedence
var workshop = {
  teacher: "Kyle",
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
};

new (workshop.ask.bind(workshop))("What does this do");

/*
1. is the function called by y new?  if yes newly created obj will be this 
2. is the function called by call() or apply()? note -> bond() effectively uses apply
if yes context object passed will be this
3. is function called on a context object ? then that context obj will be this
4. default:if none default global object (except strict mode)
*/

// Arrow function and lexical this.

var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
  // ask:(question) => {
  //   console.log(this.teacher,question)
  // }
};

workshop.ask("is this lexical 'this'");

// in arrow function this just like a other variable so it resolves this lexically if not found in its own scope it goes into its parent scope.

// an arrow function is this-bound (aka.bind()) to its parent function -> not correct

// its not allowed to call arrow function with new

var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop.ask("what happened to this?");
workshop.ask.call(workshop, "what happened to this?");

// only use => arrow function when you need lexical this.

// this exercise

var deepJs = {
  currentEnrollment: [],
  studentRecords: [],
  addStudents(id, name, paid) {
    this.studentRecords.push({ id, name, paid });
  },
  enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      this.currentEnrollment.push(id);
    }
  },
  enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll();
  },
  printCurrentEnrollment() {
    this.printRecords(this.currentEnrollment);
  },
  remindUnpaidStudents() {
    this.remindUnpaid(this.currentEnrollment);
  },
  getStudentFromId(studentId) {
    return studentRecords.find(matchId);
    function matchId(record) {
      return record.id == studentId;
    }
  },
  printRecords(recordIds) {
    var record = recordIds.map(this.getStudentFromId.bind(this));

    records.sort(this.sortByNameAsc.bind(this));

    records.forEach(this.printRecord.bind(this));
  },
  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  },
  sortByNameAsc(record1, record2) {
    if (record1 < record2) return -1;
    else if (record1 > record2) return 1;
    else return 0;
  },
  paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(this.needToEnroll.bind(this));

    var idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));

    return [...this.currentEnrollment, ...idsToEnroll];
  },
  getStudentId(record) {
    return record.id;
  },
  needToEnroll(record) {
    return record.paid && !this.currentEnrollment.includes(record.id);
  },
  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
    this.printRecords(unpaidIds);
  },
  notYetPaid(studentId) {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  },
};

// ES6 class keyword

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Suzy");

deepJs.ask("Is class a class");
reactJs.ask("Is this class ok!!");

class AnotherWorkShop extends Workshop {
  constructor(teacher) {
    super(teacher);
  }
  speakUp(msg) {
    this.ask(msg);
  }
  ask(msg) {
    super.ask(msg.toUpperCase());
  }
}

var JsRecentParts = new AnotherWorkShop("Kyle");

JsRecentParts.speakUp("Are classes getting better?");
JsRecentParts.ask("Are classes getting better?");

setTimeout(deepJs.ask, 100, "Still losing this!!");

// fixing this

class Workshop1 {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => {
      console.log(this.teacher, question);
    };
  }
}

var deepJs = new Workshop1("Kyle");

setTimeout(deepJs.ask, 100, "is this fixed");

// class exercise

class Helpher {
  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  }
  sortByNameAsc(record1, record2) {
    if (record1 < record2) return -1;
    else if (record1 > record2) return 1;
    else return 0;
  }
}

class WorkShop extends Helpher {
  constructor() {
    super();
    this.currentEnrollment = [];
    this.studentRecords = [];
  }
  addStudents(id, name, paid) {
    this.studentRecords.push({ id, name, paid });
  }
  enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      this.currentEnrollment.push(id);
    }
  }
  enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll();
  }
  printCurrentEnrollment() {
    this.printRecords(this.currentEnrollment);
  }
  remindUnpaidStudents() {
    this.remindUnpaid(this.currentEnrollment);
  }
  getStudentFromId(studentId) {
    return studentRecords.find(matchId);
    function matchId(record) {
      return record.id == studentId;
    }
  }
  printRecords(recordIds) {
    var record = recordIds.map(this.getStudentFromId.bind(this));

    records.sort(this.sortByNameAsc.bind(this));

    records.forEach(this.printRecord.bind(this));
  }

  paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(this.needToEnroll.bind(this));

    var idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));

    return [...this.currentEnrollment, ...idsToEnroll];
  }
  getStudentId(record) {
    return record.id;
  }
  needToEnroll(record) {
    return record.paid && !this.currentEnrollment.includes(record.id);
  }
  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
    this.printRecords(unpaidIds);
  }
  notYetPaid(studentId) {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  }
}
