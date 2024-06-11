const getTheTitles = function (array) {
  const titles = []
  array.forEach((item) => {
    titles.push(item.title)
  })
  return titles
}

// Do not edit below this line
module.exports = getTheTitles

// array of objects, grab title
