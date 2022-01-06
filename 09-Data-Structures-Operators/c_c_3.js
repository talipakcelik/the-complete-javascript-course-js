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

//1. task
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events); // şu an set, array değil

const eventsArray = [...new Set(gameEvents.values())];
console.log(eventsArray);

// 2. task
gameEvents.delete(64);

// 3. task
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`her ${time / gameEvents.size} dakikada bir olay yaşandı`);

// 4. task
for (const [key, value] of gameEvents) {
  if (key < 45) console.log(`[İLK YARI] ${key}: ${value}`);
  else console.log(`[İKİNCİ YARI] ${key}: ${value}`);
}

/// 2. yol (videodaki)
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "İLK" : "İKİNCİ";
  console.log(`[${half} YARI] ${min}: ${event}`);
}
