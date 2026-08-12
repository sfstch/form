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
