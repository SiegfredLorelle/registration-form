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

const position = document.querySelector("#position");
const coverLetter = document.querySelector("#cover-letter");
const resume = document.querySelector("#resume-file");

const submitBtn = document.querySelector(".control-btns-container > input[type='submit']");


let validities = {}


events = [
  "focus",
  "input",
]

/* Check if empty */
events.forEach(event => {
  firstName.addEventListener(event, () => {
    generalCheck(firstName);
  });
  lastName.addEventListener(event, () => {
    generalCheck(lastName);
  });
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
  position.addEventListener(event, () => {
    generalCheck(position);
  })
});


/* Stricter validation for birthday */
events.forEach(event => {
  birthday.addEventListener(event, () => {
    birthdayCheck(birthday);
  });
});

/* Stricter validation for email */
events.forEach(event => {
  email.addEventListener(event, () => {
    emailCheck(email);
  });
});

/* Stricter validation for contact number */
events.forEach(event => {
  contactNum.addEventListener(event, () => {
    contactNumCheck(contactNum);
  })
})


/* Stricter validation for zip code */
events.forEach(event => {
  zipCode.addEventListener(event, () => {
    zipCheck(zipCode);
  })
})

/* Stricter validation for cover letter */
events.forEach(event => {
  coverLetter.addEventListener(event, () => {
    coverLetterCheck(coverLetter);
  })
})

/* Stricter validation for resume */
events.forEach(event => {
  resume.addEventListener(event, () => {
    resumeCheck(resume);
  })
})


/* Checks if input is empty */
function generalCheck(input) {
  let label = input.nextElementSibling
  if (!input.value) {
    input.classList.add("error");
    label.classList.add("error");
    label.innerHTML = " Must not be empty";
    validities[input.name] = false;
    input.scrollIntoView();

  }
  else {
    input.classList.remove("error");
    label.innerHTML = `${input.placeholder}`;
    label.classList.remove("error");
    validities[input.name] = true;
  }
}

/* Ensures birthday is valid */
function birthdayCheck(date) {
  let label = date.nextElementSibling
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let givenYear = date.value.split("-")[0];
  let minValidAge = 4;
  let maxValidAge = 150;
  let minValidYear = currentYear - maxValidAge
  let maxValidYear = currentYear - minValidAge

  if (!date.value) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow mm/dd/yyyy format";
    validities[date.name] = false;
    date.scrollIntoView();

  }
  else if (givenYear > currentYear) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Invalid year";
    validities[date.name] = false;
    date.scrollIntoView();

  }
  else if (givenYear > maxValidYear) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Sorry you are too young";
    validities[date.name] = false;
    date.scrollIntoView();
  }
  else if (givenYear < minValidYear) {
    date.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Sorry you are too old";
    validities[date.name] = false;
    date.scrollIntoView();
  }
  else {
    date.classList.remove("error");
    label.innerHTML = "Date";
    label.classList.remove("error");
    validities[date.name] = true;

  }
}

/* Ensures email is valid */
function emailCheck(email) {
  let label = email.nextElementSibling
  let isValid = email.value.includes("@") && email.value.includes(".")
  if (!isValid) {
    email.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow similar format: siegfredlorelle09@gmail.com";
    validities[email.name] = false;
    email.scrollIntoView();

  }
  else {
    email.classList.remove("error");
    label.innerHTML = "Email";
    label.classList.remove("error");
    validities[email.name] = true;

  }
}

