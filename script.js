document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const allInputs = document.querySelectorAll("input, select, textarea");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  console.log(" saveBtn:", saveBtn);
  console.log(" cancelBtn:", cancelBtn);
  if (!saveBtn || !cancelBtn) {
    console.error("кнопки не найдены");
    return;
  }
  function checkInputs() {
    let isFilled = false;
    allInputs.forEach(function (field) {
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
  }
  allInputs.forEach(function (field) {
    if (field.type === "checkbox" || field.type === "radio") {
      field.addEventListener("change", checkInputs);
    } else {
      field.addEventListener("input", checkInputs);
    }
  });
  checkInputs();
});
