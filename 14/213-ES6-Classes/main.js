"use strict";

// class expression
// const PersonCl = class {}

//  class declaration
class PersonCl {
  constructor(FirstName, birthYear) {
    this.FirstName = FirstName;
    this.birthYear = birthYear;
  }

//   Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.FirstName}`);
  };
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.FirstName}`);
// };
jessica.greet();

// 1. Classes are Not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
