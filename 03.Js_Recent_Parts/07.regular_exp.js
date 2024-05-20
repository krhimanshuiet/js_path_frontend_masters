// regular expressions [es-2018]

//look ahead
var msg = "Hello World";

console.log(msg.match(/(l.)/g));
console.log(msg.match(/(l.)$/g));
console.log(msg.match(/(l.)(?=o)/g));
console.log(msg.match(/(l.)(?!o)/g));

// look behind
console.log(msg.match(/(?<=e)(l.)/g));
console.log(msg.match(/(?<!e)(l.)/g));

// named capture groups

console.log(msg.match(/.(l.)/));

console.log(msg.match(/([jkl])o Wor\1/));

console.log(msg.match(/(?<cap>l.)/).groups);

console.log(msg.match(/(?<cap>[jkl])o Wor\k<cap>/));

console.log(msg.replace(/(?<cap>l.)/g, "-$<cap>-"));

console.log(
  msg.replace(/(?<cap>l.)/g, function re(...args) {
    var [, , , , { cap }] = args;
    return cap.toUpperCase();
  })
);

var msg = `The quick brown fox jumps over the lazy dog.`;

console.log(msg.match(/brown.*over/));

console.log(msg.match(/brown.*over/s));

// exercise

function* powers(poem) {
  var re = /(?<=power of)(?<thing>(?:a)?\w+).*?(?<=can)(?<verb>\w+) /gs;
  var match;
  while ((match = re.exec(poem))) {
    let {
      groups: { thing, verb },
    } = match;
    yield `${thing}:${verb}`;
  }
}

var poem = `
The power of a gun can kill and the power
of fire can burn the power of wind can chill
and the power a mind can learn the power of anger can rage inside un till it tears
u apart but the power of a smile especially yours can heal frozen heart`;

for (let power of powers(poem)) {
  console.log(power);
}
