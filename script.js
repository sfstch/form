"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select, textarea");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  console.log(" saveBtn:", saveBtn);
  console.log(" cancelBtn:", cancelBtn);

  allInputs.forEach(function (field) {
    if (field.type === "checkbox" || field.type === "radio") {
      field.addEventListener(
        "change",
        checkInputs(allInputs, saveBtn, cancelBtn),
      );
    } else {
      field.addEventListener(
        "input",
        checkInputs(allInputs, saveBtn, cancelBtn),
      );
    }
  });
  saveBtn.addEventListener("click", (event) => {
    console.log("разаблокировано", event);
  });
});
function checkInputs(inputs, saveBtn, cancelBtn) {
  let isFilled = false;
  inputs.forEach((field) => {
    if (
      field.type === "submit" ||
      field.type === "button" ||
      field.type === "hidden"
    ) {
      return;
    }
    if (field.value.trim() !== "") {
      isFilled = true;
    }
  });
  saveBtn.disabled = !isFilled;
  cancelBtn.disabled = !isFilled;
  document.querySelector(".form-message");
  const form = document.querySelector(".form-message");
  saveBtn.addEventListener("click", function () {
    form.innerHTML = "заявка отправлена";
  });
  form.classList.add("message");
}
