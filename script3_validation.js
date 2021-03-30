"use strict";

 //10. function of form + validation
 window.addEventListener("load", function () {
    //run validateName() when the button is clicked
    document.getElementById("submit").onclick = runSubmit;
    document.getElementById("name").oninput = validateName;
    document.getElementById("email").oninput = validateEmail;
    document.getElementById("budget").onchange = validateBudget;

    //4.b key event
    kDown();
  });
   function runSubmit() {
    validateName();
    validateEmail();
    validateBudget();
  }
   function validateName() {
    var name = document.getElementById("name");
    if (name.validity.valueMissing) {
       name.setCustomValidity("Name required!");
    }
    else {
      name.setCustomValidity(""); 
    }
  }
  function validateEmail() {
    var email = document.getElementById("email");
    if (email.validity.valueMissing) {
       email.setCustomValidity("Email required!");
    }
    else {
      email.setCustomValidity(""); 
    }
  }
  function validateBudget() {
    var budget = document.getElementById("budget");
    if (budget.validity.valueMissing) {
       budget.setCustomValidity("Budget required!");
    }
    else {
      budget.setCustomValidity("");
    }
  }
  //4.b
  function kDown(){
    document.getElementById("OtherAdd").onkeydown = function() {
      document.getElementById("OtherAdd").style.backgroundColor = "#FFDFD3";
    };
  }