const categoriesRef = document.querySelector("#categories");
const categoriesNum = categoriesRef.childElementCount;

console.log(`Number of categories: ${categoriesNum}`);
console.log("");

const categoryRef = categoriesRef.querySelectorAll(".item");

categoryRef.forEach((e) => {
  const title = e.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const elemCount = e.querySelector("ul").childElementCount;
  console.log(`Elements: ${elemCount}`);
  console.log("");
});
