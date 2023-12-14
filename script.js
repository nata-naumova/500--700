// Меню навигации
const links = document.querySelectorAll(".nav__level");
const menuOverlay = document.querySelectorAll(".menu__overlay");
const header = document.querySelector(".header");

function showLink() {
  if (!this.parentNode.classList.contains("active")) {
    links.forEach((link) => {
      if (link.parentNode.classList.contains("active")) {
        link.parentNode.classList.remove("active");
      }
      link.style.opacity = "0.5";
      link.style.transition = "opacity 0.3s ease";
    });

    this.parentNode.classList.add("active");
    this.style.opacity = "1";
  }
}

function hideLink() {
  links.forEach((link) => {
    if (link.parentNode.classList.contains("active")) {
      link.parentNode.classList.remove("active");
    }
    link.style.opacity = "1";
  });
}

// if (window.matchMedia("(max-width: 1000px)").matches) {
//   // Планшет и мобильные устройства
//   links.forEach((link) => {
//     link.addEventListener("click", toggleLink);
//   });
// } else {
//   // Десктоп
//   links.forEach((link) => {
//     link.addEventListener("mouseenter", showLink);
//   });

//   menuOverlay.forEach((item) => {
//     item.addEventListener("mouseenter", hideLink);
//   });

//   header.addEventListener("mouseleave", hideLink);
// }


// Аккордион
const accordion = document.querySelector(".accordion");
const accordionItems = document.querySelectorAll(".accordion__item");
const accordionButton = document.querySelectorAll(".accordion__arrow");

function toggleAccordion(e) {
  let selected = e.target.closest(".accordion__item");
  console.log(selected);
  accordionItems.forEach((item) => {
    if (selected === item) {
      selected.classList.toggle("active");
      return;
    }
    item.classList.remove("active");
  });
}

accordionButton.forEach((button) => {
  button.addEventListener("click", (e) => toggleAccordion(e));
});

// Мобильное меню
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".nav");

function toggleMenu() {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);
