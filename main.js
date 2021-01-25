const hamburger = document.getElementById("hamburger"),
  sideNav = document.getElementById("side-nav"),
  body = document.getElementsByTagName("body")[0];

// Navigatyion Button
hamburger.addEventListener("click", function () {
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none"
  }
  else {
    sideNav.style.display = "block"
  }
});
// Initialize resize observer object 
let resizeObserver = new ResizeObserver(() => {
  if (window.innerWidth >= 1024) {
    sideNav.style.display = "block"
  }
  else {
    sideNav.style.display = "none"
  }
});

resizeObserver.observe(body);