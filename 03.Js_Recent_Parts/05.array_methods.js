// array methods -> includes (es-2016) , findIndex,find (es-2006), flat (es-2019),flatMap (es2019)

var arr = [{ a: 1 }, { a: 2 }];

const res1 = arr.find(function match(v) {
  v;
  console.log(v && v.a > 1);
  return v && v.a > 1;
});
res1;
// {a:2}

const res2 = arr.find(function match(v) {
  return v && v.a > 10;
});
res2;
// undefined
const res3 = arr.findIndex(function match(v) {
  return v && v.a > 10;
});
res3;
// -1

// old
var arr = [10, 20, NaN, 30, 40, 50];
var i = arr.indexOf(30) != -1;
i;
var j = ~arr.indexOf(20);
j;
var k = ~arr.indexOf(NaN);
k;

// new
// es-2016

var a = [10, 20, NaN, 30, 40, 50];

console.log(arr.includes(20));
console.log(arr.includes(60));
console.log(arr.includes(20, 3));
console.log(arr.includes(10, -2));
console.log(arr.includes(40, -2));
console.log(arr.includes(NaN));

var nestedValues = [1, [2, 3], [[]], [4, [5]], 6];

console.log(nestedValues.flat(0));
console.log(nestedValues.flat());
console.log(nestedValues.flat(2));

const x = [1, 2, 3].map(function tuples(v) {
  return [v * 2, String(v * 2)];
});
x;

const y = [1, 2, 3]
  .map(function tuples(v) {
    return [v * 2, String(v * 2)];
  })
  .flat();
y;

const z = [1, 2, 3].flatMap(function all(v) {
  return [v * 2, String(v * 2)];
});
z;

const w = [1, 2, 3, 4, 5, 6].flatMap(function doubleEvents(v) {
  if (v % 2 == 0) {
    return [v, v * 2];
  } else {
    return [];
  }
});
w
// [2,4,4,8,6,12]

