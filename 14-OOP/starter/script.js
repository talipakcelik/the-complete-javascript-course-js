'use strict';

const Person = function (firstName, birthYear) {
  this.ilk = firstName;
  this.ikinci = birthYear;

  // never add this
  //   this.calcAge = function () {
  //     console.log(2037 - this.ikinci);
  //   };
};

const jonas = new Person('Jonas', 1995);
console.log(jonas);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.ikinci);
};

jonas.calcAge();

console.log(jonas.__proto__ == Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, jonas.species);
console.log(jonas.hasOwnProperty('species'));

const arr = [3, 6, 4, 4, 2, 2, 1, 4, 5, 6];
console.log(arr.__proto__);
console.log((arr.__proto__ = Array.prototype));

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

/// class
// const PersonCl = class {};

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.isim = firstName;
//     this.dogumYili = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.dogumYili);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);

// getter and setter

const account = {
  owner: 'Jonas',
  movements: [200, 520, 145, 875],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// account.latest(55) değil
account.latest = 55;
console.log(account.movements);

class PersonCl {
  constructor(firstName, birthYear) {
    this.isim = firstName;
    this.dogumYili = birthYear;
  }

  calcAge() {
    console.log(2037 - this.dogumYili);
  }

  set isim(name) {
    console.log(name);
    if (name.includes(' ')) this._isim = name;
    else alert(`${name} is not a full name!`);
  }

  get isim() {
    return this._isim;
  }
}

const jessica = new PersonCl('Jessica Alan', 1996);
console.log(jessica);
const walter = new PersonCl('Walter aa', 1854);
console.log(walter);

/// Object.creat()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.dogumYili);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.isim = 'Steven';
steven.dogumYili = '2002';
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.dogumYili);
  },

  init(firstName, birthYear) {
    (this.isim = firstName), (this.dogumYili = birthYear);
  },
};

const sarah = Object.create(PersonProto2);
sarah.init('Sarah', 2004);
console.log(sarah);
