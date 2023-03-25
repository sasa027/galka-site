const contactBtn = document.querySelector('.under-header-section__button');
const popupWindow = document.querySelector('.popup-window');
const cancelBtn = document.querySelector('.popup-window__cancel-button');
const popupBg = document.querySelector('.popup-window__bg');

contactBtn.addEventListener('click', function() {
  popupWindow.classList.add('no-hide');
  popupBg.classList.add('no-hide');
});


cancelBtn.addEventListener('click', function() {
  popupWindow.classList.remove('no-hide');
  popupBg.classList.remove('no-hide');
});
