"use strict";

class Person {
  constructor(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

class Student extends Person {
  university = "University of FPT";
  #studyHours = 0;
  #course;
  static numSubjects = 10;
  constructor(firstName, birthYear, startYear, course) {
    super(firstName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }
  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }
  #makeCoffee() {
    return "Here is a coffee for you ";
  }
  get testScore() {
    return this._testScore;
  }
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}
const student = new Student("Jonas", 2020, 2037, "Medicine");
console.log(student);
