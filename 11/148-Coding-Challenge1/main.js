"use strict";

const checkDogs = function (dogsJulia, dogKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.splice(1,3);
  const dogs = dogsJuliaCorrected.concat(dogKate);
  console.log(dogs);

  dogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is 5 years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
