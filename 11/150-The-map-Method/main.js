"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map((value) => value * eurToUsd);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];
for (const value of movements) {
  movementsUSDfor.push(value * eurToUsd);
}
console.log(movementsUSDfor);
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
