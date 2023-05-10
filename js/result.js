
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
}