/* eslint-disable func-names */
/* eslint-disable func-style */
/* eslint-disable no-undef */
/* eslint-disable no-console */
console.log('navbar loaded');

window.onscroll = function () { grabNavbar(); };

const navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;
let once = true;

function grabNavbar() {
  console.log('window.pageYOffset: ', window.pageYOffset);
  console.log('sticky: ', sticky);
  const offset = window.pageYOffset;
  if (once) {
    sticky = navbar.offsetTop;
    once = false;
  }
  console.log(offset >= sticky);

  if (offset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
