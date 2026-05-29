const form = document.getElementById("form");

const success = document.getElementById("success");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  // INPUTS

  const firstName = document.getElementById("firstName");

  const lastName = document.getElementById("lastName");

  const email = document.getElementById("email");

  const message = document.getElementById("message");

  const checkbox = document.getElementById("checkbox");

  // RESET

  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  document.getElementById("checkbox-error").textContent = "";

  let valid = true;

  // FIRST NAME

  if (firstName.value.trim() === "") {

    showError(firstName, "This field is required");

    valid = false;
  }

  // LAST NAME

  if (lastName.value.trim() === "") {

    showError(lastName, "This field is required");

    valid = false;
  }

  // EMAIL

  if (email.value.trim() === "") {

    showError(email, "Please enter an email");

    valid = false;

  } else if (!validateEmail(email.value)) {

    showError(email, "Please enter a valid email");

    valid = false;
  }

  // MESSAGE

  if (message.value.trim() === "") {

    showError(message, "This field is required");

    valid = false;
  }

  // CHECKBOX

  if (!checkbox.checked) {

    document.getElementById("checkbox-error").textContent =
      "Please accept consent";

    valid = false;
  }

  // SUCCESS

  if (valid) {

    success.style.display = "block";

    form.reset();
  }

});

// SHOW ERROR

function showError(input, message) {

  const formGroup = input.parentElement;

  const error = formGroup.querySelector(".error");

  error.textContent = message;
}

// EMAIL VALIDATION

function validateEmail(email) {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}
const query = document.querySelector('input[name="query"]:checked');



if (!query) {

  document.getElementById("query-error").textContent =
    "Please select a query type";

  valid = false;
}