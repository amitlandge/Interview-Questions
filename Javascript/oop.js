console.log("OOP");

// What is OOP in JavaScript ?
class Student {
  constructor(name, age, hobbies) {
    (this.name = name), (this.age = age), (this.hobbies = hobbies);
  }
  _showInfo() {
    console.log(
      `My Name is ${this.name} . I am ${this.age} Years Old .My Hobbies Like ${this.hobbies}`
    );
  }
}
const stud1 = new Student("Amit", 24, "Cricket");
stud1._showInfo();

// here we have created simple class with the showInfo property

// how the constructor method works

//contructor method simple automatically call or execute when we create new instance of class

//in that we can assign parameter

// constructor  function;

// constructor function is speacial function which used to create and initialize the object
// blueprint of creating multiple object with same type
// ;

const Person = function (firstName, lastName) {
  (this.firstName = firstName), (this.lastName = lastName);
};

const person1 = new Person("Amit", "Landge");

console.log(person1);
// behind the scene
// when we call or execute the contructor function with new keyword its create new empty object
//this keyword point out the current object
// its automatically return {}

// lets talk about Prototype

// Prototype is an Object which contain some property and method
// when we create any object,array and class in that prototype object is exist

//here we are creating the method for Person Contructor Function
console.log(Person.prototype);
Person.prototype._showInfo = function () {
  console.log(`My Name is ${this.firstName} ${this.lastName}`);
};

person1._showInfo();
console.log(person1.__proto__, Person.prototype.constructor);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = +10;
};
const car1 = new Car("Suzuki", 10);
car1.accelerate();
console.log(car1);

Car.prototype.slowSpeed = function () {
  this.speed -= 5;
};
car1.slowSpeed();
console.log(car1);

// classes in oop

// classes is just synthetic sugar of object . blueprint of an object

class Emp {
  constructor(name, birthyear) {
    (this.name = name), (this.birthyear = birthyear);
    this.year = new Date().getFullYear();
  }
  calAge() {
    console.log(
      `Hii ${this.name} . You are ${this.year - this.birthyear} years old`
    );
  }
}
const emp1 = new Emp("Amit", 2000);
emp1.calAge();

// Adding getter and setter methods

// Getter and Setter methods in JavaScript classes

// Getters and setters are used to protect your data, particularly when creating classes.
// For example, suppose you want to create a class for a person.
// The class has two properties: name and age.
// You want to make sure that the age property is always a positive number.

class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a positive number");
    }
  }
}

const person = new Person2("John", 30);
console.log(person.name); // John
person.name = "Doe";
console.log(person.name); // Doe
person.age = 25;
console.log(person.age); // 25
person.age = -5; // Age must be a positive number

class Employee {
  constructor(name, position) {
    this._name = name;
    this._position = position;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty");
    }
  }

  // Getter for position
  get position() {
    return this._position;
  }

  // Setter for position
  set position(newPosition) {
    if (newPosition.length > 0) {
      this._position = newPosition;
    } else {
      console.log("Position cannot be empty");
    }
  }
  get info() {
    return this._info;
  }
  set info(info) {
    if (info) {
      this._info = info;
    }
  }
}

const emp2 = new Employee("Amit", "Manager");
console.log(emp2.name); // John
emp2.name = "Sumit";
console.log(emp2.name); // Doe
emp2.position = "Senior Manager";
emp2.info = "Developer";
console.log(emp2._info); // Senior Manager

// Object create

// let obj1 = {
//   name: "Amit",
//   age: "24",
// };
// let obj2 = {
//   info() {
//     console.log(this.name);
//   },
// };

// inheritance using constoctor function

const PerCl = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
PerCl.prototype.info = function () {
  console.log(`My name is ${this.firstName}`);
};
const person4 = new PerCl("Amit", "Landge");

person4.info();

const Stud3 = function (firstName, lastName, age) {
  PerCl.call(this, firstName, lastName);
  this.age = age;
};
Stud3.prototype = Object.create(PerCl.prototype);
const student4 = new Stud3("Sumit", "landge", 29);
console.log(student4);
student4.info();
