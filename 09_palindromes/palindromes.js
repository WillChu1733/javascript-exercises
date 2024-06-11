const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')
  let reversedString = cleanedString.split('').reverse().join('')
  if (reversedString == cleanedString) {
    return true
  } else return false
}

// Do not edit below this line
module.exports = palindromes
