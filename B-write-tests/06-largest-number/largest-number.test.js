let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let arrOne = [3, 21, 88, 4, 36];
  let input = getLargestNumber(arrOne);
  let output = 88;
  expect(input).toBe(output)
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
