// uses the varriable to find the no

/* Time O(N), Space O(1) */

var fibBottomUp2 = (n) => {
let first =0;
let second = 0;
  for (var i = 1; i <= n; i++) {
    if (i == 1) second = 1;
    else {
      var temp = second;
      second = first + second;
      first = temp;
    }
  }
  return second;
};

console.log(fibBottomUp2(8));
