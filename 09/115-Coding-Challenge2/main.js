"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Lewandowski",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
    ],
    [
      "Kobel",
      "Reus",
      "Karim-David Adeyemi",
      "Teddy Haller",
      "Hummels",
      "Hakimi",
      "Gotze",
      "Sancho",
      "Brandt",
      "Hazard",
      "Meunier",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Alaba", "Muller", "Lewandowski"],
  date: "Nov 9th, 2036",
  odds: {
    team1: 1.5,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd off ${teamStr} ${odd}`);
}
