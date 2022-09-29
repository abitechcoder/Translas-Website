const sliders = document.querySelectorAll(".slider");
const faders = document.querySelectorAll(".fader");
const navigation = document.querySelector("nav");
const loader = document.getElementById("preloader");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const options = {
  root: null,
  rootMargin: "0px 0px -50px 0px",
  threshold: 0,
};

hamburger.onclick = function () {
  menu.classList.toggle("active");
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, options);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 60) {
    navigation.classList.add("nav-scrollable");
  } else {
    navigation.classList.remove("nav-scrollable");
  }
});
