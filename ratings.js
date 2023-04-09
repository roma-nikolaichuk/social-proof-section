const ratings = [
  {
    stars: 5,
    source: "Reviews",
  },
  {
    stars: 5,
    source: "Report Guru",
  },
  {
    stars: 5,
    source: "BestTech",
  },
];

ratings.forEach((rating) => {
  const ratingsContainer = document.querySelector(".social-proof__ratings");

  const ratingElement = document.createElement("div");
  ratingElement.className = "rating social-proof__rating";

  const starsElement = document.createElement("ul");
  starsElement.className = "rating__stars";
  starsElement.setAttribute("aria-label", "Rating");

  for (let i = 0; i < rating.stars; i++) {
    const starElement = document.createElement("li");
    starElement.className = "rating__star";
    starsElement.appendChild(starElement);
  }

  const titleElement = document.createElement("h4");
  titleElement.className = "rating__title";
  titleElement.textContent = `Rated ${rating.stars} Stars in ${rating.source}`;

  ratingElement.appendChild(starsElement);
  ratingElement.appendChild(titleElement);

  ratingsContainer.appendChild(ratingElement);
});

// Select the parent element containing the ratings
const parentRatings = document.querySelector(".social-proof__ratings");

// Get an array of all the child elements (individual ratings)
const childrenRatings = parentRatings.children;

// Set the marginRight CSS property of each rating element using a loop
function setMarginRight() {
  for (let i = 0; i < childrenRatings.length; i++) {
    childrenRatings[i].style.marginRight = `calc(${
      childrenRatings.length - i - 1
    }rem)`;
  }
}

// Clear the marginRight CSS property of each rating element using a loop
function clearMarginRight() {
  for (let i = 0; i < childrenRatings.length; i++) {
    childrenRatings[i].style.marginRight = null;
  }
}

// If the window width is greater than or equal to 1280px, apply the marginRight styles on page load
if (window.matchMedia("(min-width: 1280px)").matches) {
  setMarginRight();
}

// Add event listener to update marginRight styles when the window is resized
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    setMarginRight();
  } else {
    clearMarginRight();
  }
});
