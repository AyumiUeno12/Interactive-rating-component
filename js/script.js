"use strict";

const mainContainer = document.querySelector(".main-container");
const feedback = document.querySelector(".feedback");
const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const btns = document.querySelectorAll(".btn");

// Add click event to submit button
submitBtn.addEventListener("click", () => {
  feedback.classList.remove("hidden");
  // mainContainer.style.display = "none";
  mainContainer.classList.add("hidden");
});

// Add click event to rate-again button
rateAgainBtn.addEventListener("click", () => {
  feedback.classList.add("hidden");
  // mainContainer.style.display = "block";
  mainContainer.classList.remove("hidden");
});

btns.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
