"use strict";

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedmann",
  passport: 2312452524,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "MR." + passenger.name;
  if (passenger.passport === 2312452524) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // In the same as doing...
// const flightNum = flight;
// const passenger = jonas;
const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);
