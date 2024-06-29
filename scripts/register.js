console.log("register.js");

// Pet Registration:

// In the pets array, create 3 pets using object literals, each with the following properties:
// Name
// Age
// Gender
// Service
// Breed

// 2. Display Registered Pets Count:

// 3. Display Pet Names
// Create a JavaScript function that iterates through the pets array using a for loop.
// For each pet in the array, extract and display its name in the HTML. You can create an area in the HTML to list these names dynamically.

// 4. Styling and Content:

// Extra challenge: Create a function to calculate the average of the pet's ages.

let pets = [
  {
    name: "Scobby",
    age: 80,
    gender: "Male",
  },
  {
    name: "Scrappy",
    age: 70,
    gender: "Male",
  },
  {
    name: "Tweety",
    age: 85,
    gender: "Female",
  },
  {
    name: "Speedy",
    age: 82,
    gender: "Male",
  },
];

function displayPetCount() {
  //hint: length
  //pets
}

function displayNames() {
  document.getElementById("petList").innerHTML += `<li>${pets[0].name}`;
  document.getElementById("petList").innerHTML += `<li>${pets[1].name}`;
}

// Extra challenge
function calculateAverage() {}
