/*
         Getters And Setters
-------------------------------------------

- Getters and Setters are special methods in JavaScript classes that allow you to access and modify object properties in a controlled way.
- A Getter is a method that is used to get the value of a property. It is called without parenthesis and is accessed as if it were a property.
- A Setter is a method that is used to set the value of a property. It is called with a single argument and is also accesssed as if it were a property.
*/

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return (this._name = newName);
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = newAge;
  }
}

const person = new Person("John", 30);
console.log(person.name);
console.log(person.age);
person.name = "Jane";
person.age = 40;
console.log(person.name);
console.log(person.age);
// person.age = -10;

/*
Getters and Setters can also be used as access modifiers by defining a getter and setter for a property is accessed and modified from outside the class.
*/
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (typeof newBalance !== "number") {
      throw new Error("Invalid Balance");
    }
    this._balance = newBalance;
  }
}

const account = new BankAccount(10000);
console.log(account.balance);

account.balance = 20000;
console.log(account.balance);

// account.balance = "Invalid Balance";//Throws an ERROR
