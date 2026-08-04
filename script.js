"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("container");
  const inputs = document.querySelectorAll("input");

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

  function checkInputs(inputs, saveBtn, cancelBtn) {
    let isFilled = true;
    inputs.forEach((field) => {
      if (field.value.trim() == "") {
        isFilled = false;
      }
    });
    saveBtn.disabled = !isFilled;
    cancelBtn.disabled = !isFilled;
  }

  saveBtn.addEventListener("click", function () {
    form.submit();
    const data = [];
    inputs.forEach((input) => {
      data.push(input.value);
    });
    console.log(data);
  });

  /*if (allFilled) {
    form.innerHTML = "";
    form.appendChild(controls);
    const message = document.createElement("div");
    message.textContent = "заявка отправлена ✔";
    message.classList.add("message");
    form.appendChild(message);
    xmarkBtn.addEventListener("click", function () {
      form.innerHTML = originalHTML;
    });
  }*/
  const xmarkBtnNew = form.querySelector(".xmarkBtn");
  const container = document.querySelector(".container");

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
