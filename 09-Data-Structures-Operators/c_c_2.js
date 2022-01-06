const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
///////////////////////////////////////
const entries = Object.entries(game.scored);

for (const [gol, name] of entries) {
  console.log(`Goool ${Number(gol) + 1}: ${name}`);
}

for (const [gol, name] of game.scored.entries())
  console.log(`Goool ${gol + 1}: ${name}`);
///////////////////////////////////
const entries2 = Object.entries(game.odds);

let average = 0;
for (const [team, odd] of entries2) {
  console.log(team, odd);
  average += odd;
  const averageTeam = average / entries2.length;
  console.log(averageTeam);
} /// 3.693

const odds = Object.values(game.odds);
let average2 = 0;
for (const odd of odds) average2 += odd;
average /= odds.length;
console.log(average); // 3.693

///////////////////////////////////

for (const [team, odd] of entries2) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
} // önemli
