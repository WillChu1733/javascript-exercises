const sumAll = function (num1, num2) {
  let finalSum = 0
  let small = Math.min(num1, num2)
  let large = Math.max(num1, num2)
  for (let i = small; i <= large; i++) {
    finalSum += i
  }

  if (finalSum < 0 || (typeof num1 && typeof num2 !== 'number')) {
    return 'ERROR'
  }

  return finalSum
}

// Do not edit below this line
module.exports = sumAll
