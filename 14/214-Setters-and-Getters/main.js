"use strict";

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.fullName}`);
  };
  get age() {
    return 2037 - this.birthYear;
  }
  //  Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const walter = new PersonCl("Walter White", 1965);
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica.age);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.splice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);
