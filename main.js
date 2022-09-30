const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const scare = document.querySelector('.scare');
const jumpscare = document.querySelector('.jumpscare');

btn.addEventListener('click', () => {
  overlay.style.display = 'none';
  scare.style.display = 'block';
  jumpscare.play();
  document.documentElement.requestFullscreen();
});