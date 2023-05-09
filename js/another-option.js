const typeOfWorkRadioBtns = document.querySelectorAll(
  ".has-another-option > .radio-box > input[type='radio']"
);

typeOfWorkRadioBtns.forEach(btn => {
  btn.addEventListener("change", () => {
    let last_btn = typeOfWorkRadioBtns[typeOfWorkRadioBtns.length - 1] 
    console.log(last_btn.checked);

    if (last_btn.checked) {
      last_btn.parentElement.nextElementSibling.classList.remove("hide");
    }
    else {
      last_btn.parentElement.nextElementSibling.classList.add("hide");

    }

    // console.log(btn.parentElement.nextElementSibling);
    // if (btn.checked) {
    // }
    // else {
    //   btn.parentElement.nextElementSibling.classList.add("hide");

    // }
  });
})

