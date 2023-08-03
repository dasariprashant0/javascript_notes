/*
        Abstraction
-----------------------------

- Abstraction is the process of hiding complex implementation details of an object and exposing only the essential features or functionalities to the user.
- This is done to simplify the user's interaction with the object and to prevent them accessing or modifying its internal working, which can help to reduce errors and inprove security.
- Abstraction is about hiding the implementation details, but it does not prevent you from accessing them directly.

*/

class Car {
  constructor(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.engineOn = false;
    this.speed = 0;
  }

  startEngine() {
    this.engineOn = true;
    console.log("Engine Started.");
  }

  stopEngine() {
    this.engineOn = false;
    console.log("Engine Stopped.");
  }

  acclerate() {
    if (this.engineOn) {
      this.speed += 10;
      console.log(`Accelerating. Current speed is ${this.speed}mph.`);
    } else {
      console.log("Cannot accelerate. Engine is not running.");
    }
  }

  brake() {
    if (this.speed > 0) {
      this.speed -= 10;
      console.log(`Braking. Current Speed is ${this.speed}mph.`);
    } else {
      console.log("Cannot Brake. Car is already stopped.");
    }
  }

  start() {
    this.startEngine();
  }

  stop() {
    this.stopEngine();
  }

  getStatus() {
    return `${this.engineOn ? "Running" : "Stopped"} at ${this.speed} mph.`;
  }
}

const car = new Car("Toyota", "Camry", 2020, "Red", 25000);

car.start();

car.acclerate();

car.acclerate();

car.brake();

console.log(car.getStatus());

car.stop();
