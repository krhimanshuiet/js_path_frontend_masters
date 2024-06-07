// Prototypes
// Objects are built by constructor class via new
// a constructor call makes an object its own prototype.
// a constructor call makes an object linked to its own prototype.

// Prototypes: as classes
function WorkShop(teacher) {
  this.teacher = teacher;
}

WorkShop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};
var deepJs = new WorkShop("Kyle");
var reactJs = new WorkShop("Suzy");
console.log(WorkShop.__proto__ == Function.prototype); // true
console.log(WorkShop.prototype == deepJs.__proto__); // true
console.log(WorkShop.prototype.__proto__ == Object.prototype); // true
console.log(Function.prototype.__proto__ == Object.prototype); // true
console.log(Object.prototype.__proto__); // null
console.log(WorkShop.prototype.__proto__ == Function.prototype.__proto__); // true

deepJs.ask("It's prototype a class");
reactJs.ask("Isn't prototype a ugly");

// __proto__ -> dunder proto
console.log(deepJs.constructor == WorkShop); // true
console.log(deepJs.__proto__ == WorkShop.prototype); // true
console.log(Object.getPrototypeOf(deepJs) == WorkShop.prototype); // true

// shadowing prototypes

function WorkShop(teacher) {
  this.teacher = teacher;
}

WorkShop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new WorkShop("Kyle");

deepJS.ask = function (question) {
  this.__proto__.ask.call(this, question.toUpperCase());
};

deepJS.ask("Oops is this infinite recursion");

// prototypal inheritance -> object linked

function WorkShop(teacher) {
  this.teacher = teacher;
}

WorkShop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

function AnotherTeacher(teacher) {
  WorkShop.call(this, teacher);
}

AnotherTeacher.prototype = Object.create(WorkShop.prototype);
// instead of above we could do like this also , AnotherWorkshop.prototype.__proto__ = WorkShop.prototype

// Object.create -> create brand new object and links with the passed object
AnotherTeacher.prototype.speakUp = function (msg) {
  this.ask(msg.toUpperCase());
};
var JsRecentParts = new AnotherTeacher("Kyle");
JsRecentParts.speakUp("Is this actually inheritance??");

// classical vs prototypal inheritance -> not copy there is linkage

// Inheritance is delegation
// It is delegation system not a class system

// OLOO Pattern
// Object Linked to Other Objects Pattern

class WorkShop2 {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

var JsRecentParts = new AnotherTeacher("Kyle");
JsRecentParts.speakUp?.("Are classes getting better");

// under the hood it is doing prototypal
// OLOO Pattern delegated object
var WorkShop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  },
};

var AnotherWorkshop2 = Object.assign(Object.create(WorkShop), {
  speakUp(msg) {
    this.ask(msg.toUpperCase());
  },
});
var JsRecentParts = Object.create(AnotherWorkshop2);
JsRecentParts.setTeacher("Kyle");
JsRecentParts.speakUp("But is is not a cleaner??");

// Object.create()

if (Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
//Delegation-Oriented -> Design Pattern
