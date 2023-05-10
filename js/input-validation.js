const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");


// console.log(firstName);

firstName.addEventListener("input", () => {
  nameCheck(firstName);
});
lastName.addEventListener("input", () => {
  nameCheck(lastName);
});


function nameCheck(name) {
  let label = name.nextElementSibling
  if (!name.value) {
    name.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "First Name must not be empty";
  }
  else {
    name.classList.remove("error");
    label.innerHTML = "First Name";
    label.classList.remove("error");
  }
}



