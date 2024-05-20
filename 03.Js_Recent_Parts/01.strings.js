// Strings

//Template Strings (Interpolated Literals)

// Interpoliterals
var mname = "Himanshu";
var email = "krhimanshu@gmail.com";
var title = "Student";
var msg =
  "Welcome to the class! Your" +
  title +
  " is " +
  mname +
  ", contacts " +
  email +
  " .";
msg;

var newMsg = `Welcome to the class your ${mname} contacts ${email}.`;
newMsg;

console.log(typeof newMsg);

var amount = 12.3;

function formateCurrency(strings, ...values) {
  strings;
  values;
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += `$${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}
var Message = formateCurrency`The total for your order is ${amount}`; // tagged function
Message;

// advance interpolation

function logger(string, ...values) {
  string;
  values;
  console.log(string.length);
  var str = "";
  for (let i = 0; i < string.length; i++) {
    if (i > 0) {
      i;
      if (values[i - 1] && typeof values[i - 1] == "object") {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            str += values[i - 1].stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(values[i - 1]);
            continue;
          } catch (error) {}
        }
      }
      str += values[i - 1];
    }
    str += string[i];
  }
  console.log(str);
  return str;
}
var v = 42;
var o = { a: 1, b: [1, 2, 3, 4] };
const s = logger`This is my value: ${v} and another: ${o}`;
s;

// exercise

function upper(strings, ...values) {
  strings
  values
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if(i > 0){
      str += String(values[i-1]).toUpperCase();
    }
    str += strings[i]
  }
  return str
}
var myname = "KYLE",
  twitter = "GETIFY",
  topic = "JS recent parts";

console.log(
  upper`Hello ${myname} (@${twitter}), welcome to ${topic}` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS"
);

// String Padding and String Trimming

var str = "Hello";

const s1 = str.padStart(5); s1
const s2 = str.padStart(8); s2
const s3 = str.padStart(8,"*"); s3
const s4 = str.padStart(8,"12345"); s4
const s5 = str.padStart(8,"ab"); s5
const s6 = str.padEnd(5); s6
const s7 = str.padEnd(8); s7
const s8 = str.padEnd(8,"*"); s8
const s9 = str.padEnd(8,"12345"); s9
const s10 = str.padEnd(8,"ab"); s10

var str2 = "  some stuff \t\t";

const s11 = str2.trim(); s11
const s12 = str2.trimStart(); s12
const s13 = str2.trimEnd(); s13
