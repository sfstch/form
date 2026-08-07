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

  allInputs.forEach(function (field) {
    if (field.type === "checkbox") {
      field.addEventListener("change", () =>
        checkInputs(allInputs, saveBtn, cancelBtn),
      );
    } else {
      field.addEventListener("input", () =>
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

  saveBtn.addEventListener("click", () => {
    if (saveBtn.disabled) return;
    const data = {};
    allInputs.forEach((input) => {
      const key = input.name;
      if (!key) return;
      data[key] =
        input.type === "checkbox" ? input.checked : input.value.trim();
    });
    console.log(data);
  });

  formBlock.classList.remove("active");
  finishedHidden.classList.add("active");

  if (xmarkBtn) {
    xmarkBtn.addEventListener("click", () => {
      finishedHidden.classList.remove("active");
      formBlock.classList.add("active");
      allInputs.forEach((input) => {
        if (input.type === "checkbox") {
          input.checked = false;
        } else {
          input.value = "";
        }
      });
      checkInputs();
    });
  }

  if (xmarkBtn) {
    xmarkBtn.addEventListener("click", () => {
      console.log();
    });
  }

  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        container
          .requestFullscreen()
          .catch((err) =>
            console.error(`Ошибка полноэкранного режима: ${err.message}`),
          );
      } else {
        document.exitFullscreen();
      }
    });
  }
});
