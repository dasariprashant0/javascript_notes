/*

         Object Oriented Programming(OOP)
-----------------------------------------------------------------
Q. What is OOP (Object-Oriented Programming)?
=> OOP is a programming paradigm that believes in grouping data(properties) and methods(actions) together inside a box. 
   It demonstrates the pattern of real-world objects.

// NOTE: 
Javascript is not object oriented programming language. 
Neither it is a completely a functional Programming language, Javascript is a prototype-based procedural language. 
It supports both functional and object-oriented programming languages.


Q. What is an Object?
=> An Object is a data structure containing properties and methods.

Example: Consider a student, A student will have characteristics like name, roll number, and class, & he will perform and action. Let's say, giving an exam. 
         In Object Oriented Programming, these characterstics are called data variables. These actions are called data methods.

         We create a class called Student and then create instances of this class. These instances are called Objects. Hence, an object is a real instance of a class.
         Class is nothing but a prototype/blueprint.

         John Smith is an instance of an object created using the class Student.

*/

//1. Using Object Literal
const student = {
  first_name: "Mary",
  last_name: "Green",
  display_fullname: function () {
    return `${this.first_name} ${this.last_name}`;
  },
};
// console.log(student.display_fullname()); //Mary Green

//2. Using Object Constructor
class studentTwo {
  // Creating a Constructor Function
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.display_fullname = function () {
      return `${first_name} ${last_name}`;
    };
  }
}

// Creating instances for the constructor function
const student1 = new studentTwo("Mary", "Green");
const student2 = new studentTwo("Lary", "Smith");
// console.log(student1.display_fullname()); //Mary Green   Lary Smith

//3. Using Object.create() method
const studentThree = {
  first_name: "Mary",
  last_name: "Green",
  display_fullname: function () {
    return `${studentThree.first_name} ${studentThree.last_name}`;
  },
};

const student3 = Object.create(studentThree);
student3.last_name = "Smith";

// console.log(student3.display_fullname());

/*

Q. What is Class?
=> Classes are blueprint of an object. A class can have many objects because the class is a template while objects are instances of the class or the concreate implementaion.
   JavaScript is a prototype-based language and it doesn't have classes in it. We define the templates for objects using constructor functions or prototypes.
   The keyword class in JavaScript is actually a syntactic sugar over the prototype-based inheritance, which is already present and supported in JavaScript.

*/

//1. Traditional Way
class Vechile {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    console.log(`This name of is ${this.name}`);
  }
}

let bike1 = new Vechile("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vechile("Ninja", "Kawasaki", "1000cc");

console.log(bike1.name);
console.log(bike1.getDetails());
console.log(bike2.maker);

// 2. Mordern Way
class Vechile1 {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}`;
  }
}

let bike3 = new Vechile1("Hayabusa", "Suzuki", "1340cc");
let bike4 = new Vechile1("Ninja", "Kawasaki", "998cc");

console.log(bike3.name);
console.log(bike4.name);
console.log(bike3.getDetails());
