"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Jonas");
lufthansa.book(635, "Jonas Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

// Does NOT work
// book(23,'Sarah Willa')

// Call method
book.call(eurowings, 23, "Sarah willa");
console.log(eurowings);

book.call(lufthansa, 239, "Harry bot");
console.log(lufthansa);

const swiss = {
  airline: "Swiss",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 156, "Mary cute");
console.log(swiss);

// Apply method

const flightData = [534, "Mary sko"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
