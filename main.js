const overlay = document.querySelector('.overlay');
const scare = document.querySelector('.scare');
const jumpscare = document.querySelector('.jumpscare');

const $jumpscare = () => {
  overlay.style.display = 'none';
  scare.style.display = 'block';
  jumpscare.play();
  document.documentElement.requestFullscreen();
}