// Destructuring
// decomposing a structure into its individual parts.
// TODO destructure:imperative
function getSomeRecords() {
  return [
    {
      name: "himanshu",
      email: "hks@gmail.com",
    },
    {
      name: "sonu",
      email: "sonu@gmail.com",
    },
  ];
}
var temp = getSomeRecords();
var first = temp[0];
var second = temp[1];
var firstName = first?.name;
var firstEmail = first?.email ?? "nobody@nine.tld";
var secondName = second?.name;
var secondEmail = second?.email ?? "nobody@nine.tld";
// TODO destructuring:declarative
var [
  { name: firstName, email: firstEmail = "nobody@none.tld" },
  { name: secondName, email: secondEmail = "nobody@none.tld" },
] = getSomeRecords();

// destructuring
// imperitive
function data() {
  return [1, [2, 6, 7, 8], 3, 4, 5, 6];
}

var tmp = data() || [];
var first = tmp[0];
var tmp2 = tmp[1];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);
// declarative
var first, second, third, fourth, first2, second2;
[first, [first2, second2] = [], third, ...fourth] = tmp = data() || [];
// desc is about assignment not declaration
var o = {};
[o.first, o.second, o.third, ...o.fourth] = data();
o;
var x = 10;
var y = 20;
{
  let temp = x;
  x = y;
  y = temp;
  x;
  y;
}
// swap
[y, x] = [x, y];

function data1([first, second, third]) {
  console.log(first, second, third);
  // var [first, second, third] = tmp;
}

// function data1([first, second, third] = []) {

// }

data1([10, 20, 30]);
