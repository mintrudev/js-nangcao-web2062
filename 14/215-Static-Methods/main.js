"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1980);

Person.hey = function () {
  console.log("Hey there <3");
  console.log(this);
};
Person.hey();

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
  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}
PersonCl.hey();
