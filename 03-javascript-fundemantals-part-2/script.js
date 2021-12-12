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