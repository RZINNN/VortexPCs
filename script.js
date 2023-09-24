let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    } else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color')
    }
}

/*teste*/
// JavaScript para o carrossel
const carousel = document.querySelector('.product-carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.product-carousel img');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[currentIndex].classList.add('active');
}

// Chame a função updateCarousel() para configurar o carrossel inicialmente
updateCarousel();

