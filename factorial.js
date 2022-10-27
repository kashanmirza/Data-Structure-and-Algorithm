function factorial(n) {
  var result = 1;

  if (n === 0) return result;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

//result: 1 * 2 * 3 * 4 * 5 * 6
// console.log(factorial(7));

function recursiveFactorial(n) {
  if (n == 0) return 1;

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
