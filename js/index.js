document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__burgerBtn")
    .addEventListener("click", function () {
      document.querySelector(".header__nav").classList.add("active");
    });
  document.querySelector(".nav__close").addEventListener("click", function () {
    document.querySelector(".header__nav").classList.remove("active");
  });

  new ItcSimpleSlider(".itcss", {
    autoplay: true,
    interval: 4000,
    swipe: true,
  });
});
