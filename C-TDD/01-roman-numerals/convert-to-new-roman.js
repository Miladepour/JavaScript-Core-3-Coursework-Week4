function convertToNewRoman(number) {
  let roman = "";
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
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

module.exports = convertToNewRoman;
