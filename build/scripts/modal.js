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
//# sourceMappingURL=modal.js.map
