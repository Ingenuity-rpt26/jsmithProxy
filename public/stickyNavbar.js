/* eslint-disable no-undef */
const navbar = document.getElementById('navbar');
let initialPosition;

// waits for page to be completely rendered prior to setting initialPosition
window.onload = () => {
  initialPosition = navbar.offsetTop;
};

const grabNavbar = () => {
  if (window.pageYOffset >= initialPosition) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = () => { grabNavbar(); };
