const input = document.querySelector("#font-size-control");

input.addEventListener("input", (e) => {
  let value = input.value;
  let text = document.querySelector("#text");
  text.style.fontSize = `${value}px`;
});
