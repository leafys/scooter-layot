const hamburger = document.getElementById('hamburger');
const navbarUl = document.getElementById('navbar');
const btnBuy = document.getElementById('btn-buy');

hamburger.addEventListener('click', () => {
  navbarUl.classList.toggle('show');
  btnBuy.classList.toggle('show');
});

const mainSwitch = document.getElementById('switch');
const mainLogo = document.getElementById('main-img');
const scooterWhite = document.querySelector('.main__scooter-white-img');
const scooterBlack = document.querySelector('.main__scooterBlack-img');
const body = document.body;

mainSwitch.addEventListener('click', () => {
  mainSwitch.classList.toggle('change-color');
  body.classList.toggle('dark');

  scooterWhite.classList.toggle('scooter-white-show');
  scooterBlack.classList.toggle('scooter-black-show');
});
