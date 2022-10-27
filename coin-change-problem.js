var assert = require("assert");

function coinChange(coins = [2, 3, 5], amount = 11) {
  // Each memo[i] is the least amount of coins
  // that can make the value equal to the index value.
  const memo = Array(amount + 1).fill(Infinity);
  console.log("1 - memo: ", memo);
  memo[0] = 0;
  console.log("2 - memo: ", memo);
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
      console.log("3 - i - coin: ", i - coin);

        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
        console.log("5 - memo[i]: ", memo[i], " | ", memo[i - coin] + 1);
      }
    }
  }
  console.log("6 - memo[amount] === Infinity ? -1 : memo[amount];: ", memo[amount] === Infinity ? -1 : memo[amount]);
  return memo[amount] === Infinity ? -1 : memo[amount];
}

try {
  assert.equal(coinChange([2, 3, 5], 11), 3);

  console.log("PASSED: " + "First Test: coinChange([2, 3, 5], 11)");
} catch (err) {
  console.log(err);
}

// try {
//   assert.equal(coinChange([2, 3, 5, 7], 17), 3);

//   console.log('PASSED: ' + 'Second Test: coinChange([2, 3, 5, 7]');
// } catch (err) {
//   console.log(err);
// }

// try {
//   assert.equal(coinChange([2, 3, 7], 15), 4);

//   console.log('PASSED: ' + 'Third Test: coinChange([2, 3, 7], 15)');
// } catch (err) {
//   console.log(err);
// }

// try {
//   assert.equal(coinChange([3, 5], 7), -1);

//   console.log('PASSED: ' + 'Fourth Test: coinChange([3, 5], 7)');
// } catch (err) {
//   console.log(err);
// }

// try {
//   assert.equal(coinChange([2, 3, 5], 1), -1);

//   console.log('PASSED: ' + 'Fifth Test: coinChange([2, 3, 5]');
// } catch (err) {
//   console.log(err);
// }
