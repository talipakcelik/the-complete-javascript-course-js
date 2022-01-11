console.log("d");

class CarCl {
  constructor(make, speed) {
    this.marka = make;
    this.hiz = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} markalı araç ${this.speed} hızla gidiyor.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} markalı araç ${this.speed} hızla gidiyor.`);
  }

  get speedUS() {
    return this.hiz / 1.6;
  }

  set speedUS(sp) {
    this.hiz = sp * 1.6;
  }
  speed() {
    return this.hiz / 1.9;
  }
}

const ford = new CarCl("Ford", 120);

ford.speedUS = 50;
console.log(ford); // ana object
