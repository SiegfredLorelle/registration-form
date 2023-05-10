const firstName = document.querySelector("#first-name");

console.log(firstName);

firstName.addEventListener("input", () => {
  let label = firstName.nextElementSibling
  if (!firstName.value) {
    firstName.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "First Name must not be empty";
  }
  else {
    firstName.classList.remove("error");
    label.innerHTML = "First Name";
    label.classList.remove("error");

  }

});



