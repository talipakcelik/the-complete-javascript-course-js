/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀 */

"use strict";

const calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3
}

// alternatif
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3+) / 3;
// tek satır olduğu için return yok, süslü parantez yok. 

const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins)

const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins kazandı. 🏆  (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas kazandı. 🏆 (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log(`Kazanan yok...`)
  }
}


checkWinner(avgDolphins, avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
console.log(avgDolphins2)

const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgKoalas2)


const checkWinner2 = function (avgDolphins2, avgKoalas2) {
  if (avgDolphins2 >= avgKoalas2 * 2) {
    console.log(`Dolphins kazandı.`)
  } else {
    console.log(`Koalas kazandı`)
  }// return console.log(`Koalas kazandı (${avgKoalas} vs. ${avgDolphins})`)
}
checkWinner2(avgDolphins2, avgKoalas2)