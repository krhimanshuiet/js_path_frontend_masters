// typescript flow and type-aware linting

// benefits
/*
1.catch type-related mistakes.
2.communicate type intent.
3.provide IDE feedback.
*/

// caveats
/*
1.referencing is best-guess,not a guarantee.
2.annotations are optional
3.any part of the application that in not typed introduce uncertainty.
*/

//inferencing
var teacher: string = "kyle";
// teacher = {
//   name: "kyle",
// };

type student = { name: string };

function getName(studentName: student): string {
  return studentName.name;
}

var firstStudent: student = { name: "Frank" };
var firstStudentName: string = getName(firstStudent);

var studentName: string = "Frank";

// var studentCount: number = 16 - studentName;

// typescript - pros and cons

/* props
1.they makes types more obvious in code.
2.familiarity they look like other language type systems.
3.extremely popular these days.
4.they are very sophisticated and good at what they do.
*/

/* cons
1.they use non-js standard syntax (or code comments).
2.they require a build process which raises the barrier to entry.
3.their sophistication can be intimidating to those without prior formal types experience.
4.they focus more on static types (variables and parameter,return,properties etc) than value types.
*/

// understanding types

/*
1.js has a dynamic type system which uses various forms of coercion for value type conversion including equality comparisons.
2.however the prevailing response seems to be avoid as much of the system as possible and use === to protect from needing to worry about types.
3.part of the problem with avoidance of the whole swath of js ,like pretending === saves you from needing to know types,is that it tends to systemically perpetuate bugs.
4.you simply can not write quality js programs without knowing the types involved  in your operations.
5.alternatively many choose to respect this is avoidance of the different short
5.many claim that js type system is too difficult for newer devs to learn and that static types are (somehow) more learnable.
*/
