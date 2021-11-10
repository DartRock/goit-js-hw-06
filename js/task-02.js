const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
});

ingredientsRef.append(...ingredientsArr);

// const createElem = (name) => {
//   const item = document.createElement("li");
//   item.textContent = name;
//   item.classList.add("item");
//   ingredientsRef.append(item);
// };

// ingredients.forEach((e) => createElem(e));
