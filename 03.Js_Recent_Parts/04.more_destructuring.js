// destructuring : named arguments

function lookupRecord1(store = "person-records", id = -1) {}

function lookupRecord2({ store = "person-records", id = -1 }) {
  console.log(id, store);
}

lookupRecord2({ id: 42 });

// destructuring and restructuring

var defaults = {
  url: "http://some.base.url/api",
  method: "post",
  headers: ["Content-Type:text/plain"],
};

console.log(defaults);

var settings = {
  url: "http://some.other.url",
  data: 42,
  callback: function (resp) {},
};

// ajax(_.extend({},defaults,settings));

const c = Object.assign({}, defaults, settings);
c;

var d = { ...defaults, ...settings };
d;

function ajaxOptions({
  // destructuring
  url = "http://some.base.url/api",
  method = "post",
  data,
  callback,
  headers: [headers0 = "Content-Type:text/plain", ...otherHeaders] = [],
} = {}) {
  return {
    // restructuring
    url,
    method,
    data,
    callback,
    headers: [headers0, ...otherHeaders],
  };
}

// with no arguments,return the defaults
// as an object if necessary
var defaults = ajaxOptions();

console.log(defaults);

var settings = {
  url: "http://some.other.url/",
  data: 42,
  callback: function (resp) {},
};

// ajax(ajaxOptions(settings))

// exercise

// var defaults = {
//   topic: "JavaScript",
//   format: "Live",
//   slides: {
//     start: 0,
//     end: 100,
//   },
// };

// fakeAjax("http://get-the-workshop.tld", handleResponse);


function handleResponse({
  topic = "JavaScript",
  format = "Live",
  slides: { start = 0, end = 100 },
  ...otherProperties
} = {}) {
  TestCase({topic,format,slides:{start,end},...otherProperties});
}

function TestCase(data) {
  console.log(
    data.topic == "JS Recent Parts" &&
      data.format == "Live" &&
      data.slides.start == 0 &&
      data.slides.end == 77
  );
}
