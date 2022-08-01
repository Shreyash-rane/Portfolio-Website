//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapase = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapase.classList.remove("show");
  });
});

//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
