// Declaring the variables to hold the id's and the activities to be posted at items.

const images = ["#art", "#zoo", "#reading", "#swimming"];
const activities = ["arts and crafts", "go to the zoo", "reading", "swimming"];


// Looping through the images variable
// Adding a click event on each image in the array
for (let i = 0; i < images.length; i++) {
  document.querySelector(images[i]).addEventListener("click", () => {
 // Grabbing the unordered list and creating an empty list item
      let ul = document.getElementById('list');
      let li = document.createElement('li');
 // Filling the empty list item and appending it to the unordered list
      li.textContent = `${activities[i]}`;
      ul.appendChild(li);
    }
  );
}
