"use  strict";

function checkValidity(recalculation, measured, agreed) {
  console.log(agreed);
  if (agreed.patternMismatch) {
    this.addInvalidity("This is the wrong pattern for this field");
  }
}
checkValidity();
