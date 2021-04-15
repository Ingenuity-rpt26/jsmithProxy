/* eslint-disable no-undef */
const navbar = document.getElementById('navbar');
const about = document.getElementById('about');
const instructors = document.getElementById('instructors');
const syllabus = document.getElementById('syllabus');
const reviews = document.getElementById('reviews');
const enrollmentOptions = document.getElementById('enrollment');
const faq = document.getElementById('faq');

const initialPosition = {};
const idLocators = {};
idLocators.about = document.getElementById('link-about');
idLocators.instructors = document.getElementById('link-instructors');
idLocators.syllabus = document.getElementById('link-syllabus');
idLocators.reviews = document.getElementById('link-reviews');
idLocators.enrollmentOptions = document.getElementById('link-enrollment');
idLocators.faq = document.getElementById('link-faq');

// waits for page to be completely rendered prior to setting initialPosition
window.onload = () => {
  initialPosition.navbar = navbar.offsetTop;
  initialPosition.about = about.offsetTop;
  initialPosition.instructors = instructors.offsetTop;
  initialPosition.syllabus = syllabus.offsetTop;
  initialPosition.reviews = reviews.offsetTop;
  initialPosition.enrollmentOptions = enrollmentOptions.offsetTop;
  initialPosition.faq = faq.offsetTop;
};

const grabNavbar = () => {
  const offset = window.pageYOffset;

  // for sticky functionality
  if (offset >= initialPosition.navbar) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  // for about
  if (offset >= initialPosition.about - 115 && offset < initialPosition.instructors - 150) {
    idLocators.about.classList.remove('gray');
    idLocators.about.classList.add('blue');
  } else {
    idLocators.about.classList.remove('blue');
    idLocators.about.classList.add('gray');
  }
  // for instructors
  if (offset >= initialPosition.instructors - 150 && offset < initialPosition.syllabus - 150) {
    idLocators.instructors.classList.remove('gray');
    idLocators.instructors.classList.add('blue');
  } else {
    idLocators.instructors.classList.remove('blue');
    idLocators.instructors.classList.add('gray');
  }
  // for syllabus
  if (offset >= initialPosition.syllabus - 150 && offset < initialPosition.reviews - 150) {
    idLocators.syllabus.classList.remove('gray');
    idLocators.syllabus.classList.add('blue');
  } else {
    idLocators.syllabus.classList.remove('blue');
    idLocators.syllabus.classList.add('gray');
  }
  // for reviews
  if (offset >= initialPosition.reviews - 150 && offset < initialPosition.enrollmentOptions - 150) {
    idLocators.reviews.classList.remove('gray');
    idLocators.reviews.classList.add('blue');
  } else {
    idLocators.reviews.classList.remove('blue');
    idLocators.reviews.classList.add('gray');
  }
  // for enrollment options
  if (offset >= initialPosition.enrollmentOptions && offset < initialPosition.faq - 150) {
    idLocators.enrollmentOptions.classList.remove('gray');
    idLocators.enrollmentOptions.classList.add('blue');
  } else {
    idLocators.enrollmentOptions.classList.remove('blue');
    idLocators.enrollmentOptions.classList.add('gray');
  }
  // for faq
  if (offset >= initialPosition.faq) {
    idLocators.faq.classList.remove('gray');
    idLocators.faq.classList.add('blue');
  } else {
    idLocators.faq.classList.remove('blue');
    idLocators.faq.classList.add('gray');
  }
};

window.onscroll = () => { grabNavbar(); };
