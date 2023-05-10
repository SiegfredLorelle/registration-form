const form = document.querySelector("form");
const clearBtn = document.querySelector(".control-btns-container > button:nth-child(1)")
const backTop = document.querySelector(".control-btns-container > button:nth-child(3)")

/* Confirm via alert before clearing the form */
clearBtn.addEventListener("click", () => {
  if (window.confirm("Are you sure to clear the form?")) {
    form.reset();
    goBackTop() ;
  }
});

/* Go back to top via relative link */
backTop.addEventListener("click", () => {
  goBackTop();
});

function goBackTop() {
  window.location.href = '#title';
}


