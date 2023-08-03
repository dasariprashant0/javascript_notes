/*
       Inheritance
---------------------------

Inheritance is the ability to create classes based on other classes. With Inheritance, we can define a parent class(with certain properties and methods) 
and then children classes that will inherit from the parent class all the properties and methods that it has.

*/

class Character {
  constructor(speed) {
    this.speed = speed;
  }

  move = () => console.log(`I'm moving at the speed of ${this.speed} !`);
}

class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }

  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with the power of ${this.power}`);
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed, species) {
    super(name, phrase, power, speed);
    this.species = "Alien";
  }

  fly = () => console.log(`ZZzzzzzzziiiiiiinnnnnngggggg`);
}

class Robot extends Enemy {
  constructor(name, phrase, power, speed, species) {
    super(name, phrase, power, speed);
    this.species = "Robot";
  }

  transform = () => console.log(`Optimus Prime`);
}

const alien1 = new Alien("Ali", "I'm Ali the Alien", 70, 50);
const alien2 = new Alien("Lien", "Run for your lives", 40, 60);
const robot1 = new Robot("Tito", "I can cook, swim & Dance", 125, 45);
const robot2 = new Robot("Terminator", "Hasta La Vista, baby!", 155, 56);
alien1.move()
alien2.attack()
robot1.move()
robot2.attack()

/*
Notes: Some Things to keep in Mind
------------------------------------

- A class can only have one parent class to inherit from. You can't extend multiple classes, though there are hacks and ways around it.

- You can't extend the inheritance chain as much as you want, setting parent, grandparent, great grandparent, etc.,

- If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.
*/