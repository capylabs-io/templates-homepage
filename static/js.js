// animation
const tranactionItems = document.getElementsByClassName("display-transation");
const triggerBottom = (window.innerHeight / 5) * 4;
var timer;
window.onload = (event) => {
  callDisplayTransaction(tranactionItems);
}

window.addEventListener("scroll", function (event) {
  callDisplayTransaction(tranactionItems);
  if (document.getElementById("section-3").getBoundingClientRect().top > 0) {
    activeSlide = Array.from(document.getElementsByClassName("section-3-slide active"));
    if (Object.keys(activeSlide).length == 0) {
      loadingSection3(0);
    }
  }
});

function callDisplayTransaction(tranactionItems) {
  Array.from(tranactionItems).forEach((item) => {
    let itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

async function loadingSection3(index) {
  slide = Array.from(document.getElementsByClassName("section-3-slide"));
  activeSlide = Array.from(document.getElementsByClassName("section-3-slide active"));
  if (index >= 3) {
    index = 0;
  }
  // active class remove
  activeSlide.forEach((item) => {
    item.classList.remove("active");
  });
  // add active class
  slide[index].classList.add("active");

  timer = setTimeout(function () {
    loadingSection3(index + 1, false);
  }, 5000);
}