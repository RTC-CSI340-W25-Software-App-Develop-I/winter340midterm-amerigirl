import { assert } from "chai";
import { calculateStarAverage } from "../src/logic.js";

/**
 * - Create at minimum two test for the calculateStarAverage function in test/test.js
- Remember to import chai and the calculateStarAverage function
- Use npm run test to run your tests
 */
const mockReviews = [
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
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("Given an array of reviews it should return the average of that array", () => {
  it("Should calculate the average star review", () => {
    const result = calculateStarAverage(mockReviews);
    assert.equal(result, 3);
  });

  it("should return zero if there are no elements present", () => {
    const mockReviewEmpty = [
      {
        username: "",
        image: "",
        star: 0,
        review: "",
      },
    ];
    const result = calculateStarAverage(mockReviewEmpty);
    assert.equal(result, 0);
  });
});
