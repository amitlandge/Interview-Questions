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
console.log(person1.__proto__, Person.prototype);