/* Ensures contact number is valid */
function contactNumCheck(contactNum) {
  let label = contactNum.nextElementSibling
  let regexForNum = /^(\+\d{1,2}?[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  let isValid = regexForNum.test(contactNum.value);

  if (!isValid) {
    contactNum.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Follow similar format: +63 945 160 5205";
    validities[contactNum.name] = false;
    contactNum.scrollIntoView();

  }
  else {
    contactNum.classList.remove("error");
    label.innerHTML = "Mobile Number";
    label.classList.remove("error");
    validities[contactNum.name] = true;

  }
}

/* Ensures zip code is valid */
function zipCheck(zipCode) {
  let label = zipCode.nextElementSibling
  
  if (!zipCode.value || zipCode.value % 1 != 0) {
    zipCode.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must only contain digits";
    validities[zipCode.name] = false;
    zipCode.scrollIntoView();
    
  }
  else if (zipCode.value < 100) {
    zipCode.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must be at least 3 digits";
    validities[zipCode.name] = false;
    zipCode.scrollIntoView();
  }
  else {
    zipCode.classList.remove("error");
    label.innerHTML = "Postal / Zip Code";
    label.classList.remove("error");
    validities[zipCode.name] = true;
  }
}


/* Ensures cover letter's is has enough characters */
function coverLetterCheck(coverLetter) {
  let label = coverLetter.nextElementSibling
  
  numOfChars = coverLetter.value.length
  if (!coverLetter.value) {
    coverLetter.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must not be empty";
    validities[coverLetter.name] = false;
    coverLetter.scrollIntoView();
  }
  else if (numOfChars < 100) {
    coverLetter.classList.add("error");
    label.classList.add("error");
    label.innerHTML = `Must at least be 100 characters \ 
    (currently at ${numOfChars})`;
    validities[coverLetter.name] = false;
    coverLetter.scrollIntoView();
  }
  else {
    coverLetter.classList.remove("error");
    label.innerHTML = "Cover Letter";
    label.classList.remove("error");
    validities[coverLetter.name] = true;
  }
}

/* Ensures resume's file extension is valid */
function resumeCheck(resume) {
  let container = resume.parentElement;
  let label = resume.closest("fieldset").querySelector("fieldset > label");
  let validExtensions = ["pdf", "txt", "doc", "docx", "docm", "dotx", "dot"]
  
  if (!resume.files.length 
    || !validExtensions.includes(resume.files[0].name.split('.').pop())) {
    container.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "File extension must be .pdf, .txt, .doc, or .docx";
    validities[resume.name] = false;
    resume.scrollIntoView();
  }
  
  else {
    container.classList.remove("error");
    label.innerHTML = "Resume";
    label.classList.remove("error");
    validities[resume.name] = true;
  }
}


const generalInputs = [
  firstName, 
  lastName, 
  street, 
  street2, 
  city, 
  state, 
  position, 
]


submitBtn.addEventListener("click", checkAllInputs);

function checkAllInputs() {
  // Check all general inputs
  generalInputs.forEach(input => {
    generalCheck(input);
  });
  
  // Check all stricter inputs
  birthdayCheck(birthday);
  emailCheck(email);
  contactNumCheck(contactNum);
  zipCheck(zipCode);
  coverLetterCheck(coverLetter);
  resumeCheck(resume);
  
  // Count the number of valid inputs
  let i = 0;
  for (key of Object.keys(validities)) {
    if (!validities[key]) {
      break;
    }
    i++;
  }

  // Show result if all inputs are valid
  if (i == Object.keys(validities).length) {
    showResult();
  }
  
}



/* Show the results of the form via alert */
function showResult() {
  let typeOfWorkVal = document.querySelector("input[name='work-type']:checked");
  let veteranStatusVal = document.querySelector("input[name='veteran-status']:checked");
  let pronounsVal = document.querySelector("input[name='pronouns']:checked");
  let disabilityVal = document.querySelector("input[name='disability']:checked");
  let raceVal = document.querySelector("input[name='race']:checked");
  


  if (typeOfWorkVal.value == "other") {
    typeOfWorkVal = typeOfWorkVal.closest("label").nextElementSibling.querySelector("input[type='text']");
  }
  if (pronounsVal.value == "other") {
    pronounsVal = pronounsVal.closest("label").nextElementSibling.querySelector("input[type='text']");
  }
  if (disabilityVal.value == "other") {
    disabilityVal = disabilityVal.closest("label").nextElementSibling.querySelector("input[type='text']");
  }
  if (raceVal.value == "other") {
    raceVal = raceVal.closest("label").nextElementSibling.querySelector("input[type='text']");
  }


  alert(
    "Form is Valid!\n\n"
    + `First Name: ${firstName.value}\n`
    + `Last Name: ${lastName.value}\n`
    + `Date of Birth: ${birthday.value}\n`
    + `Email: ${email.value}\n`
    + `Contact Number: ${contactNum.value}\n\n`
    + `Street Address: ${street.value}\n`
    + `Street Address 2: ${street2.value}\n`
    + `City / Municipality: ${city.value}\n`
    + `State / Province: ${state.value}\n`
    + `Postal / Zip Code: ${zipCode.value}\n\n`
    + `Position: ${position.value}\n`
    + `Type of Work: ${typeOfWorkVal.value}\n`
    + `Resume: ${resume.files[0].name}\n`
    + `Veteran Status: ${veteranStatusVal.value}\n`
    + `Pronouns: ${pronounsVal.value}\n`
    + `Disabilities: ${disabilityVal.value}\n`
    + `Race: ${raceVal.value}\n`
  );
};