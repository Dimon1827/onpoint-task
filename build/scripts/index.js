// source/scripts/scroll-bar.js
var $ = document.getElementById.bind(document);
var container = $("scrollbar-container");
var content = $("content");
var scroll = $("scrollbar");
content.addEventListener("scroll", () => {
  scroll.style.height = `${container.clientHeight * content.clientHeight / content.scrollHeight}px`;
  scroll.style.top = `${container.clientHeight * content.scrollTop / content.scrollHeight}px`;
});
var event = new Event("scroll");
window.addEventListener("resize", content.dispatchEvent.bind(content, event));
content.dispatchEvent(event);
scroll.addEventListener("mousedown", (start) => {
  start.preventDefault();
  const y = scroll.offsetTop;
  const onMove = function(end) {
    const delta = end.pageY - start.pageY;
    scroll.style.top = `${Math.min(
      container.clientHeight - scroll.clientHeight,
      Math.max(0, y + delta)
    )}px`;
    content.scrollTop = content.scrollHeight * scroll.offsetTop / container.clientHeight;
  };
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMove);
  });
});

// source/scripts/modal.js
var closeButton = document.querySelector(".modal__button-close");
var openButton = document.querySelector(".service__button");
var modal = document.querySelector(".modal");
closeButton.addEventListener("click", () => {
  modal.classList.toggle("modal__open");
});
openButton.addEventListener("click", () => {
  modal.classList.toggle("modal__open");
});

// source/scripts/slider-pagination.js
var buttons = document.querySelectorAll("[data-button]");
var dots = document.querySelectorAll(".slider-pagination__dot");
var points = document.querySelector(".slider-pagination__dots");
var sliderPagination = document.querySelector(".slider-pagination");
var slides = sliderPagination.querySelector(".slider-pagination__slides");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.button === "next" ? 1 : -1;
    const activeSlide = slides.querySelector("[data-active]");
    const activeDot = points.querySelector(".slider-pagination__dot--active");
    const newActiveSlide = [...slides.children].indexOf(activeSlide) + direction;
    const newActiveDot = [...points.children].indexOf(activeDot) + direction;
    if (newActiveSlide <= 0 && direction === -1) {
      button.disabled = true;
    }
    if (newActiveSlide >= slides.children.length && direction === 1) {
      button.disabled = true;
    }
    if (newActiveSlide >= 0 && newActiveSlide < slides.children.length) {
      dots.forEach((el) => {
        el.classList.remove("slider-pagination__dot--active");
      });
      points.children[newActiveDot].classList.add(
        "slider-pagination__dot--active"
      );
      slides.children[newActiveSlide].dataset.active = true;
      slides.children[newActiveSlide].classList.remove("visually-hidden");
      activeSlide.classList.add("visually-hidden");
      delete activeSlide.dataset.active;
    }
    button.disabled = false;
  });
});
dots.forEach((dot) => {
  dot.addEventListener("click", (evt) => {
    const numberDot = Number(
      evt.target.closest(".slider-pagination__dot").dataset.id
    );
    const activeSlide = slides.querySelector("[data-active]");
    slides.children[numberDot].dataset.active = true;
    slides.children[numberDot].classList.remove("visually-hidden");
    dots.forEach((el) => {
      el.classList.remove("slider-pagination__dot--active");
    });
    dot.classList.add("slider-pagination__dot--active");
    const NumberSlide = Number(activeSlide.dataset.id);
    if (NumberSlide === numberDot) {
      dot.disabled = true;
    } else {
      activeSlide.classList.add("visually-hidden");
      delete activeSlide.dataset.active;
    }
    dot.disabled = false;
  });
});

// source/scripts/slider.js
var wrapper = document.querySelector(".main-container");
var header = document.querySelector(".header");
var heroButton = document.querySelector(".hero__button");
var aboutList = document.querySelectorAll(".about__item");
var pressed = false;
var startX = 0;
var change;
var createAnimation = () => {
  aboutList.forEach((element) => {
    element.style.animation = "first-swim 3s linear forwards";
    element.style.webkitAnimation = "first-swim 3s linear forwards";
  });
  aboutList[2].style.animation = "first-swim 2.5s linear 0.5s forwards";
  aboutList[3].style.animation = "first-swim 2.3s linear 0.7s forwards";
  aboutList[4].style.animation = "first-swim 2.3s linear 0.7s forwards";
};
wrapper.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.clientX;
});
wrapper.addEventListener("mouseleave", () => {
  pressed = false;
});
wrapper.addEventListener("mouseup", (e) => {
  pressed = false;
  e.preventDefault;
  const touch = e.clientX;
  change = startX - touch;
  if (change > 0) {
    wrapper.scrollLeft += 1024;
  } else if (change < 0) {
    wrapper.scrollLeft -= 1024;
  }
});
wrapper.addEventListener("mousemove", () => {
  if (!pressed) {
    return;
  }
});
header.addEventListener("click", () => {
  wrapper.scrollLeft = 0;
});
heroButton.addEventListener("click", () => {
  createAnimation();
  wrapper.scrollLeft = 1024;
});
//# sourceMappingURL=index.js.map
