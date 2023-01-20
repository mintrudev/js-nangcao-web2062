"use strict";

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => {
    if (age <= 2) return age * 2;
    else return 16 + age * 4;
  });
  const adults = humanAges.filter((age) => age >= 18);

  const average = adults.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0);

  return average;
};
const calcAverageHumanAge = (age) =>
  age
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
