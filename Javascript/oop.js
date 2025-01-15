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
