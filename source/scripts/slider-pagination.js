const buttons = document.querySelectorAll('[data-button]');
const dots = document.querySelectorAll('.slider-pagination__dot');
const points = document.querySelector('.slider-pagination__dots');
const sliderPagination = document.querySelector('.slider-pagination');
const slides = sliderPagination.querySelector('.slider-pagination__slides');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.button === 'next' ? 1 : -1;
    const activeSlide = slides.querySelector('[data-active]');
    const activeDot = points.querySelector('.slider-pagination__dot--active');
    const newActiveSlide =
      [...slides.children].indexOf(activeSlide) + direction;
    const newActiveDot = [...points.children].indexOf(activeDot) + direction;
    if (newActiveSlide <= 0 && direction === -1) {
      button.disabled = true;
    }
    if (newActiveSlide >= slides.children.length && direction === 1) {
      button.disabled = true;
    }
    if (newActiveSlide >= 0 && newActiveSlide < slides.children.length) {
      dots.forEach((el) => {
        el.classList.remove('slider-pagination__dot--active');
      });
      points.children[newActiveDot].classList.add(
        'slider-pagination__dot--active'
      );
      slides.children[newActiveSlide].dataset.active = true;
      slides.children[newActiveSlide].classList.remove('visually-hidden');
      activeSlide.classList.add('visually-hidden');
      delete activeSlide.dataset.active;
    }
    button.disabled = false;
  });
});

dots.forEach((dot) => {
  dot.addEventListener('click', (evt) => {
    const numberDot = Number(
      evt.target.closest('.slider-pagination__dot').dataset.id
    );
    const activeSlide = slides.querySelector('[data-active]');
    slides.children[numberDot].dataset.active = true;
    slides.children[numberDot].classList.remove('visually-hidden');
    dots.forEach((el) => {
      el.classList.remove('slider-pagination__dot--active');
    });
    dot.classList.add('slider-pagination__dot--active');
    const NumberSlide = Number(activeSlide.dataset.id);
    if (NumberSlide === numberDot) {
      dot.disabled = true;
    } else {
      activeSlide.classList.add('visually-hidden');
      delete activeSlide.dataset.active;
    }
    dot.disabled = false;
  });
});
