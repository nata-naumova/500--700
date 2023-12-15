import { newsList } from "./vendor/demo.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  
  // Меню навигации
  const links = document.querySelectorAll(".nav__link");
  const menuOverlay = document.querySelectorAll(".menu__overlay");

  function showLink() {
    if (!this.parentNode.classList.contains("active")) {
      links.forEach((link) => {
        if (link.parentNode.classList.contains("active")) {
          link.parentNode.classList.remove("active");
        }
      });
      if (this.classList.contains("nav__level")) {
        this.parentNode.classList.add("active");
      }
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

  if (window.matchMedia("(max-width: 1000px)").matches) {
    // Планшет и мобильные устройства
    links.forEach((link) => {
      link.addEventListener("click", showLink);
    });
    menuOverlay.forEach((overlay) => {
      overlay.addEventListener("click", hideLink);
    });

  } else {
    // Десктоп
    links.forEach((link) => {
      link.addEventListener("mouseenter", showLink);
    });
    menuOverlay.forEach((overlay) => {
      overlay.addEventListener("click", hideLink);
    });
  }

  // Получение новостей
  const newsGrid = document.querySelector(".news-list");
  const newsSlider = document.getElementById("newsSlider");

  const renderStage = (data, wrapper, className) => {
    data.map((item) => {
      let article = document.createElement("article");
      article.className = `new ${className}`;
      article.innerHTML = `
    <img
        src="./images/${item.image}"
        alt="Изображение новости"
        class="new__image"
      />
      <div class="new__content">
        <a href="./single-page.html" class="new__title">${item.name}</a>
        <p class="new__subtitle">
          ${item.desc}
        </p>
      </div>
      <span class="new__date">${item.date}</span>
      `;
      wrapper.append(article);
    });
  };

  if (newsGrid) renderStage(newsList, newsGrid, "");
  if (newsSlider) renderStage(newsList, newsSlider, "swiper-slide");

  // Маска телефона и даты
  const phone = document.getElementById("phone");
  const phoneModal = document.getElementById("m-phone");
  const inputDate = document.getElementById("date");
  const inputTime = document.getElementById("time");

  // Маска для телефона
  const maskOptionsPhone = {
    mask: "+{7}(000)000-00-00",
  };

  // Маска для даты
  const maskOptionsDate = {
    mask: Date,
    min: new Date(1900, 0, 1), // минимальная дата 01.01.1900
  };

  // Маска для времени
  const maskOptionsTime = {
    mask: "HH{:}`MM",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        placeholderChar: "HH",
        from: 0,
        to: 23,
        maxLength: 2,
      },
      MM: {
        mask: IMask.MaskedRange,
        placeholderChar: "MM",
        from: 0,
        to: 59,
        maxLength: 2,
      },
    },
  };

  if (phone) IMask(phone, maskOptionsPhone);
  if (phoneModal) IMask(phoneModal, maskOptionsPhone);

  if (inputDate) IMask(inputDate, maskOptionsDate);
  if (inputTime) IMask(inputTime, maskOptionsTime);

  // Аккордион
  const accordionItems = document.querySelectorAll(".accordion__item");
  const accordionButton = document.querySelectorAll(".accordion__arrow");

  function toggleAccordion(e) {
    let selected = e.target.closest(".accordion__item");
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

  // Модально окно
  const modal = document.getElementById("modal");
  const modalCloseButton = document.querySelector(".modal__close");
  const overlay = modal.querySelector(".modal__overlay");

  const headerButton = document.querySelector(".header__button");

  const openModal = () => {
    modal.classList.add("open");
  };
  const closeModal = () => {
    modal.classList.remove("open");
  };

  headerButton.addEventListener("click", openModal);
  modalCloseButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
});
