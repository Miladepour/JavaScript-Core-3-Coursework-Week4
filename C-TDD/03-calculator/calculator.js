function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numberConvert = numbers.split(",").map(Number);
  if (numberConvert.some((num) => num < 0)) {
    return `negatives not allowed: ${numberConvert
      .filter((num) => num < 0)
      .join(",")}`;
  }
  return numberConvert.reduce((a, c) => c <= 1000 ? a + c : a + 0, 0);
}

module.exports = add;
