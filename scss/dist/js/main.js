const hamburger = document.querySelector(".hamburger");
const line = document.querySelector(".line");
const nav = document.querySelector("nav");

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    line.classList.add("open");
    nav.classList.add("open");
    showMenu = true;
  } else {
    line.classList.remove("open");
    nav.classList.remove("open");
    showMenu = false;
  }
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".hamburger, .line")) {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      line.classList.remove("open");
    }
    return;
  }
});
