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

  const data = [];
  saveBtn.addEventListener("click", function () {
    inputs.forEach((input) => {
      data.push(input.value);
    });
  });

  function dataElementsLog(inputs) {
    console.log(data[0], data[1], data[2]);
  }
  dataElementsLog();

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
