const FindMinimumNumberOfCoinsThatMakeAGivenValue = (
  Coins = [25,10,5],
  V = 30
) => {

  let length = Coins.length;
  var result = [];
  let res = Number.MAX_VALUE;
  if (V === 0) {
    return [0];
  }

  for (let C of Coins) {
    if (V === C) {
      return [C];
    } else if (V <= C) {
        FindMinimumNumberOfCoinsThatMakeAGivenValue(Coins, length-1, V)
        i
    }
  }
  return result;
};

console.log(FindMinimumNumberOfCoinsThatMakeAGivenValue());