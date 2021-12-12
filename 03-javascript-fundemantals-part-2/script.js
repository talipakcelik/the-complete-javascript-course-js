/****************
 ******032******
 ************///
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; /*normalde s yok*/
if (hasDriversLicense) console.log("Araba sürebilirim.");

/**********************
 *****033 Functions****
 **********************/

function meyveİmalatı(elma, portakal) {
  const meyveSuyu = `${elma} elmalı meyvesuyu ve ${portakal}
  portakallı meyvesuyu.`;
  return meyveSuyu;
}

/* burada fonksiyonu tanımladık. çalıştırmadık. */




const yeniMeyveSuyu = meyveİmalatı(3, 4);
console.log(yeniMeyveSuyu)
console.log(meyveİmalatı(3, 8))

/**********************
 *****033 Functions****
 **********************/


function YaşHesaplama1(doğumyılı) {
  return 2037 - doğumyılı;
}

const yaş1 = YaşHesaplama1(1991);


/**/

const YaşHesaplama2 = function (doğumyılı) {
  return 2037 - doğumyılı;
}

const yaş2 = YaşHesaplama2(1995);

console.log(yaş1, yaş2)