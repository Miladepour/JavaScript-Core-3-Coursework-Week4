// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let newArry = numbers.filter(num => typeof num === "number") 
    return newArry.reduce((a,b) => {return a + b},0) / newArry.length
  }

module.exports = average;
