let passVerifier = require("./pass-verifier");

test(" password is less than 8 characters", function () {
  expect(passVerifier("Code122")).toEqual("Password rejected");
});
test(" password is null", function () {
  expect(passVerifier("")).toEqual("Password rejected");
});
test("Does password have at least 1 uppercase letter", function () {
  expect(passVerifier("miladsss")).toEqual("Password rejected");
});
test("Does password have at least 1 number", function () {
  expect(passVerifier("miladsss")).toEqual("Password rejected");
});
test("Password accepted", function () {
  expect(passVerifier("Miladss1")).toEqual("Password accepted");
});
