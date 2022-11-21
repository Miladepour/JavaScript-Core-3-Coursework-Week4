let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  expect(removeVowelsFromWords(["irina", "etza", "daniel"])).toEqual(["rn", "tz", "dnl"]);
});


// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
