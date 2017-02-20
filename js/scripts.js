var searchOpen = document.querySelector(".js-open-btn");
var searchBlock = document.querySelector(".hotel-search-block");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");
var form = searchBlock.querySelector("form");
var storage = localStorage.getItem("dateIn");


searchOpen.addEventListener("click", function(event) {
  event.preventDefault();
  searchBlock.classList.toggle("hotel-search-block-show");
  searchBlock.classList.remove("hotel-search-block-error");
  if (storage) {
	  dateIn.value = storage;
	  dateOut.focus();
	} else {
	  dateIn.focus();
	}
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!dateIn.value || !dateOut.value) {
      event.preventDefault();
      searchBlock.classList.remove("hotel-search-block-error");
      searchBlock.offsetWidth = searchBlock.offsetWidth;
      searchBlock.classList.add("hotel-search-block-error");
      console.log("Нужно ввести данные"); 
    } else {
      localStorage.setItem("dateIn", dateIn.value);
    }
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	  if (searchBlock.classList.contains("hotel-search-block-show")) {
	    searchBlock.classList.toggle("hotel-search-block-show");
	    searchBlock.classList.add("hotel-search-block-error");
	  }
	}
});