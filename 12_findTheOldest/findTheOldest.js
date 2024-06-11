const findTheOldest = function (people) {
  let oldestPerson = people[0]
  let maxAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth

  for (let i = 0; i < people.length; i++) {
    const person = people[i]
    const age = person.yearOfDeath - person.yearOfBirth
    if (age > maxAge) {
      oldestPerson = person
      maxAge = age
    }
  }
  return oldestPerson
}

// Do not edit below this line
module.exports = findTheOldest

// {person 1} {person 2}
// let oldest = people[0]
// loop over people
// if people[0] < people[1]
// people[1] = oldest
