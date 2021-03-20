/* eslint-disable no-undef */
const navbar = document.getElementById('navbar');
let sticky;
let gotOffset = false;

const grabNavbar = () => {
  const offset = window.pageYOffset;
  if (!gotOffset) {
    sticky = navbar.offsetTop;
    gotOffset = true;
  }
  if (offset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = () => { grabNavbar(); };
