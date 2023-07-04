function validateForm() {
  var emailInput = document.getElementById("email");
  var messageElement = document.getElementById("message");
  var checkElement = document.getElementById("check");
  let form = document.getElementById("form");

  var email = emailInput.value.trim();

  //Validation if input is not empty
  if (email === "") {
    messageElement.innerText = "E-mail address is required";
    messageElement.style.display = "block";
    form.style.borderLeft = "2px solid red";
    return;
  }

  //Validation if email is valid
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageElement.innerText = "Please provide a valid e-mail address";
    messageElement.style.display = "block";
    form.style.borderLeft = "2px solid red";
    return;
  }

  //Validation if TOS is accepted
  if (!checkElement.checked) {
    messageElement.innerText = "You must accept the terms of service";
    messageElement.style.display = "block";
    form.style.borderLeft = "2px solid red";
    return;
  }

  messageElement.style.display = "none";
  form.style.borderLeft = "2px solid rgba(64, 102, 165, 1)";
  form.submit();
}
