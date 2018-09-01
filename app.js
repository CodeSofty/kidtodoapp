
const myList = document.querySelector("ul");
const images = ["#art", "#zoo", "#reading", "#swimming"];
const thisList = ["arts and crafts", "go to the zoo", "reading", "swimming"];


for (let i = 0; i < images.length; i++) {
  document.querySelector(images[i]).addEventListener("click", () => {
      myList.innerHTML = `<li>${thisList[i]}</li>`;
    }
  );
}