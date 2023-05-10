const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const birthday = document.querySelector("#birthday");


firstName.addEventListener("input", () => {
  nameCheck(firstName);
});
lastName.addEventListener("input", () => {
  nameCheck(lastName);
});




["focus", "input"].forEach(event => {
  birthday.addEventListener(event, () => {
    birthdayCheck(birthday);
  });
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

function birthdayCheck(date) {
  let label = date.nextElementSibling
  if (!date.value) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "First date must not be empty";
  }
  else {
    date.classList.remove("error");
    label.innerHTML = "First Name";
    label.classList.remove("error");
  }
}



