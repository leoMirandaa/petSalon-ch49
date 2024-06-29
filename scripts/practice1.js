console.log("Practice1.js");

let globalVariable = "Im global variable";
let globalVariableTwo = "Im global variable two";

function myFunction() {
  let localVariable = "Im local variable";
  let newVariable = "Im new variable";

  // This function can access globalVariable
  console.log(globalVariable);
  console.log(localVariable);
  console.log(newVariable);
  console.log(globalVariableTwo);
}

console.log(globalVariable);
// console.log(localVariable); -> this is not working because is not global varible
// console.log(newVariable); -> this is not working because is not global varible
console.log(globalVariableTwo);

// Invoking myFunction()
// myFunction();

console.log("-------------");
console.log("Arrays");
// An array is a special variable, which can hold more than one value

// Declaring 1 variable by 1
// let user1 = "Leo";
// let user2 = "John";
// let user3 = "Roy";
// let user4 = "mark";

// Syntax
//                    0      1      2     3
// let arrayName = [item1, item2, item3, item4, ...];

//..index ... 0      1       2       3
let users = ["Leo", "John", "Roy", "Mark"];
console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users.length); //length = property, contains the length

// Creating a new array
let colors = [];
// Providing the elements
colors[0] = "Blue";
colors[1] = "Red";
colors[2] = "Pink";
colors[3] = "Green";
colors[4] = "Gray";

console.log(colors);
console.log(colors[2]);
console.log(`I have ${colors.length} colors`);

let myArray = ["Car", 22, true, 3.1416, "Purple"];
console.log(myArray);
console.log(myArray[3]);
console.log("I have " + myArray.length + " Items");

// OBJECTS LITERALS
console.log("-------------");
console.log("Objects literals");

// Is a specific type of value in JavaScript that can have connections with other values
/* An Objects literal usually consists of a list of comma-separated 
name-value pairs (property:value), wrapped inside curly braces*/

/* Syntax

let objectName = {
  property: value,
  property: value,
  ...
}

*/

let student = {
  name: "John",
  lastName: "Doe",
  age: 30,
  email: "john@gmail.com",
};

let student2 = {
  name: "Jennifer",
  lastName: "Ortega",
  age: 40,
  email: "jennifer@gmail.com",
};

let student3 = {
  name: "Peter",
  lastName: "Parker",
  age: 18,
  email: "peter@gmail.com",
};

// Access to obj properties
console.log(student.name);
console.log(student.lastName);
console.log(student.age);
console.log(student.email);

console.log(`Hello I am ${student.name} ${student.lastName}`);

console.log(student2.email);
console.log(student3.lastName);

// define an array of objects
// way 1.........  0        1         2
let students = [student, student2, student3];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

console.log(students[2].email);

// way 2
let newStudents = [
  {
    name: "John",
    lastName: "Doe",
    age: 30,
    email: "john@gmail.com",
  },

  {
    name: "Jennifer",
    lastName: "Ortega",
    age: 40,
    email: "jennifer@gmail.com",
  },

  {
    name: "Peter",
    lastName: "Parker",
    age: 18,
    email: "peter@gmail.com",
  },
];

console.log(newStudents);
