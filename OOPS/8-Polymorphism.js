/*
       Polymorphism
------------------------------

- Polymorphism is one of the core concepts of object-oriented programming language. Polymorphism means the same function with different signatures is called many times.
- In real life, For Example, a boy at the same time may be a student, class monitor, etc., So a boy can perform different operations at the same time. is called Polymorphism.                     


1|  Overloading / Function Overloading / Compile-time Polymorphism:
    - Overloading occurs when a class has two or more methods with same name But different parameters.
    - The method to be called is determined at compile time based on the number and types of arguments passed.

2|  Overriding / Method Overriding / Run-time Polymorphism:
    - Overriding on the other hand occurs when a subclass provides its own implementation of a method that is already defined in the parent class.
    - The method to be called is determined at Run-time based on the object's actual type.

*/

/*
1|  Ad-Hoc Polymorphism (Function Overloading):
    - Ad-Hoc Polymorphism, on the other hand is achieved through function overloading or operator overloading,
      allowing a function or operator to behave differently depending on the type or number of its argument.
    - The function or operatot has multiple implementation, each tailored to a specific typ or set of types.
    - For example, the '+' operator can be used to add numbers concatenate strings, and merge arrays ammong other things 
*/
function add(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a}${b}`;
  }
  return a + b;
}

console.log(add(1, 2)); //3
console.log(add("hello", "world")); //helloworld
console.log(add("hello", 2)); //hello2

/*
2|  Parametric Polymorphism (Generic Programming):
    - Parametric Polymorphism is achieved through the use of type variables or generic types, 
      allowing a function or data type to operate on values of any type without requiring knowledge of specific type at compile time.
    - The function or data type can written once and used with many different types, making it highly reusable.

*/
function printList(items) {
  items.forEach((item) => console.log(item));
}
const myArray = [1, 2, 3];
printList(myArray);
const myStrings = ["hello", "world"];
printList(myStrings);

/*
3|  Subtype Polymorphism / Inheritance Polymorphism / Method Overriding:
    - This type of Polymorphism refers to the ability of a subclass toprovide its own implementation of a method that is already defined in its parent class.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`Animal makes a Sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log(`Woof Woof !!!`);
  }
}

const myDog = new Dog("Rufus");
myDog.makeSound(); //Woof Woof !!! 

// now if comment the above the makeSound() function in Dog Class will be

myDog.makeSound(); //Animal makes a Sound.
