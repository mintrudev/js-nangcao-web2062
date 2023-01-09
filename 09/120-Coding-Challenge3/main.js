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

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const event = [...new Set(gameEvents.values())];
console.log(event);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút`);

//  4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}:${event}`);
}
