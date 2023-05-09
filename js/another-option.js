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


let lastBtn, textInput;

radioBtns.forEach(btns => {
  
  btns.forEach(btn => {
    btn.addEventListener("change", () => {
      lastBtn = btns[btns.length - 1]
      textInput = lastBtn.parentElement.nextElementSibling
      
      console.log(btn, lastBtn, textInput);
      if (lastBtn.checked) {
        textInput.classList.remove("hide");
      }
      else {
        textInput.classList.add("hide");

      }
    });
    // Event listener here
    // if (lastBtn.checked) {
    //   lastBtn.parentE
    // }
  })
})

// typeOfWorkRadioBtns.forEach(btn => {
//   btn.addEventListener("change", () => {
//     let last_btn = typeOfWorkRadioBtns[typeOfWorkRadioBtns.length - 1] 
//     console.log(last_btn.checked);

//     if (last_btn.checked) {
//       last_btn.parentElement.nextElementSibling.classList.remove("hide");
//     }
//     else {
//       last_btn.parentElement.nextElementSibling.classList.add("hide");

//     }

//     // console.log(btn.parentElement.nextElementSibling);
//     // if (btn.checked) {
//     // }
//     // else {
//     //   btn.parentElement.nextElementSibling.classList.add("hide");

//     // }
//   });
// })