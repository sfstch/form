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

  saveBtn.addEventListener("click", function () {
    inputs.forEach((input) => {
      const value = input.value.trim();
      const key = input.name;
      data[key] = value;
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

  /* if (allFilled) {
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
  const xmarkBtn = form.querySelector(".xmarkBtn");
  const container = document.querySelector(".container");

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
