const submitBtn = document.getElementById("submitBtn");
const thanksPge = document.getElementById("thanksPage");
const submitPage = document.getElementById("submit-page");
const submittedRating = document.getElementById("submitted-rating");

submitBtn.addEventListener("click", function submit() {
  const selected = document.querySelector('input[name="ratings"]:checked');

  if (selected == null) {
    console.log("gg");
  } else {
    thanksPage.style.display = "block";
    submitPage.style.display = "none";
    ratingValue = selected.value;
    submittedRating.textContent = selected.value;
  }
});
