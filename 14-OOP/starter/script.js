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
