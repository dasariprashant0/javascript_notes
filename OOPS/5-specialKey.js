/*
The 'extends' and 'super' Keyword
----------------------------------------

The 'extends' Keyboard
-----------------------
- The 'extends' keyword is self-explantory, It is used to extend the capability of another class.
- The 'extends' keyboard is used in javascript to create a subclass or child class from a parent class.
- This allows you to inherit properties and methods from the parent class, and then extend or modify them in the child class. 
- The child class can add its own properties and methods as well as overide or replace those from the parent class.
*/

// This example shows both 'extends' and 'super' keybord
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Tommy");
dog.speak(); //Tommy barks

/*
In this example, we have a parent class 'Animal' with a 'speak' method. 
The 'Dog' class extends 'Animal' using the 'extends' keyword and class the parent constructor with the 'super' keyword. 
The 'Dog' class also overrides the 'speak' method to make the dog bark instead of making a generic animal noise.
*/

/*
The 'super' Keyboard
-----------------------
- The 'super' Keyboard is used to call the constructor and methods of the parent class from the child class.
- It is also used to pass arguments to the parent constructor if necessary.

For example, if you have a child class with its own constructor, you can call the parent constructor using 'super' like this:
*/
class ParentClass {
  constructor(name) {
    this.name = name;
  }
  //add method and properties here.
}

class childClass extends ParentClass {
  constructor(name, age) {
    super(name); //Call the parent constructor with name parameter
    this.age = age;
  }
  //add other methods and properties here. 
  //if there is a method present in the ParentClass. This method will override the ParentClass method.
}


/*
In this example, the 'childClass' constructor takes two arguments: 'name' and 'age'.
The 'super(name)' call initializes the 'name' property using the parent constructor, and the 'age' property is initialized in the child constructor.
*/