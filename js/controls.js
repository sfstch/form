"use strict";

function onSaveBtnClick(saveBtn, allInputs, input) {
  if (saveBtn.disabled) return;
  const data = {};
  allInputs.forEach((input) => {
    const key = input.name;
    if (!key) return;
    data[key] = input.type === "checkbox" ? input.checked : input.value.trim();
  });
  console.log(data);
}

function formBlockPost(finishedHidden, formBlockSubmission) {
  formBlockSubmission.classList.add("active");
  finishedHidden.classList.add("active");
}

function xmarkBtnOnChangedFormBlock(
  finishedHidden,
  formBlockSubmission,
  allInputs,
) {
  formBlockSubmission.classList.remove("active");
  finishedHidden.classList.remove("active");
}

function expandBtnOnChangedFormBlock(form) {
  form.requestFullscreen();
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
}
