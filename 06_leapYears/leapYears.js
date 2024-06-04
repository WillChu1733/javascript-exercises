const leapYears = function (year) {
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    return true
  } else if (year % 4 == 0 && year % 100 == 0) {
    return false
  } else if (year % 4 == 0) {
    return true
  } else return false
}

// Do not edit below this line
module.exports = leapYears

// divisible by 4 = true
// divisible by 100 = false
// divisible by 400 = true
