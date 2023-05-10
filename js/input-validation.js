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

const workType = document.querySelector("input[type='text'][name='work-type']");
const pronoun = document.querySelector("input[type='text'][name='pronouns']");
const disability = document.querySelector("input[type='text'][name='disability']");
const race = document.querySelector("input[type='text'][name='race']");




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
  workType.addEventListener(event, () => {
    generalCheck(workType);
  })
  pronoun.addEventListener(event, () => {
    generalCheck(pronoun);
  })
  disability.addEventListener(event, () => {
    generalCheck(disability);
  })
  race.addEventListener(event, () => {
    generalCheck(race);
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


function generalCheck(name) {
  let label = name.nextElementSibling
  if (!name.value) {
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
    label.innerHTML = "Postal / Zip Code";
    label.classList.remove("error");
  }
}



function coverLetterCheck(coverLetter) {
  let label = coverLetter.nextElementSibling
  
  numOfChars = coverLetter.value.length
  if (!coverLetter.value) {
    coverLetter.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "Must not be empty";
  }
  else if (numOfChars < 100) {
    coverLetter.classList.add("error");
    label.classList.add("error");
    label.innerHTML = `Must at least be 100 characters \ 
    (currently at ${numOfChars})`;
  }
  else {
    coverLetter.classList.remove("error");
    label.innerHTML = "Cover Letter";
    label.classList.remove("error");
  }
}

function resumeCheck(resume) {
  let container = resume.parentElement;
  let label = resume.closest("fieldset").querySelector("fieldset > label");
  let validExtensions = ["pdf", "txt", "doc", "docx", "docm", "dotx", "dot"]
  
  if (!resume.files.length || !validExtensions.includes(resume.files[0].name.split('.').pop())) {
    container.classList.add("error");
    label.classList.add("error");
    label.innerHTML = "File extension must be .pdf, .txt, .doc, or .docx";
  }

  else {
    container.classList.remove("error");
    label.innerHTML = "Resume";
    label.classList.remove("error");
  }
}