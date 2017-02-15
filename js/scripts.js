var searchOpen = document.querySelector(".js-open-btn");
var searchBlock = document.querySelector(".hotel-search-block");

searchOpen.addEventListener("click", function(event) {
  event.preventDefault();
  searchBlock.classList.toggle("hotel-search-block-show");
});




