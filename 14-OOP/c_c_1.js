const Car = function (makeF, speedF) {
  this.make = makeF;
  this.speed = speedF;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} markalı araç ${this.speed} hızla gidiyor.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} markalı araç ${this.speed} hızla gidiyor.`);
};

car1.accelerate();
car1.accelerate();
car1.accelerate();

car2.brake();
car2.brake();
car2.brake();
