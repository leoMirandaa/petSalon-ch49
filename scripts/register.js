let pets = [];

//create the Pet Constructor
// parameters <--local variables-->
function Pet(n, a, g, b) {
  this.name = n;
  this.age = a;
  this.gender = g;
  this.breed = b;
}

function isValid(aPet) {
  let validation = true; //assuming the pet is valid

  if (aPet.name == "") {
    // is the name empty?
    //if the answer was yes, you will be executing this line
    alert("Please add a name to the pet");
    validation = false;
  }

  return validation;
}

function register() {
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;
  // create the obj
  let newPet = new Pet(inputName, inputAge, inputGender, inputBreed);

  if (isValid(newPet)) {
    //pushin the newpet to the array
    pets.push(newPet);
    displayTable(); //displaying the array
    displayPetCount(); // this is a function
    clearForm();
  }
}
function clearForm() {
  document.getElementById("txtName").value = "";
  document.getElementById("txtAge").value = "";
  document.getElementById("txtGender").value = "";
  document.getElementById("txtBreed").value = "";
}
// Extra challenge
function calculateAverage() {}

function deletePet(aPet) {
  console.log("Deleting pet ... " + aPet);
  document.getElementById(aPet).remove(); //removing from html
  pets.splice(aPet, 1); //remove from array
  displayTable();
  displayPetCount();
}

function init() {
  //the initialization function
  let pet1 = new Pet("Scooby", 99, "Male", "Dane");
  let pet2 = new Pet("Scrappy", 99, "Male", "Dane");
  let pet3 = new Pet("Tweety", 99, "Male", "Dane");
  pets.push(pet1, pet2, pet3);
  displayPetCount();
  displayTable();
}

window.onload = init; //waiting for render the HTML
