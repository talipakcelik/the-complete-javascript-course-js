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

class PersonCl {
  constructor(firstName, birthYear) {
    this.isim = firstName;
    this.dogumYili = birthYear;
  }

  calcAge() {
    console.log(2037 - this.dogumYili);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
