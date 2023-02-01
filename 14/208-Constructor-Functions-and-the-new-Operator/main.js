"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  //   this.calcAge = function () {
  //     console.log(2034 - birthYear);
  //   };
};

const Jonas = new Person("Jonas", 1991);
console.log(Jonas);

// 1. New {} is created
//  2. function is called, this = {}
//  3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1980);

console.log(matilda, jack);

console.log(Jonas instanceof Person);
