const inputs = document.querySelectorAll("input:not([type='submit'])");
const textAreas = document.querySelectorAll("textarea");

inputs.forEach(input => {
  highlightTextField(input);
});
textAreas.forEach(textArea => {
  highlightTextField(textArea);
})

/* Highlight the text filed if inputs or text area are on focus */
function highlightTextField(input) {
  input.addEventListener("focus", () => {
    input.closest("fieldset").classList.add("selected");
  });
  input.addEventListener("focusout", () => {
    input.closest("fieldset").classList.remove("selected");
  });
}