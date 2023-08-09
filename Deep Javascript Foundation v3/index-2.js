// Polyfill for Object.is(..)

/*
1.Object.is(...) should take two parameters
2.It should return 'true' if the passed in parameter are exactly the same value (not just === ---) or false
3. For NaN testing we can use Number.isNaN() but first see if we can find a way to test without usages of any utility 
4.for -0 testing no built-in utility exist but here is a hint - infinity
5.If the parameters are any other values just test them for strict equality
6.you cannot use the buit in Object.is()
*/

if (!Object.is || true) {
  Object.is = function (x, y) {
    var xNegative = isNegZero(x);
    var yNegative = isNegZero(y);

   

    if (xNegative || yNegative) {
      return xNegative && yNegative
    }
    else if(isNaN(x) && isNaN(y)) {
        return true
    }
    else {
        return x === y
    }

    function isNegZero(v) {
      return v == 0 && 1 / v == -Infinity;
    }

    function isNaN(v) {
      return v !== v;
    }
  };
}

console.log(Object.is(0, -0));
