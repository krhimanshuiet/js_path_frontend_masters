"use strict";
// scope
/*
1.nested scope
2.hoisting 
3.closure
4.modules
*/
// scope -> where you look for things
x = 42;
console.log(x);

// js organizes scopes with functions and blocks

// (scope manager and compiler) and virtual machine (js engine ) which execute js code
var teacher = "kyle";
function otherClass() {
  var teacher = "Suzy";
  console.log(teacher);
}

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass();
ask();

// compilation by (compiler and scope manager)
// execution by js engine

/*
---- complier phase -----------
1. compiler to scope manager (global scope) -> hey scope manager have you heard of the marble called teacher , ans -> no
2. compiler created red marble called teacher and put inside red bucket.
3. compiler to scope manager (global scope) -> hey scope manager have you heard of the marble called otherClass , ans -> no
4. compiler created red marble called teacher and put inside red bucket.
5. o global scope (scope manager) this red marble is pointing to function we need a new bucket inside a bucket with blue color
6. hey scope of otherClass (scope manager) have you heard of the marble called teacher , ans -> no.
7. compiler created blur marble called teacher and put inside blue bucket.
8. compiler to scope manager (global scope) -> hey scope manager have you heard of the marble called ask , ans -> no.
9. compiler created red marble called ask and put inside red bucket.
10. o global scope (scope manager) this red marble is pointing to function we need a new bucket inside a bucket with green color.
11. hey scope of ask (scope manager) have you heard of the marble called question , ans -> no.
12. compiler created green marble called question and put inside green bucket.
------ execution ------- vm
13. hey global scope i have target ref for teacher have you heard -> yes
14. "kyle" is assigned to teacher.
15. hey global scope i have source ref for otherClass have you heard -> yes
16. goes inside the otherClass 
17. hey blue bucket  scope i have target ref for teacher have you heard -> yes
18. "suzy" is assigned to teacher.
19. ask will just execute like otherClass.
*/
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome");
}

otherClass();

teacher;
topic;

// nested scope

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  function ask(question) {
    console.log(teacher, question);
  }
  ask("why");
}

otherClass();
ask("????");

// reference -> target reference and source reference
// if there is target reference which is not available in scope it is autocreated but if the reference is source reference it will through a reference error.

// undefined and undeclared

var a;
a;
b;

// undefined -> variable exist but at the moment it doest not have value.
// undeclared -> never declared in the scope that we have access to.
