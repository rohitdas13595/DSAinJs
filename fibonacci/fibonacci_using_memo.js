//This fumction : recursion + memoziation

/**Time complexity O(N), Space O(N) */
const memo = {};
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return memo[n];
};

// this function uses arrray as memo;
var mem = [];
var fibRecursiveMem = function (n) {
    if (mem[n]) return mem[n];
    if (n<=2) mem[n] = 1;
    else {
        mem[n] = fibRecursiveMem(n-1) + fibRecursiveMem(n-2);
    }
    return mem[n];
}

console.log(fibonacci(40));
console.log(fibRecursiveMem(40))
