// deep js foundation
// motivations ?

var x = "5";
x = x + 1;
x;

var y = "5";
y++;
y;

// x++ means
function plusplus(orig_x) {
  var orig_x_coerced = Number(orig_x);
  x = orig_x_coerced + 1;
  return orig_x_coerced;
}

var x = "5";
plusplus(x);
x;

// course overview 

