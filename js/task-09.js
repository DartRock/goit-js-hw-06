function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const magicBtn = bodyRef.querySelector(".change-color");
const color = bodyRef.querySelector(".color");

const changeColor = () => {
  const randomColor = getRandomHexColor();

  bodyRef.style.backgroundColor = `${randomColor}`;
  color.textContent = `${randomColor}`;
};

magicBtn.addEventListener("click", changeColor);
