const inputRef = document.querySelector('[data-length="6"]');
const attr = inputRef.dataset.length;
inputRef.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  }
  if (e.currentTarget.value.length < attr && e.currentTarget.value.length > 0) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
  if (e.currentTarget.value.length >= attr) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
});
