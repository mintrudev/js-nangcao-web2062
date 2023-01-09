"use strict";

// Split and join
console.log("a+every+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = (name) => {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Jonas".padStart(23, "+").padEnd(30, "+"));

const maskCreditCard = (number) => {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(134151));
console.log(maskCreditCard(43333344343212));
console.log(maskCreditCard("44129988998981"));

// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(4));

const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${".".repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(8);
