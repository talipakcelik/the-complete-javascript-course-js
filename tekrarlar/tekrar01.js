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

/////////////////////////////
/// Coding Challenge #3/////
////////////////////////////

markBMI = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

johnBMI = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const winner = function () {
  return markBMI.calcBMI() > johnBMI.calcBMI()
    ? console.log(`${markBMI.fullName}'ın (${markBMI.calcBMI()}) 
  değeri ${johnBMI.fullName}'in (${johnBMI.calcBMI()}) değerinden daha yüksek `)
    : console.log(`${johnBMI.fullName}'in (${johnBMI.calcBMI()}) 
  değeri ${
    markBMI.fullName
  }'ın (${markBMI.calcBMI()}) değerinden daha yüksek `);
};

/////////////////////////////
/// Coding Challenge #4/////
////////////////////////////

const calcTip3 = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}; // ternary operator ile

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2.push([calcTip3(bills2[i])]);
  total2.push(Number(bills2[i]) + Number(tips2[i]));
  console.log(
    `bill ${i} = ${bills2[i]}, 
  tip ${i} = ${tips2[i]}, 
  total ${i} = ${total2[i]}`
  );
}

// bonus

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr
    sum += arr[i];
    console.log(sum);
  }
  return sum / arr.length;
  //console.log(`${sum / arr.length}`);
};

console.log(calcAverage2(total2));

//////////////////////////////////
/// Developer Skills & Editor Setup////
/// Coding Challenge #1/////
////////////////////////////

const printForecast = function (arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str = str + ` ${i + 1}. gün ${arr[i]} derece ...`;
  }
  console.log("..." + str);
};

console.log(printForecast([12, 5, -5, 0, 4]));
