"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select, textarea");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  console.log(" saveBtn:", saveBtn);
  console.log(" cancelBtn:", cancelBtn);

  allInputs.forEach(function (field) {
    if (field.type === "checkbox") {
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

  document.querySelector(".container");
  const form = document.querySelector(".container");
  const controls = document.querySelector(".header-icons");
  const xmarkBtn = document.getElementById("xmarkBtn");
  const expandBtn = document.getElementById("expandBtn");
  const originalHTML = form.innerHTML;
  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let allFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });
    if (allFilled) {
      form.innerHTML = "";
      form.appendChild(controls);
      const message = document.createElement("div");
      message.textContent = "заявка отправлена ✔";
      message.classList.add("message");
      form.appendChild(message);
      xmarkBtn.addEventListener("click", function () {
        form.innerHTML = originalHTML;
      });
    }
    const saveBtn = form.querySelector(".saveBtn");
    const xmarkBtnNew = form.querySelector(".xmarkBtn");
    const container = document.querySelector(".container");
    if (saveBtn) {
      saveBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
    if (xmarkBtnNew) {
      xmarkBtnNew.addEventListener("click", function () {
        form.innerHTML = originalHTML;
      });
    }
    if (expandBtn) {
      expandBtn.addEventListener("click", function () {
        if (!document.fullscreenElement) {
          container.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      });
    }
  });
}
