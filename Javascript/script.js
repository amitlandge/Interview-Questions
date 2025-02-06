//JavaScript Interview Questions
console.log("JavaScript Interview Questions");

// 1. What is JavaScript?
// JavaScript is a client-side and server-side scripting language developed by Netscape that derives much of its syntax from C.
// It can be used across multiple web browsers and is considered essential for developing interactive or animated web functions.
// 1)Javascript is a high-level, interpreted programming language.
// 2)It is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
// 3)JavaScript supports object-oriented, imperative, and declarative styles.
// 4)Javascript invented in 1995 by brendan eich . firstly javascript introduced the name as mocha after livescript

//2) Javascript Variable ?
// There are two type of javascript variable
// 1)Global Scope and Local Scope
let globalScopeVariable = "Global";

//Global scope variable lies in outermost part of code . its not lies in inside any scope

{
  let localScope = "Local";
}
//Here you Can see the scope of localScope lies in and Accessible in that only perticular scope

// here the deffernce between both scope

//3) Javascript Data Type
// There are two type of data type exit in javascript
// Primitive and Non-Primitive
// here the example of primitive data type
//1)string :- Represent the sequence of character
const str = "My String";

//2)Number :- Represent the Numeric number
const num = 123;

//3) boolean :- Represent Boolean value either true or false
const isValid = true || false;

console.log(isValid);

//undefined:- Represent undefined value
let myname;
console.log(myname);

//null:-Represent Null Value eg . absence of vaue
let myName = null;

// these are the main type of primitive data type

// Non-Primitive Data Type or Data Structure of Javscript
//There are three main Non- Primitive Data
//1)Object :-Object is standalone entity of javscript, its consist of key and value pair
const myInfo = {
  name: "Amit ",
  age: 24,
};
//2)Array :- Array is collection of element or collection of similiar value or defferent also
const myarray1 = ["amit", 23, true, "Playing Cricket"];
const myarray2 = ["Jan ", "Feb ", "March"];

//3)Regex :- Its respresent regular Expression like . regex is used for validate the string

// WE Will Discuss this in later cource

//
/*
5)JavaSCript Operator 

Javascript operator is nothing but symbols which perform some operation with the help of operands

1) Arithmetic Operator

includes +, -, * , / ,% , ++,--

Arithmetic Operator is just do the arithmetic operation such like addition , substraction 

*/

const addition = 2 + 2 + 5;
const subtraction = 10 - 5;
const multipication = 7 * 4;
let divide = 10 / 5;

console.log(divide);

console.log(addition);

// javascript comparision operator

// includes ==,===,!==,>,<,>=,<=

//comparision perator compare two operands and return true or false value

const compare = typeof 10 == typeof 20;
const compare1 = "2" == 2;
const compare2 = 10 > 20;
const compare3 = 10 <= 40;
const compare4 = 10 != 20;
console.log(compare4);
console.log(compare3);
// we will discuss later about type coersion and type conversion
console.log(compare1);
console.log(compare);

// bitwise operator

// bitwise operator performe bitwise operation

const bit = (10 === 10) | (20 === 30);

const bit2 = ~1;
console.log(bit2);

// logical operator
// logical operator
// includes &&, ||, !

const logicalAnd = true && false; // false
const logicalOr = true || false; // true
const logicalNot = !true; // false

console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);

//assignment operator
//Assignment operator allow us to assign value in variable

let add = 2 + 2;
let sub = 20 - 10;
let multi = 10 * 2;
multi *= 3;
add += 10;
add += 20;
sub -= add;
console.log(sub);
console.log(multi);
console.log(add);

// Javascript Speacial operator add more feature in javascript

//conditional operator

const age = 20;
const result = age < 15 ? "You Are Child" : "Your Are Adult";
console.log(result);

//delete operator
const myInfor = {
  name: "Amit",
  age: 24,
};

delete myInfor.name;
console.log(myInfor);
const newInstance = new Object();
const array = new Array();
console.log(array);
console.log(newInstance);
const myfun = () => {
  void 0;
};
console.log(myfun());

//conditional statement
// we use if else and if else if else for check the condition if condition is true then do some
//operation niether do another operation

if (myInfor.name === undefined) {
  console.log("Yess its true");
} else {
  console.log("Noo");
}
// if conditional statement is more than 2 then we use if else if statement

if (myInfor.name === "Amit") {
  console.log("My name is Amit");
} else if (myInfor.name === undefined) {
  console.log("My name is undefined");
} else {
  console.log("My name is nothing");
}

//if conditional statements is more so we use switch statement

const month = "Jan";

switch (month) {
  case "Jan":
    console.log("January");
    break;
  case "Feb":
    console.log("Feb");
    break;
  case "March":
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;
  default:
    break;
}

//loops

// we use loop opoeration to interate every element for fix number of time

// for loop
const array1 = ["amit", "sumit"];
let element = [];
for (let index = 0; index < array1.length; index++) {
  element += array1[index] + "1";
}
console.log(element);

// while
let mynum = 2;
while (mynum < 10) {
  console.log(mynum);
  mynum++;
}
console.log(mynum);

// do while

// do while run the code at once if its is condition is false
const val = false;
do {
  console.log("hello My name is Amit");
} while (val === true);

const myArr = ["Jan", "Feb", "March", "April"];

// console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// for (let key of myArr) {
//   console.log(key);
// }

// what does loop ?
// its make interation of every element of array and object

//

// for (i = 0; i < 4; i++) {
//   console.log(i);
//   for (j = 4; j < 6; j++) {
//     console.log(j);
//     for (k = 6; k < 9; k++) {
//       console.log(k);
//     }
//   }
// }

// const obj10 = {
//   name: "Amit",
//   age: 24,
//   hobbies: ["Playing Cricket ", "Singing"],
// };
// for (let key in obj10) {
//   console.log(obj10[key]);
// }
