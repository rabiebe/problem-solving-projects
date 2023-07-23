import "./styles.css";
//i want to test git
var maximumWealth = function (accounts) {
  let richest = 0;
  for (let i = 0; i < accounts.length; i++) {
    const element = accounts[i];
    let sum = calculSum(element);
    richest = Math.max(richest, sum);
  }
  return richest;
};

var calculSum = (numbers) => {
  return numbers.reduce((a, b) => a + b);
};

let result = maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);

console.log(result);
