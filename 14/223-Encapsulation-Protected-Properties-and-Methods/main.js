"use strict";

class Account {
  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getPin() {
    return this._pin;
  }
  getMovements() {
    return this._movements;
  }
  deposit(value) {
    this._movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }

  approveLoan(value) {
    return true;
  }
  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250)
// acc1._movements.push(-140)
acc1.deposit(250);
acc1.withdraw(-140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.getPin())