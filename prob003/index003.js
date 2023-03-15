var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount003 = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount003) {
  visitCount003 = Number(visitCount003) + 1;
  localStorage.setItem("page_view", visitCount003);
} else {
  visitCount003 = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount003;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount003;
});
style.css