function displayPetCards() {
    let row = ""; //creating a var
    for (let i = 0; i < pets.length; i++) {
      //travel the array
      let pet = pets[i]; //getting each pet on the array (one by one)
      row += `
          <div class="pet">
              <h6>${pet.name}</h6>
              <p>${pet.age}</p>
              <p>${pet.gender}</p>
              <p>${pet.breed}</p>
          </div>
          `;
    }
    document.getElementById("pets").innerHTML = row; //display on the HTML
  }
  
  function displayTable() {
    let row = ""; //creating a var
    for (let i = 0; i < pets.length; i++) {
      //travel the array
      let pet = pets[i]; //getting each pet on the array (one by one)
      row += `
          <tr id="${i}">
              <td>${i}</td>
              <td>${pet.name}</td>
              <td>${pet.age}</td>
              <td>${pet.gender}</td>
              <td>${pet.breed}</td>
              <td><button class='btn btn-light border' onclick="deletePet(${i});">🗑️ Delete</button></td>
          </tr>
          `;
    }
    document.getElementById("petTable").innerHTML = row;
  }
  
  function displayPetCount() {
    document.getElementById("total").innerHTML = "Total:" + pets.length;
  }
  