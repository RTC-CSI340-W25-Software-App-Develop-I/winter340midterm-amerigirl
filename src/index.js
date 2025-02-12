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
//render 1 review
const renderReview = (review) => {
  //create the container
  const container = document.querySelector(".reviews");

  //create main div and give it a class
  const mainDiv = document.createElement("div");
  mainDiv.className = "review_container";

  //create the image
  const img = document.createElement("img");
  img.src = review.image;

  //add img to container
  mainDiv.append(img);
  container.append(mainDiv);

  //create the div that will hold elements

  const div = document.createElement("div");
  mainDiv.append(div);

  //add elements to the div
  const pName = document.createElement("p");
  pName.textContent = review.username;
  div.append(pName);

  const star = document.createElement("p");
  star.textContent = review.star;
  div.append(star);

  const actualReview = document.createElement("p");
  actualReview.textContent = review.review;
  div.append(actualReview);
};

//render all reviews
const renderReviews = (reviews) => {
  reviews.forEach(renderReview);
};

renderReviews(reviews);

//2. Append new reviews to the DOM from the form

//handle form submit
const handleFormSubmit = (e) => {
  e.preventDefault();

  const pName = e.target.username.value;
  const img = e.target.image.value;
  const star = e.target.star.value;
  const review = e.target.review.value;

//create an object to hold the new review
  const newReview = {
    username: pName,
    image: img,
    star: star,
    review: review,
  };

  renderReview(newReview);
};


  document.querySelector("form").addEventListener("submit", handleFormSubmit);

  


