//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM

const renderItem = (todoData) => {
  const li = document.createElement("li");

  const pName = document.createElement("p");
  pName.textContent = todoData.username;
  console.log(pName.textContent);

  const img = document.createElement("img");
  img.textContent = todoData.image;
  console.log(img.textContent);

  const star = document.createElement("p");
  star.textContent = todoData.star;
  console.log(star.textContent);

  const review = document.createElement("p");
  review.textContent = todoData.review;
  console.log(review.textContent);

  li.append(img, pName,  star, review);
  return li;
};

const liArray = reviews.map((todoItem) => renderItem(todoItem));

const container = document.querySelector(".review_container");

liArray.forEach((li) => {
  container.append(li);
});
//2. Append new reviews to the DOM from the form
