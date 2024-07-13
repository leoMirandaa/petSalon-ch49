// Create another page named services.html and create another form to register services (description, price).
// Create the constructor for the services objects.
//  Create validations and notifications for the new form using jQuery.
//  Clear the form after the registration of the services using jQuery.

// hidding validation messages
$(".descriptionValidationMesssage").hide()
$(".priceValidationMessage").hide()

// creating the constructor

function Service(description, price) {
  this.description = description;
  this.price = price;
}



// Do validations
function isValidService(service) {
  let isValidDescription = true;
  let isValidPrice = true;
  
  // description validation
  if(service.description == "") { //is empty?
    isValidDescription = false;
    $("#txtDescription").addClass("alert-error")
     $(".descriptionValidationMesssage").css("color","red").show()
  }else {
     $(".descriptionValidationMesssage").hide()
     $("#txtDescription").removeClass("alert-error")
    isValidDescription = true
  }
  
  // price validation
  if(service.price == "") {
    isValidPrice = false;
    $("#txtPrice").addClass("alert-error")
    $(".priceValidationMessage").css("color","red").show()
  }else {
    $(".priceValidationMessage").hide()
    $("#txtPrice").removeClass("alert-error")

    isValidPrice = true
  }

  return isValidDescription && isValidPrice
}

function register() {
  // getting description and price from inputs
  let inputDescription = $("#txtDescription").val();
  let inputPrice = $("#txtPrice").val()
  
  console.log("inputDescription: ", inputDescription);
  console.log("inputPrice: ", inputPrice);


  // create a new Obj
  let newService = new Service(inputDescription, inputPrice);
  console.log("isValid", isValidService(newService))
  
  if(isValidService(newService)){
    console.log("isValid", isValidService(newService))
    // saveService(newService)
    $("#txtDescription").val("");
    $("#txtPrice").val("")
    // $("input:text, input[type='number']").val("");

  }
}