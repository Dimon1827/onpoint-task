const closeButton = document.querySelector('.modal__button-close');
const openButton = document.querySelector('.service__button');
const modal = document.querySelector('.modal');

closeButton.addEventListener('click', () => {
  modal.classList.toggle('modal__open');
});

openButton.addEventListener('click', () => {
  modal.classList.toggle('modal__open');
});

