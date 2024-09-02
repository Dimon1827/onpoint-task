const wrapper = document.querySelector('.main-container');
const header = document.querySelector('.header');
const heroButton = document.querySelector('.hero__button');
const aboutList = document.querySelectorAll('.about__item');

let pressed = false;
let startX = 0;
let change;

const createAnimation = () => {
  aboutList.forEach((element) => {
    element.style.animation = 'first-swim 3s linear forwards';
    element.style.webkitAnimation = 'first-swim 3s linear forwards';
  });
  aboutList[2].style.animation = 'first-swim 2.5s linear 0.5s forwards';
  aboutList[3].style.animation = 'first-swim 2.3s linear 0.7s forwards';
  aboutList[4].style.animation = 'first-swim 2.3s linear 0.7s forwards';
};

wrapper.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.clientX;
});

wrapper.addEventListener('mouseleave', () => {
  pressed = false;
});


wrapper.addEventListener('mouseup', (e) => {
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


wrapper.addEventListener('mousemove', () => {
  if (!pressed) {
    return;
  }
});

header.addEventListener('click', () => {
  wrapper.scrollLeft = 0;
});

heroButton.addEventListener('click', () => {
  createAnimation();
  wrapper.scrollLeft = 1024;
});
