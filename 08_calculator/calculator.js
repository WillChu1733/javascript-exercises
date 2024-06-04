const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const sum = function (arr) {
  return arr.reduce((accumulator, a) => accumulator + a, 0)

  // function add(accumulator, a) {
  //   return accumulator + a
  // }
}

const multiply = function (arr) {
  return arr.reduce((multiply, a) => multiply * a)
}

const power = function (num1, num2) {
  return num1 ** num2
}

const factorial = function () {}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
