var n = 5;
var k = 73;
var getSmallestString = function (n, k) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var i = 0;
  var ans = [];
  while (i < n) {
    ans[i] = alphabet[0];
    i++;
  }

  k = k - n;
  console.log("k : ", k, " n: ", n);
  var j = n - 1;
  console.log("j : ", j);
  while (k > 0) {
    if (k < 25) {
      ans[j] = alphabet[k];
      k = 0;
    } else {
      ans[j] = alphabet[25];
      console.log("k : ", k, " n: ", n);
      k = k - 25;
    }
    j--;
  }

  return ans.join('');
};

console.log("---- ", getSmallestString(n, k));

//result "aay"
