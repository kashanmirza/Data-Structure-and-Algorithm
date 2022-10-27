function fibSeries(n) {
  let n1 = 0;
  let n2 = 1;
  if (n === 0) return n1;
  if (n === 1) return n2;

  let temp = 0;

  for (var i = 1; i < n; i++) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  return temp;
}

//result: 1,1,2,3,5,8
console.log(fibSeries(6));

function recusiveFibSeries(n) {
  if (n <= 2) return 1;
  return recusiveFibSeries(n - 1) + recusiveFibSeries(n - 2);
}

//result: 1,1,2,3,5,8
console.log(recusiveFibSeries(6));

function recusiveFibSerieswithMemoization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = recusiveFibSerieswithMemoization(n - 1, memo) + recusiveFibSerieswithMemoization(n - 2, memo);
  return memo[n];
}

//result: 1,1,2,3,5,8
console.log(recusiveFibSerieswithMemoization(6));
