"use strict";

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => {
    if (age <= 2) return age * 2;
    else return 16 + age * 4;
  });
  const adults = humanAges.filter((age) => age >= 18);

  //   const average =
  //     adults.reduce((acc, age) => {
  //       return acc + age;
  //     }, 0) / adults.length;
  const average = adults.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0);
  console.log(humanAges);
  console.log(adults);
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
