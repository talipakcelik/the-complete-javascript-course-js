"use strict";

// const calcTip = function (bill) {
//   if (50 < bill && bill < 300) {
//     const bahsisOrani1 = bill * .15;
//     console.log(`Bahşiş ${bahsisOrani} TL`);
//   } else {
//     const bahsisOrani2 = bill * .20;
//     console.log(`Bahşiş ${bahsisOrani2} TL`)
//   }
// }

const calcTip = function (bill) {
  if (50 < bill && bill < 300) {
    const bahsis1 = bill * .15;
    console.log(`Bahşiş ${bahsis1}`)
    return bahsis1;
  } else {
    const bahsis2 = bill * .20;
    console.log(`Bahşiş ${bahsis2}`)
    return bahsis2;
  }
}


const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
console.log(bills)

const total = [Number(bills[0]) + Number(calcTip(bills[0])), Number(bills[1]) + Number(calcTip(bills[1])), Number(bills[2]) + Number(calcTip(bills[2]))]
console.log(total) // önceden bills arrayını string olarak girmişim, bu yüzden Number()

const total2 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total2)



// return eklemeyince fonksiyona undefined hatası alıyordum vay vay