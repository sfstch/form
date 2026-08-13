"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("container");
  const xmarkBtn = form.querySelector(".btn-xmark");
  const expandBtn = form.querySelector(".btn-expand");
  const controls = document.querySelector(".header-icons");
  const finishedHidden = document.querySelector(".finished-hidden, h3");
  const formBlockSubmission = document.querySelector(".form-block-submission");

  saveBtn.addEventListener("click", () => {
    formBlockPost(finishedHidden, formBlockSubmission);
    onSaveBtnClick(saveBtn, allInputs);
  });
  allInputs.forEach((elem) =>
    OnChangeInput(allInputs, saveBtn, cancelBtn, elem),
  );

  xmarkBtn.addEventListener("click", () =>
    xmarkBtnOnChangedFormBlock(finishedHidden, formBlockSubmission, allInputs),
  );

  expandBtn.addEventListener("click", () => expandBtnOnChangedFormBlock(form));

  cancelBtn.addEventListener("click", () => {
    inputReset(allInputs, saveBtn);
  });
});
