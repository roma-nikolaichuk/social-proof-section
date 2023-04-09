const reviews = [
  {
    avatar: "images/image-colton.jpg",
    alt: "Profile picture of Colton Smith",
    username: "Colton Smith",
    verified_buyer: true,
    description:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    avatar: "images/image-irene.jpg",
    alt: "Profile picture of Irene Roberts",
    username: "Irene Roberts",
    verified_buyer: true,
    description:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    avatar: "images/image-anne.jpg",
    alt: "Profile picture of Anne Wallace",
    username: "Anne Wallace",
    verified_buyer: true,
    description:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];

const reviewsContainer = document.querySelector(".social-proof__reviews");

reviews.forEach((review) => {
  const reviewEl = document.createElement("article");
  reviewEl.classList.add("review", "social-proof__review");

  const headerEl = document.createElement("header");
  headerEl.classList.add("review__header");

  const avatarEl = document.createElement("div");
  avatarEl.classList.add("review__avatar");

  const imgEl = document.createElement("img");
  imgEl.src = review.avatar;
  imgEl.alt = review.alt;
  imgEl.classList.add("review__avatar-img");

  avatarEl.appendChild(imgEl);
  headerEl.appendChild(avatarEl);

  const authorEl = document.createElement("div");
  authorEl.classList.add("review__author");

  const usernameEl = document.createElement("h4");
  usernameEl.classList.add("review__username");
  usernameEl.textContent = review.username;

  const verifiedEl = document.createElement("p");
  verifiedEl.classList.add("review__verified-buyer");
  verifiedEl.textContent = review.verified_buyer
    ? "Verified Buyer"
    : "Unverified Buyer";

  authorEl.appendChild(usernameEl);
  authorEl.appendChild(verifiedEl);
  headerEl.appendChild(authorEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("review__description");
  descriptionEl.textContent = review.description;

  reviewEl.appendChild(headerEl);
  reviewEl.appendChild(descriptionEl);

  reviewsContainer.appendChild(reviewEl);
});

// Select the parent element containing the reviews
const parentReviews = document.querySelector(".social-proof__reviews");

// Get an array of all the child elements (individual reviews)
const childrenReviews = parentReviews.children;

// Set the marginTop CSS property of each review element using a loop
function setMarginTop() {
  for (let i = 0; i < childrenReviews.length; i++) {
    childrenReviews[i].style.marginTop = `calc(${i} * 1rem)`;
  }
}

// Clear the marginTop CSS property of each review element using a loop
function clearMarginTop() {
  for (let i = 0; i < childrenReviews.length; i++) {
    childrenReviews[i].style.marginTop = null;
  }
}

// If the window width is greater than or equal to 1280px, apply the marginTop styles on page load
if (window.matchMedia("(min-width: 1280px)").matches) {
  setMarginTop();
}

// Add event listener to update marginTop styles when the window is resized
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    setMarginTop();
  } else {
    clearMarginTop();
  }
});
