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
