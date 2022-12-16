const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const sliderDot = document.querySelectorAll('.slider__dot');

let i = 0;
sliderDot[i].className = 'slider__dot slider__dot_active';

nextButton.onclick = () => {
  if (slides[i].classList.contains('slider__item_active')) {
    slides[i].className = 'slider__item';
    sliderDot[i].className = 'slider__dot';
    if (i < slides.length - 1) {
      i++;
    } else {
      i = 0;
    }
    slides[i].className = 'slider__item slider__item_active';
    sliderDot[i].className = 'slider__dot slider__dot_active';
  }
}

prevButton.onclick = () => {
  if (slides[i].classList.contains('slider__item_active')) {
    slides[i].className = 'slider__item';
    sliderDot[i].className = 'slider__dot';
    if (i > 0 ) {
      i--;
    } else {
      i = slides.length - 1;
    }
    slides[i].className = 'slider__item slider__item_active';
    sliderDot[i].className = 'slider__dot slider__dot_active';
  }
}

Array.from(sliderDot, item => item.onclick = () => {
  for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].className = 'slider__dot';
    slides[i].className = 'slider__item';
  }
  item.className = 'slider__dot slider__dot_active';
  for (let j = 0; j < sliderDot.length; j++) {
    if (sliderDot[j].classList.contains('slider__dot_active')) {
      slides[j].className = 'slider__item slider__item_active';
      i = j;
    }
  }
})
