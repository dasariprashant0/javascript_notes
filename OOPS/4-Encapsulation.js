/*
         Encapsulation
----------------------------------
Encapsulation wraps the data variables and data methods together inside a single box.

It stands for an objects capacity to "decide" which information it exposes to "the outside" and which it doesn't.

Encapsulation is implemented through public and private properties.

*/
// Example 1
class Character {
  constructor(speed) {
    this.speed = speed;
  }

  move = () => console.log(`moving at the speed of ${this.speed}`);
}

class Alien extends Character {
  #birthYear;
  constructor(name, phrase, power, speed, birthYear) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
    this.#birthYear = birthYear;
  }
  fly = () => console.log(`ZZzzzzziiiiiiiiiinnnnnnngggggg`);
  howOld = () => console.log(`I am ${this.#birthYear} years old.`);
}

const alien = new Alien("Ali", "I am Ali !", 70, 50, 1000);
alien.howOld();
alien.fly();

// Example 2
class User {
  #password;
  name;
  constructor(name, userName, password) {
    this.name = name;
    this.#password = password;
    this.userName = userName;
  }

  login(userName, password) {
    if (userName === this.userName && password === this.#password) {
      console.log("Login Successfully");
    } else {
      console.log("Authentication Failed");
    }
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }
}

const prashant = new User("Prashant", "prashant_dasari", "password");
const js = new User("Javascript", "js", "python");
prashant.login("prashant_dasari", "password");
js.login("js", "python");
console.log(prashant.name);
console.log(prashant.password);
// console.log(prashant.#password);
prashant.setPassword("new_password");
prashant.login("prashant_dasari", "password");
prashant.login("prashant_dasari", "new_password");

// Example 3 with Private (# and _), public, getter and setter in Encapsulation.
class Person {
  #name;
  _age;
  address;
  constructor(name, age, address) {
    this.#name = name;
    this._age = age;
    this.address = "123 Main Street";
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    return (this._age = newAge);
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} & I am ${this.age} year's old.`
    );
  }
}

const person = new Person("John Doe", 30);
person.name = "Jane Doe";
console.log(person.name);
console.log(person.age);
person.age = 35;
console.log(person.age);
console.log(person.address);
person.greet();
