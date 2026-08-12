"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("container");
  const xmarkBtn = form.querySelector(".btn-xmark");
  const expandBtn = form.querySelector(".btn-expand");
  const controls = document.querySelector(".header-icons");
  const formBlock = document.querySelector(".form-block");
  const finishedHidden = document.querySelector(".finished-hidden");
  const formBlockSubmission = document.querySelector(".form-block-submission");

  saveBtn.addEventListener("click", () => onSaveBtnClick(saveBtn, allInputs));
  allInputs.forEach((elem) =>
    OnChangeInput(allInputs, saveBtn, cancelBtn, elem),
  );

  saveBtn.addEventListener("click", () =>
    formBlockPost(formBlock, finishedHidden, formBlockSubmission),
  );
  xmarkBtn.addEventListener("click", () =>
    xmarkBtnOnChangedFormBlock(xmarkBtn),
  );

  expandBtn.addEventListener("click", () =>
    expandBtnOnChangedFormBlock(expandBtn),
  );
});

//checkInputs(allInputs, saveBtn, cancelBtn, xmarkBtn);
