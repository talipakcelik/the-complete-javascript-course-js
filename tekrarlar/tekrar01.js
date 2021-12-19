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
