function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Reset previous error messages
  resetErrors();

  // Get form values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Simple validation checks
  if (username.trim() === "" || username.length < 3 || username.length > 25) {
    displayError(
      "usernameError",
      "Username must be between 3 and 25 characters."
    );
  }

  if (email.trim() === "" || !isValidEmail(email)) {
    displayError("emailError", "Please enter a valid email address.");
  }

  if (password.length < 8 || !isValidPassword(password)) {
    displayError(
      "passwordError",
      "Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 special character."
    );
  }

  if (confirmPassword !== password) {
    displayError("confirmPasswordError", "Passwords do not match.");
  }

  // If there are no errors, you can submit the form or perform further actions
  if (document.querySelectorAll(".error").length === 0) {
    alert("Signup successful!");
    // Here, you might want to submit the form using AJAX or other methods
  }
}

function isValidEmail(email) {
  // Simple email validation regex
  var emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password validation regex
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

function displayError(id, message) {
  var errorElement = document.getElementById(id);
  errorElement.innerHTML = message;
}

function resetErrors() {
  var errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.innerHTML = "";
  });
}

document
  .getElementById("signupForm")
  .addEventListener("submit", validateForm());
