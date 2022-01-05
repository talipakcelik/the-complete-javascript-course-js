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

  orderPasta: function (ing1, ing2, ing3) {
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

///////// 106 rest

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
