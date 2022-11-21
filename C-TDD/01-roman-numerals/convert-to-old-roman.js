function convertToOldRoman(number) {
  let roman = "";
  const romanNumList = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let a;
  for (let key in romanNumList) {
    a = Math.floor(number / romanNumList[key]);
    if (a >= 0) {
      for (let i = 0; i < a; i++) {
        roman += key;
      }
    }
    number = number % romanNumList[key];
  }
  return roman;
}

module.exports = convertToOldRoman;
