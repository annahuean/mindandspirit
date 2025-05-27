

/*burger menu*/
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleButton.textContent = navLinks.classList.contains('active') ? 'X' : '☰';
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    document.body.style.overflow = ''; // Enable scrolling
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggleButton.textContent = '☰';
  });
});


const links = document.querySelectorAll('.nav-links a');
const current = window.location.href;

links.forEach(link => {
  if(current.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

console.log("Toggle clicked");
console.log("Nav links active:", navLinks.classList.contains('active'));

/*carousel*/

const ncarousel = 11; // Number of carousels
const indexes = [];
const slides = [];
const totals = [];

// Initialize slides for each carousel

for (let i = 1; i <= ncarousel; i++) {

  indexes[i] = 0;
  slides[i] = document.querySelectorAll(`.image-container:nth-child(${i}) .carousel-slide`)[0];
  totals[i] = slides[i].children.length;

  window[`moveSlide${i}`] = function(dir) {
    indexes[i] = (indexes[i] + dir + totals[i]) % totals[i];
    slides[i].style.transform = `translateX(-${indexes[i] * 100}%)`;
   }

  };


