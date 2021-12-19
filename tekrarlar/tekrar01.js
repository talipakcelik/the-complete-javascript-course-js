/* 
##### JavaScript Fundamentals – Part 2
###### Coding Challenge #1

*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let ortDolphins = calcAverage(44, 23, 71);

let ortKoalas = calcAverage(65, 54, 49);
console.log(ortDolphins, ortKoalas);

const checkWinner = function (ortDolphins, ortKoalas) {
  if (ortDolphins > ortKoalas * 2) {
    console.log(`Dolphins kazandı. ${ortDolphins} vs. ${ortKoalas}`);
  } else if (ortKoalas > ortDolphins * 2) {
    console.log(`Koalas kazandı. ${ortKoalas} vs. ${ortDolphins}`);
  } else {
    console.log("Kazanan yok.");
  }
};

checkWinner(ortDolphins, ortKoalas);

/// test data set 2
ortDolphins = calcAverage(85, 54, 41);
ortKoalas = calcAverage(23, 34, 27);
console.log(ortDolphins, ortKoalas);

/////////////////////////////
/// Coding Challenge #2/////
////////////////////////////

const calcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};

const calcTip2 = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}; // ternary operator ile

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
