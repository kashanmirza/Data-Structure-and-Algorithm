const trailingZeros = (n) => {
  let res = 0;
  for (i = 5; i <= n; i=i * 5) {
    res = res + n / i;
  }
  console.log(res)
  return res;
};

console.log(trailingZeros(25));
