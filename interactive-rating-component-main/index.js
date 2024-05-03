const stars = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit-rating");
const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const ratingSpan = document.getElementById("rating");
const rateAgainBtn = document.getElementById("rate-again");
let currentRating = 0;
stars.forEach((star, index) => {
  let currentStar = index + 1;
  star.addEventListener("click", () => {
    currentRating = currentStar;
    stars.forEach((star, i) => {
      if (currentStar > i) {
        star.classList.add("btn-focus");
        console.log(currentStar);
      } else if (currentStar <= i) {
        star.classList.remove("btn-focus");
      }
    });
  });
});

submitBtn.addEventListener("click", () => {
  if (currentRating > 0) {
    mainContainer.classList.add("main-remove");
    thanksContainer.classList.remove("hidden");
    ratingSpan.textContent = currentRating;
  } else {
    alert("Please put some rating");
  }
});

rateAgainBtn.addEventListener("click", () => {
  mainContainer.classList.remove("main-remove");
  thanksContainer.classList.add("hidden");
});
