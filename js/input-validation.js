const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const birthday = document.querySelector("#birthday");
const email = document.querySelector("#email");



["focus", "input"].forEach(event => {
  firstName.addEventListener(event, () => {
    nameCheck(firstName);
  });
  lastName.addEventListener(event, () => {
    nameCheck(lastName);
  });
});


["focus", "input"].forEach(event => {
  birthday.addEventListener(event, () => {
    birthdayCheck(birthday);
  });
});

["focus", "input"].forEach(event => {
  email.addEventListener(event, () => {
    emailCheck(email);
  });
});

function nameCheck(name) {
  console.log(name);

  let label = name.nextElementSibling
  if (!name.value) {
    // let msg = label.innerHTML
    name.classList.add("error");
    label.classList.add("error");
    label.innerHTML = " Must not be empty";
  }
  else {
    name.classList.remove("error");
    label.innerHTML = `${name.placeholder}`;
    label.classList.remove("error");
  }
}

function birthdayCheck(date) {
  let label = date.nextElementSibling
  if (!date.value) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow mm/dd/yyyy format";
  }
  else {
    date.classList.remove("error");
    label.innerHTML = "Date";
    label.classList.remove("error");
  }
}

function emailCheck(email) {
  let label = email.nextElementSibling
  let isValid = email.value.includes("@") && email.value.includes(".")
  if (!isValid) {
    email.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow similar format: siegfredlorelle09@gmail.com";
  }
  else {
    email.classList.remove("error");
    label.innerHTML = "Email";
    label.classList.remove("error");
  }
}

