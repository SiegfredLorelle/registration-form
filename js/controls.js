const form = document.querySelector("form");
const clearBtn = document.querySelector(".control-btns-container > button:nth-child(1)")
const backTop = document.querySelector(".control-btns-container > button:nth-child(3)")

clearBtn.addEventListener("click", () => {
  if (window.confirm("Are you sure to clear the form?")) {
    form.reset();
    goBackTop() ;
  }
});

backTop.addEventListener("click", () => {
  goBackTop();
});

function goBackTop() {
  window.location.href = '#title';
}


