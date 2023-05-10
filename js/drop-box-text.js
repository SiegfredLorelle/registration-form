const dropBox = document.querySelector(".file-drop-box > input[type='file']");
const dropBoxlabel = document.querySelector(".file-drop-box > label");

/* Show the filename of the given file */
dropBox.addEventListener("change", () => {
  console.log(dropBox.files);
  if (dropBox.files.length) {
    let uploadedFile = dropBox.files[0]
    dropBoxlabel.innerHTML = uploadedFile.name;
    dropBox.parentElement.classList.add("has-file");
  }
});