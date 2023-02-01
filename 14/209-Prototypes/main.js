"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1980);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2034 - this.birthYear);
};
Jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(Jonas.__proto__);
console.log(Jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(Jonas.species, matilda.species);

console.log(Jonas.hasOwnProperty("firstName"));
console.log(Jonas.hasOwnProperty("species"));
