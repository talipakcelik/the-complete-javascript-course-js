'use strict';

const [a, b, c] = [2, 5, 6];

const restaurant = {
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , second] = restaurant.categories;

const [starter, main] = restaurant.order(2, 0);

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//////////////////////
const { name, openingHours, categories } = restaurant2;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant2;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant2;
console.log(menu, starters);

///

let t = 111;
let l = 999;
const obj = { t: 23, l: 7, p: 14 };
///
// const {a, b} = obj; // olmaz
// let {a, b} = obj; // olmaz
// {a, b} = obj; // error

({ t, l } = obj);
console.log(t, l);

//////

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(fri, open, close);

///////

const restaurant3 = {
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`
    Sipariş alındı! 
    ${this.starterMenu[starterIndex]} ve ${this.mainMenu[mainIndex]} 
    ${address} adresine, 
    saat ${time}'da teslim edilecektir.
    `);
  },
};

restaurant3.orderDelivery({
  time: '22:30',
  address: 'bademlik mah. ankara',
  mainIndex: 2,
  starterIndex: 2,
});

const restaurant4 = {
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '14:50',
    address,
  }) {
    console.log(`
    Sipariş alındı! 
    ${this.starterMenu[starterIndex]} ve ${this.mainMenu[mainIndex]} 
    ${address} adresine, 
    saat ${time}'da teslim edilecektir.
    `);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Pastanızın içeriği isteğinize göre şu şekilde: ${ing1}, ${ing2}, ${ing3}`
    );
  },
};

restaurant4.orderDelivery({
  // time: '22:30',
  address: 'bademlik mah. ankara',
  // mainIndex: 2,
  // starterIndex: 2,
});

/////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

const ingredients = [
  // prompt('içinde ne istersiniz (1)?'),
  // prompt('İçinde ne istersiniz(2)?'),
  // prompt('İçinde ne istersiniz(3)?'),
];

restaurant4.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant4.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant4, founder: 'Guiseppe' };

///////// rest

// SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2);

// REST, because on LEFT side of =
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

//

const [pizza, , risotto, ...otherFood] = [
  ...restaurant4.mainMenu,
  ...restaurant4.starterMenu,
];

const { sat, ...weekdays } = restaurant2.openingHours;

const addArray = function (...numbers) {
  console.log(numbers);
};

addArray(2, 3);
addArray(2, 3, 6, 7, 8);

//// short circuiting
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2); //10

console.log('Hello' && 12 && null && 'jonas');

// restaurant.numGuests2 = 0;
// const guest3 = restaurant.numGuests2 ? restaurant.numGuests2 : 10;
// console.log(guest3); // 10

const guest4 = restaurant.numGuests2 || 10;
console.log(guest4); // 10

restaurant.numGuest3 = 0;
const guestCorrect = restaurant.numGuest3 ?? 10;
console.log(guestCorrect); // 0

/// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// for-of loop
const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu3) console.log(item);

for (const item of menu3.entries()) {
  console.log(item);
}

// enhanced obj literal
const hafta = ['pzt', 'sali', 'crşmba', 'prşmbe', 'cuma'];

const openingHours2 = {
  [hafta[1]]: {
    open: 12,
    close: 22,
  },
  [hafta[3]]: {
    open: 11,
    close: 23,
  },
  [hafta[4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// optional chaining
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant2.openingHours[day]?.open ?? 'closed';
  console.log(`${day} günü ${open} saatinde açığız.`);
}

const users = [{ name: 'talip', email: 'hello@talip.io' }];

console.log(users[0]?.name ?? 'User array empty');

/////// looping object

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `${properties.length} gün açığız. `;

for (const day of properties) {
  openStr += `${day} `;
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(
    `${day} günü ${open} saatinde açığız ve ${close} saatinde kapalıyız.`
  );
}

//////////// sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();

const staff = [
  'Garson',
  'Şef',
  'Bulaşıkçı',
  'Garson',
  'Garson',
  'Bulaşıkçı',
  'Garson',
];

const staffUnique = new Set(staff);
console.log(staffUnique); // {'Garson', 'Şef', 'Bulaşıkçı'}
console.log(staffUnique.size);

const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2); // ['Garson', 'Şef', 'Bulaşıkçı']

console.log(new Set('jonasschmedtmann').size);

//// maps

const rest = new Map();

rest.set('isim', 'Pidecim');
rest.set(1, 'Çankaya, Ankara');
console.log(rest.set(2, 'Keçiören, Ankara'));

rest
  .set('kategori', ['Kaşarlı', 'Kıymalı', 'Kuşbaşılı', 'Tahinli'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Açığız')
  .set(false, 'Kapalıyız');

console.log(rest.get('isim'));
console.log(rest.get(true));
console.log(rest.get(1));

////

const time = 2;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('kategori'));
rest.delete(2);
console.log(rest.size);
rest.clear();
console.log(rest.size); // 0

const arr3 = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest.get(arr));
console.log(rest.get(document.querySelector('h1')));

//// maps iteration

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//

const soru = new Map([
  ['soru', 'en iyi prog. dili hangisidir?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, "Try again'"],
]);

// app
console.log(soru.get('soru'));
for (const [key, value] of soru) {
  if (typeof key === 'number') console.log(`Cevap ${key}: ${value}`);
}

// const cevap = Number(prompt('Cevabınız nedir?'));
// console.log(cevap);

// console.log(soru.get(soru.get('correct') === cevap));

// working with string
const airline = 'TAP Air Portugal';
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(typeof new String('jonas')); // object
console.log(typeof new String('jonas').slice(1)); // string

// fixing capitalization

const yolcu = 'jOnAS'; // Jonas
const yolcuLowerCase = yolcu.toLowerCase();
const yolcuCorrect = yolcuLowerCase[0].toUpperCase() + yolcuLowerCase.slice(1);
console.log(yolcuCorrect);

// comparing emails

const email = 'hello@jonas.io';
const loginEmail = '     Hello@Jonas.Io \n';

const trimEmail = loginEmail.toLowerCase().trim();

/// replacing
const duyuru =
  'Bütün yolcular 23 numaralı kapı önüne. Tekrar ediyorum, 23 numaralı kapı.';

console.log(duyuru.replace('kapı', 'çıkış'));
console.log(duyuru.replaceAll('kapı', 'çıkış'));
console.log(duyuru.replaceAll(/kapı/g, 'çıkış'));

/// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('yeni Airbus ailesinin bir parçası');
}

const bagajKontrol = function (items) {
  const bagaj = items.toLowerCase();
  if (bagaj.includes('bıçak') || bagaj.includes('silah')) {
    console.log('Giriş yapamazsınız!');
  } else console.log('Hoşgeldiniz');
};

bagajKontrol('Laptop, Bıçak, ve İçeçiğim var');
bagajKontrol('çorap ve kamera');
bagajKontrol('atıştırmalık ve koruma için silah mevcut');

// split method
console.log('çok+güzel+bir+string'.split('+')); // array içerisine parçaladı
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Talip Akçelik'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName2('jessica ann smith davis'); // Jessia Ann Smith Davis

/// padding
const message = '23 numaralı otobüs hazır!';

console.log(message.padStart(30, '+').padEnd(40, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// repeat

const planesInLine = function (n) {
  console.log(`Havada ${n} uçak var ${'✈'.repeat(n)} `);
};
planesInLine(3);
planesInLine(5);
