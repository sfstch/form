"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, select");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("container");
  const inputs = document.querySelectorAll("input,select");

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
  /* function collectData() {
    const key =  document.getElementById("title").value;
    const value = document.getElementById("title").value;
    collectData(keys, values);
  }*/

  let data = {};
  /*keys: {
      title: document.querySelector("title"),
      typeOfDependency: document.getElementById("typeOfDependancy"),
      typeOfCreation: document.getElementById("typeOfCreation"),
      checkbox: document.getElementById("checkbox"),
      measured: document.getElementById("measured"),
      agreed: document.getElementById("agreed"),
      recalculation: document.getElementById("recalculation"),
    },*/

  //console.log(data);

  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let allFilled = true;
    inputs.forEach((input) => {
      const value = input.value.trim();
      const key = input.name;
      data[key] = value;
      if (input.value.trim() === "") {
        allFilled = false;
      }
      // data.push(input.value);
    });
    console.log(data);
    // dataElementsLog(data);
  });

  /* function dataElementsLog(data) {
    console.log("Данные пользователя", data);
    console.log("Название:", data);
    console.log("Тип зависимости:", data[1]);
    console.log("Тип создания:", data[2]);
    console.log("Чекбокс:", data[3]);
    console.log("Измерено:", data[4]);
    console.log("Согласовано:", data[5]);
    console.log("Для пересчета графа:", data[6]);
  }*/
  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let allFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    const controls = document.querySelector(".header-icons");
    const expandBtn = form.querySelector(".expandBtn");
    const container = document.querySelector(".container");
    const originalHTML = form.innerHTML;

    if (allFilled) {
      form.innerHTML = "";
      form.appendChild(controls);
      const message = document.createElement("div");
      message.textContent = "заявка отправлена ✔";
      message.classList.add("message");
      form.appendChild(message);
    }

    const xmarkBtn = form.querySelector(".xmarkBtn");
    /* console.log(xmarkBtn);
    xmarkBtn.addEventListener("click", function () {
      form.innerHTML = originalHTML;
    });
    if (saveBtn) {
      saveBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }*/
    console.log(expandBtn, xmarkBtn);
    if (!xmarkBtn) {
      console.warn("кнопка не найдена");
    }
    if (xmarkBtn) {
      xmarkBtn.addEventListener("click", function () {
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
});
