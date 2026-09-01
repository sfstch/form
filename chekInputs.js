function checkInputs(allInputs, saveBtn, cancelBtn) {
  let isFilled = true;
  allInputs.forEach((field) => {
    if (field.value.trim() == "") {
      isFilled = false;
    }
  });
  saveBtn.disabled = !isFilled;
  cancelBtn.disabled = !isFilled;
}

function OnChangeInput(allInputs, saveBtn, cancelBtn, field) {
  if (field.type === "checkbox") {
    field.addEventListener("change", () =>
      checkInputs(allInputs, saveBtn, cancelBtn),
    );
  } else {
    field.addEventListener("input", () =>
      checkInputs(allInputs, saveBtn, cancelBtn),
    );
  }
}

function inputReset(allInputs, saveBtn) {
  allInputs.forEach((input) => {
    if (input.type === "checkbox" && checkbox.checked !== false) {
      checkbox.checked = false;
    } else if (input.type === "text" && input.disabled !== true) {
      input.value = "";
    } else {
      console.log("поля очищены");
    }
  });
  saveBtn.disabled = true;
}
