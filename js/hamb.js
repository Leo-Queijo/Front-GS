// Controle menu hamburguer mobile
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');

function toggleMenu() {
  menuMobile.classList.toggle('hidden');
}

btnMenu.addEventListener('click', toggleMenu);

// Popup informativo (dinamismo)
const btnProblemaInfo = document.getElementById('btn-problema-info');
const popupInfo = document.getElementById('popup-info');
const btnClosePopup = document.getElementById('btn-close-popup');

btnProblemaInfo.addEventListener('click', () => {
  popupInfo.classList.add('show');
});

btnClosePopup.addEventListener('click', () => {
  popupInfo.classList.remove('show');
});

// Fechar popup clicando fora da caixa
popupInfo.addEventListener('click', (e) => {
  if(e.target === popupInfo) {
    popupInfo.classList.remove('show');
  }
});
