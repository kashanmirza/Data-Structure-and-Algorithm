const sumOfTwoIntegersInArray = (arr, val) => {
  const len = arr.length;
  let isPresent = false;

  for (let i = 0; i < len; i++) {
    const substractedVal = val - arr[i];
    if (arr.indexOf(substractedVal) > -1) {
      isPresent = true;
      break;
    }
  }

  return isPresent;
};

const arr = [1, 3, 4, 5, 6, 7],
  val = 7;
const arr1 = [1, 2, 4, 5, 6, 7],
  val1 = 6;
const arr2 = [1, 2, 4, 5, 6, 7],
  val2 = 240;

console.log(sumOfTwoIntegersInArray(arr, val));
