const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const birthday = document.querySelector("#birthday");
const email = document.querySelector("#email");
const contactNum = document.querySelector("#mobile-number");

const street = document.querySelector("#street-address");
const street2 = document.querySelector("#street-address-2");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zipCode = document.querySelector("#zip-code");


events = [
  "focus",
  "input",
]

events.forEach(event => {
  firstName.addEventListener(event, () => {
    generalCheck(firstName);
  });
  lastName.addEventListener(event, () => {
    generalCheck(lastName);
  });
});

events.forEach(event => {
  birthday.addEventListener(event, () => {
    birthdayCheck(birthday);
  });
});

events.forEach(event => {
  email.addEventListener(event, () => {
    emailCheck(email);
  });
});

events.forEach(event => {
  contactNum.addEventListener(event, () => {
    contactNumCheck(contactNum);
  })
})

events.forEach(event => {
  street.addEventListener(event, () => {
    generalCheck(street);
  })
  street2.addEventListener(event, () => {
    generalCheck(street2);
  })
  city.addEventListener(event, () => {
    generalCheck(city);
  })
  state.addEventListener(event, () => {
    generalCheck(state);
  })
})

events.forEach(event => {
  zipCode.addEventListener(event, () => {
    zipCheck(zipCode);
  })
})





function generalCheck(name) {
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

function contactNumCheck(contactNum) {
  let label = contactNum.nextElementSibling
  let regexForNum = /^(\+\d{1,2}?[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  let isValid = regexForNum.test(contactNum.value);

  if (!isValid) {
    contactNum.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow similar format: +63 945 160 5205";
  }
  else {
    contactNum.classList.remove("error");
    label.innerHTML = "Mobile Number";
    label.classList.remove("error");
  }
}

function zipCheck(zipCode) {
  let label = zipCode.nextElementSibling
  
  if (!zipCode.value || zipCode.value % 1 != 0) {
    zipCode.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must only contain digits";
  }
  else if (zipCode.value < 100) {
    zipCode.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must be at least 3 digits";
  }
  else {
    zipCode.classList.remove("error");
    label.innerHTML = "Mobile Number";
    label.classList.remove("error");
  }
}

