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

function formBlockPost(formBlock, finishedHidden, formBlockSubmission) {
  formBlock.classList.remove("active");
  formBlockSubmission.classList.add("active");
  finishedHidden.classList.add("active");
}

function xmarkBtnOnChangedFormBlock(formBlock, finishedHidden, xmarkBtn) {
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
}
function expandBtnOnChangedFormBlock(formBlock, finishedHidden, expandBtn) {
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
}
