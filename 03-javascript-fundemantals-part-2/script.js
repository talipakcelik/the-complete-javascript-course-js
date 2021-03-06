/****************
 ******032******
 ************///

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

// const emeklilikHesaplama = (dogumYili, isim) => {
//   const yas = 2037 - dogumYili;
//   const emeklilik = 65 - yas;
//   return `${isim}, ${emeklilik} yıl sonra emekli olacak.`
// }

// console.log(emeklilikHesaplama(1995, "Talip"))


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

///

const yasHesaplama = function (dogumyili) {
  return 2037 - dogumyili
  // buraya return yas yazsam aynı mı olurdu acaba?
}

// const emeklilikHesaplama = function (dogumYili, isim) {
//   const yas = yasHesaplama(dogumYili);
//   const emeklilik = 65 - yas;
//   return emeklilik;
//   // return `${isim}, ${emeklilik} yıl sonra emekli olacak.`
// }


const emeklilikHesaplama = function (dogumYili, isim) {
  const yas = yasHesaplama(dogumYili);
  const emeklilik = 65 - yas;

  if (emeklilik > 0) {
    console.log(`${isim}, ${emeklilik} yıl sonra emekli olacak.`)
    return emeklilik;
  } else {
    console.log(`${isim}, zaten emekli olmuşsunuz. 🎉`)
    return -1
  }

  // return `${isim}, ${emeklilik} yıl sonra emekli olacak.`
}

console.log(emeklilikHesaplama(1950, "Talip"))


const friend1 = "Tugay";
const friend2 = "Anıl";
const friend3 = "Burak";

const friends = ["Tugay", "Anıl", "Burak"];
console.log(friends);

const year = new Array(1991, 1995, 2001, 2005);
console.log(year);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = "Tuba";
console.log(friends);

/**********************
 *****040 basic array operation****
 **********************/


const friends2 = ["Tugay", "Anıl", "Burak", "John"];

friends2[4] = "Nazmi";
console.log(friends2)


const newLength = friends2.push("İlker");
console.log(newLength)
console.log(friends2)

friends.unshift("Kâzım");


console.log(friends)
friends.pop();
const silinenEleman = friends.pop();
console.log(silinenEleman);
console.log(friends);

friends.shift();
console.log(friends); // sadece tugay kaldı. 

console.log(friends.indexOf("Tugay")); // 0

if (friends.includes("Filiz")) {
  console.log(`Filiz isimli bir arkadaşın var.`)
} else {
  console.log(`Filiz isimli bir arkadaşın yok.`)
}



/***************************
 *****043 dot vs bracket****
 ***************************/

const talip = {
  isim: "Talip",
  soyisim: "Akçelik",
  age: 2021 - 1995,
  job: "Öğrenci",
  friends: ["Micheal", "Peter", "Steven"]
};

console.log(`${talip.isim} has ${talip.friends.length} friends, and his best friend is called ${talip.friends[0]}.`)


/***************************
 *****044 objects method****
 ***************************/

const talip2 = {
  isim: "Talip",
  soyisim: "Akçelik",
  dogumYili: 1995,
  job: "Öğrenci",
  friends: ["Micheal", "Peter", "Steven"],
  //
  calcAge: function () {
    return 2021 - this.dogumYili;
  }

};


"use strict";
"use strict";

const talip3 = {
  isim: "Talip",
  soyisim: "Akçelik",
  dogumYili: 1995,
  job: "Öğrenci",
  friends: ["Micheal", "Peter", "Steven"],
  ehliyetiVarMi: true,
  //
  calcAge: function () {
    this.age = 2021 - this.dogumYili;
    return this.age;
  },
  //
  // getSummary: function () {
  //   return `${this.isim}, ${this.calcAge()} yaşında bir ${this.job}. Ayrıca ehliyeti ${this.ehliyetiVarMi ? "var" : "yok"
  //     }.`
  // }
};

// console.log(talip3.getSummary());


console.log(talip3);
console.log(talip3.age)


/***************************
 *****046 loop****
 ***************************/

for (let rep = 1; rep <= 10; rep++) {
  console.log("tekrar sayısı 1")
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`tekrar sayısı ${rep}`)
}


/***************************
 *****047 Looping Arrays, Breaking and Continuing****
 ***************************/

const birisi = [
  "ali",
  "veli",
  2021 - 1992,
  "doktor",
  ["remzi", "rifat", "reha"],
]

for (let i = 0; i < birisi.length; i++) {
  console.log(birisi[i])
}

// böyle yazarsam ali'yi 5 kere yazdırıyor. 




const birisi2 = [
  "ali",
  "veli",
  2021 - 1992,
  "doktor",
  ["remzi", "rifat", "reha"],
  true
]

types = [];

for (let i = 0; i < birisi2.length; i++) {
  console.log(birisi2[i], typeof birisi2[i]);

  types[i] = typeof birisi2[i]
}
console.log(types)


const yillar = [1985, 1995, 1972, 1994, 1989];
const yaslar = [];

for (let i = 0; i < yillar.length; i++) {
  yaslar.push(2021 - yillar[i]);
}

console.log(yaslar)


for (let i = 0; i < birisi.length; i++) {
  if (typeof birisi[i] !== "string") continue;

  console.log(birisi[i], typeof birisi[i])
}

/***************************
 *****048****
 ***************************/

for (let i = birisi.length - 1; i >= 0; i--) {
  console.log(i, birisi[i]);
}

//

for (let egzersiz = 1; egzersiz < 4; egzersiz++) {
  console.log(`-----egzersiz ${egzersiz} başladı.`)

  for (let tekrar = 1; tekrar < 6; tekrar++) {
    console.log(`egzersiz ${egzersiz}: ağırlık ${tekrar} kaldırıldı.`)
  }
}

/***************************
 *****049****
 ***************************/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`tekrar sayısı ${rep}`)
}



let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: tekrar sayısı ${rep}`);
  rep++;
}


///

let zar = Math.trunc(Math.random() * 6) + 1;

while (zar != 6) {
  console.log(`${zar} attınız.`)
  zar = Math.trunc(Math.random() * 6) + 1;
  if (zar === 6) console.log(`Loop durduruluyor. ${zar} geldi.`);
}







