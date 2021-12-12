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

// function meyveİmalatı(elma, portakal) {
//   const meyveSuyu = `${elma} elmalı meyvesuyu ve ${portakal}
//   portakallı meyvesuyu.`;
//   return meyveSuyu;
// }

/* burada fonksiyonu tanımladık. çalıştırmadık. */




// const yeniMeyveSuyu = meyveİmalatı(3, 4);
// console.log(yeniMeyveSuyu)
// console.log(meyveİmalatı(3, 8))

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


/**********************
 *****034 Functions****
 **********************/


const YaşOrtalaması3 = dogumyili => 2037 - dogumyili;
const yas3 = YaşOrtalaması3(2001);
console.log(yas3)


// YaşOrtalaması3(2002);
// console.log(YaşOrtalaması3(2002))

// const emeklilikHesaplama = dogumyili => {
//   const yas = 2037 - dogumyili;
//   const emeklilik = 65 - yas;
//   return emeklilik;
// }

// console.log(emeklilikHesaplama(1995));

///

const emeklilikHesaplama = (dogumYili, isim) => {
  const yas = 2037 - dogumYili;
  const emeklilik = 65 - yas;
  return `${isim}, ${emeklilik} yıl sonra emekli olacak.`
}

console.log(emeklilikHesaplama(1995, "Talip"))


///
const meyveDilimle = function (fruit) {
  return fruit * 4;
}

function meyveImalati(elma, portakal) {
  const elmaDilimleri = meyveDilimle(elma);
  const portakalDilimleri = meyveDilimle(portakal);
  const meyveSuyu = `${elmaDilimleri} dilimli elmalı meyvesuyu ve ${portakalDilimleri} dilimli portakallı meyvesuyu.`;
  return meyveSuyu;
}

console.log(meyveImalati(4, 2))