// equality == vs ===

// == checks value  ?
// === checks value and type (strict) ?

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

console.log(studentName1 == studentName2);
console.log(studentName1 == studentName2);

console.log(workshopEnrollment1 == workshopEnrollment2);
console.log(workshopEnrollment1 === workshopEnrollment2);

// when the types match == and === are similar

var workshop1 = {
  name: "Deep Js Foundation",
};
var workshop2 = {
  name: "Deep Js Foundation",
};

console.log(workshop1 == workshop2);
console.log(workshop1 === workshop2);

// true definition is

// == allows coercion (types different)
// === disallows coercion (types same)

console.log(null == undefined);

var workshop1 = { topic: null };
var workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined)
) {
  console.log("hello");
}

// or

if (workshop1.topic == null && workshop2.topic == null) {
  console.log("hello");
}

var workshopEnrollment1 = 16;
var workshopEnrollment2 = "16";

if (Number(workshopEnrollment1) === Number(workshopEnrollment2)) {
  console.log("hello");
}
// or
if (workshopEnrollment1 == workshopEnrollment2) {
  console.log("hello");
}
var workshopCount1 = 42;
var workshopCount2 = [42];

console.log(workshopCount1 === workshopCount2);
console.log(workshopCount1 == workshopCount2);

/* == summary
if the types are the same do === 
if null or undefined: equal
if non primitives:ToPrimitive
prefer:ToNumber
*/

// corner cases ==

console.log([] == ![]);

/*
1.[] == false (negate the [])
2."" == false (coerced to string due to ToPrimitive)
3.0 == false  (coerced to number due ToNumber)
4.0 == 0 (same)
5.true
*/
console.log([] != []);

console.log([] == true);
console.log([] == false);

// use == but avoid these things

/*
1.== with 0 or ""(even " ")
2.== with non primitives 
3.== true or == false :allow ToBoolean or use == 
*/

// The case for preferring  ==
/*
1. == is not about comparisons with unknown types.
2. == is about comparisons with known types,optionally where conversions are helpful

3.If you know the types in a comparison
a.if both types are the same  == is identical to ===
so ,using === would be unnecessary so prefer the shorter ==
b.if the types are different using one === would be broken 
prefer the more powerful == or do not compare at all
c.if types are different the equivalent of one == would be two (or more) === (slower ) prefer the faster single ==
d.if the types are different (two or more ) === comparisons may distract the reader  prefer the cleaner single ==
e.summary whether the types match or not == is the more sensible choice.
4.if you do not know the types in comparison.
a.not knowing the types means not fully knowing that  code.
so beats to refactor so you can know then types.
b.the uncertainty of not knowing types should be obvious to reader.
the most  obvious signal is use === 
c. not knowing the types is equivalent to assuming type conversion
because of corner cases, the only  safe choice is ===.
d.summary if you can not or will not use known and obvious types === is the only reasonable choice.
e.even if === would always be equivalent to == in your code using it everywhere sends a wrong semantic signal
: protecting myself since i do not know/trust the types.
f.summary making types known and obvious leads to better code.if types are known == is best 
otherwise fall back to ===.
*/

// equality exercise

function findAll(match, arr) {
  let ret = [];
  for (let v of arr) {
    console.log(v);
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      ret.push(v);
    } else if (typeof match == "boolean" && typeof v == "boolean") {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "string" &&
      match.trim() != "" &&
      typeof v == "number" &&
      !Object.is(v, -0)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "number" &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match == v) {
        ret.push(v);
      }
    }
  }
  return ret;
}

const ret = findAll(null, [undefined, null, { a: 1 }, [3, 4], 45, true, false]);
ret;
