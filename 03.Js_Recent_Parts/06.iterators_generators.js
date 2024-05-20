// iterators (es-2006/es-2015)

var str = "hello";
var world = ["w", "o", "r", "l", "d"];
var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// imperative
for (
  let it = str[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done && (v = result.value || true);

) {
  console.log(v);
}

//declarative
var it = "Hello"[Symbol.iterator]();
for (let v of it) {
  console.log(v);
}
var letters = [..."hello"];

letters;
// imperative approach
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};

for (const iterator of obj) {
  console.log(iterator);
}
console.log([...obj]);

// declarative approach
// generators

function* main() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

var it = main();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log([...main()]);

var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

console.log([...obj]);

var numbers = {
  *[Symbol.iterator]({ start = 0, end = 0, step = 1 } = {}) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  },
};

for (let num of numbers) {
  console.log(num);
}

console.log(
  `My lucky numbers are ${[
    ...numbers[Symbol.iterator]({
      start: 6,
      end: 30,
      step: 4,
    }),
  ]}`
);
const c = [...numbers[Symbol.iterator]({ start: 0, end: 50, step: 4 })];
c;
