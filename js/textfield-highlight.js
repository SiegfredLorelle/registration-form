const inputs = document.querySelectorAll("input:not([type='submit'])");


console.log(inputs);


inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.closest("fieldset").classList.add("selected");
  });
  input.addEventListener("focusout", () => {
    input.closest("fieldset").classList.remove("selected");
  });
});