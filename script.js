//Pop-up window---------------------------------

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
//Pop-up window--------------------------------

//zoom img-------------------------------------
const greyBg = document.querySelector('.grey-bg');
const photoGaleryPanel = document.querySelector('.photo-galery-panel');
const photoGaleryPanelCloseBtn = document.querySelector('.photo-galery-panel__close-btn');



document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".zoomable");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      image.classList.add("item-photo-zoom-styles")
      greyBg.style.display = "block"
      photoGaleryPanel.style.display = "flex"
    });
  });
});

photoGaleryPanelCloseBtn.addEventListener('click', function() {
  itemPhotoZoomStyles = document.querySelector('.item-photo-zoom-styles');
  itemPhotoZoomStyles.classList.remove("item-photo-zoom-styles")
  greyBg.style.display = "none"
  photoGaleryPanel.style.display = "none"


});


//zoom img--------------------------------------



