// object destructuring

function data() {
  return { a: 1, b: { x: 20, y: 30 }, c: 3, d: 4 };
}
var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

var first, second, third, fourth, fifth;
({
  a: first,
  b: { x: second = 90, y: third },
  c: fourth,
  ...fifth
} = data() || {});

var o = {
  prop: (value = 90),
  target: (source = 100),
};

var { prop: value, source: target } = o;

function getData() {
  return { a: 1, b: { c: 2, d: 3 } };
}

var tmp = getData() || {};
var a = tmp.a;
var b = tmp.b || {};
var c = b.c;
var d = b.d;

var { a: first = 34, b: { c, d } = {} } = getData() || {};

var o1 = {
  a: {
    b: 2,
    c: 3,
  },
};

var o2 = {
  a: {},
};

var o3 = {};

var { a: { b = 10, c = 20 } = { b: 10, c: 20 } } = o1;

function myData(temp) {
  var { a, b } = temp;
}

function myData({ a, b } = {}, x) {}

myData({ a: 1, b: 2 }, 50);

// Nested Object and Array Destructuring.

var obj = {
  a: 1,
  b: {
    x: 10,
    y: 20,
  },
  c: [500, 5000],
};

var {
  a,
  b: b,
  b: { x, y },
  c: [z, w] = [],
} = obj || {};

const uselocation = {
  pathname:"dksdks",
  search:"searcg",
  hash:"abcd",
  state:null,
  key:"xyz"
}

uselocation

const {state} = uselocation
