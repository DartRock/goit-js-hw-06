const inputRef = document.querySelector('[data-length="6"]');
const attr = inputRef.dataset.length;

const addValidClass = (classToAdd, classToremove) => {
  inputRef.classList.add(classToAdd);
  inputRef.classList.remove(classToremove);
};

inputRef.addEventListener("blur", (e) => {
  const length = e.currentTarget.value.length;

  // if (length === 0) {
  //   // return addAndRemoveClasses("removeAll");
  // }
  if (length < attr) {
    return addValidClass("invalid", "valid");
    // return addAndRemoveClasses("invalid");
  }
  if (length >= attr) {
    return addValidClass("valid", "invalid");
    // return addAndRemoveClasses("valid");
  }
});

// Чтобы сбрасывались все классы если число символо = 0
// const addClass = (classToAdd) => {
//   return inputRef.classList.add(classToAdd);
// };
// const removeClass = (classToRemove) => {
//   return inputRef.classList.remove(classToRemove);
// };

// const addAndRemoveClasses = (value) => {
//   console.log(value);
//   if (value === "removeAll") {
//     removeClass("valid");
//     removeClass("invalid");
//     return;
//   }

//   if (value === "invalid") {
//     removeClass("valid");
//     addClass("invalid");
//     return;
//   }

//   if (value === "valid") {
//     removeClass("invalid");
//     addClass("valid");
//     return;
//   }
// };
