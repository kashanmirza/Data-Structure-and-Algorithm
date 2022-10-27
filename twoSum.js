function twoSum(n, target) {
  var obj = {};
  for (var i = 0; i < n.length; i++) {
    let sub = target - n[i];
    console.log(sub);
    console.log(obj);
    if (obj.hasOwnProperty(sub)) {
      console.log([i, obj[sub]]);
      return [i, obj[sub]];
    }
    obj[n[i]] = i;
  }
  return;
}

var nums = [2, 3, 4, 7, 2, 3];
var target = 11;
console.log("Result: ", twoSum(nums, target));
