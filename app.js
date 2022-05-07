const ratings = document.querySelectorAll(".rating-btn");
const button = document.querySelector(".btn-submit");
const content = document.querySelector(".content");
const hideContent = document.querySelector(".hide-content");
const selectedSection = document.querySelector(".selected-section");

ratings.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    e.preventDefault();

    ratings.forEach((rating) => {
      rating.classList.remove("selected");
    });

    rating.classList.add("selected");
  });
});

button.addEventListener("click", function (e) {
  e.preventDefault();

  const selectedRatingBtn = document.querySelector(".rating-btn.selected");
  const selectedRatingValue =
    selectedRatingBtn !== null ? selectedRatingBtn.getAttribute("data-val") : 0;

  if (selectedRatingBtn === null) {
    alert("Please select a rating before clicking submit");
    return false;
  }

  content.classList.add("hidden");
  selectedSection.innerHTML = selectedRatingValue;
  hideContent.classList.remove("hidden");
});
