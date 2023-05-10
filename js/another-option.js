const typeOfWorkRadioBtns = document.querySelectorAll(
  ".has-another-option > .radio-box > input[type='radio'][name='work-type']"
);
const pronounsRadioBtns = document.querySelectorAll(
  ".has-another-option > .radio-box > input[type='radio'][name='pronouns']"
);
const disabilityRadioBtns = document.querySelectorAll(
  ".has-another-option > .radio-box > input[type='radio'][name='disability']"
);
const raceRadioBtns = document.querySelectorAll(
  ".has-another-option > .radio-box > input[type='radio'][name='race']"
);


const radioBtns = [
  typeOfWorkRadioBtns,
  pronounsRadioBtns,
  disabilityRadioBtns,
  raceRadioBtns,
]


let lastBtn, textInputContainer, textInput;

radioBtns.forEach(btns => {
  
  btns.forEach(btn => {
    btn.addEventListener("change", () => {
      lastBtn = btns[btns.length - 1]
      textInputContainer = lastBtn.parentElement.nextElementSibling
      textInput = textInputContainer.firstElementChild.firstElementChild
      
      if (lastBtn.checked) {
        textInputContainer.classList.remove("hide");
        textInput.required = true;
      }
      else {
        textInputContainer.classList.add("hide");
        textInput.required = false;
      }
    });
  })
})






