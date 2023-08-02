/*
     Access Modifiers
--------------------------------------
In JavaScript, there is no built in syntax for declaring private and public members.
However, you can achieve similar functionality using several approaches.


Q. So What are Private and Public Member?
=> In OOP, Private and Public are access modifiers that determine whether class member can be accessed from outside the class or not.

*/

/*
1. Private: Private Members are only accessible from within the class itself.
   i) Using naming convention such as # or _ to indicate private member:
      In JavaScript, the '#'  symbol is used to declare private class fields, 
      while the underscore '_' is a naming convention that developers use to indicate that a property or method is intended to be private, but it doesn't actually prevent access to the property or method.

   ii) Using Closures to create private members: 
      In this approach, you use closures to create private members of a class or object.
      You define the private members of a class or object.
      You define the private members within constructor or a method of the class/object and they are accessible only within the scope of that method.   


2. Public: Public members can be accessed from outside the class using instance of the class. All class fields and methods are public by default.
*/

// Example of private and Public member

class Person {
  #name;
  age;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    return (this.#name = newName);
  }
}

const person = new Person("John", 30);
console.log(person.age);
console.log(person.name); // This should result in undefined.
person.name = "Jane";
console.log(person.name);