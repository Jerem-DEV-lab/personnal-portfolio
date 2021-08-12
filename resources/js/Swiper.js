import Swiper from "swiper";
const hamburger_menu  = document.querySelector(".hamburger-menu");
const navbar          = document.querySelector("header nav");
const links           = document.querySelectorAll(".nav-links a");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));


const mySwiper = new Swiper(".swiper-container", {
  speed        : 1100,
  slidesPerView: 1,
  loop         : true,
  autoplay     : {
    delay: 5000,
  },
  navigation   : {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
