let value = document.querySelector("#value");
let counterValue = 0;

const btns = document.querySelector("#counter");
const decrementBtn = btns.firstElementChild;
const incrementBtn = btns.lastElementChild;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
