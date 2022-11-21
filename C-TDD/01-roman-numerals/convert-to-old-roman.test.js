let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual("I");
});
test("returns III if passed 3 as an argument", function () {
  expect(convertToOldRoman(3)).toEqual("III");
});
test("returns VII if passed 7 as an argument", function () {
  expect(convertToOldRoman(7)).toEqual("VII");
});
test("returns XV if passed 15 as an argument", function () {
  expect(convertToOldRoman(15)).toEqual("XV");
});
test("returns XVIII if passed 18 as an argument", function () {
  expect(convertToOldRoman(18)).toEqual("XVIII");
});
test("returns XXII if passed 18 as an argument", function () {
  expect(convertToOldRoman(22)).toEqual("XXII");
});
