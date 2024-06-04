const reverseString = function (string) {
  let reversedWord = ''
  // const wordsSplit = string.split('') // wordSplit = [h, e, l, l, o]
  for (let i = 0; i < string.length; i--) {
    reversedWord += string[i]
  }

  return reversedWord
}

// Do not edit below this line
module.exports = reverseString
