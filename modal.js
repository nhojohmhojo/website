// static/js/modal.js
const logo = document.querySelector('.logo');
const contactBtn = document.querySelector('.contact-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose= document.querySelector('.modal-close');

logo.addEventListener("click", function () {
	window.location.reload();
});

// open modal
contactBtn.addEventListener('click', () => {
  modalBg.classList.add('bg-active');
});

// close modal when “×” is clicked
modalClose.addEventListener('click', () => {
  modalBg.classList.remove('bg-active');
});
