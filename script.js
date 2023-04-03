
const popupLink = document.querySelector('.popup-link');
const popupOverlay = document.querySelector('.popup-overlay');
const popupClose = document.querySelector('.popup-close');
const boxI = document.querySelector('boxI')

popupLink.addEventListener('click', function() {
  popupOverlay.style.display = 'block';
});

popupClose.addEventListener('click', function() {
  popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', function(event) {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});


