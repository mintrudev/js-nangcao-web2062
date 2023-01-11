"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(() => console.log("This will ALSO run again"))();

{
  const isPrivate = 23;
  var notPrivate = 45;
}
// console.log(isPrivate);
console.log(notPrivate);
