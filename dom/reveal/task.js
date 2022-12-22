const reveal = document.querySelector('.reveal');

function isVisible (element) {
  const { top, bottom } = element.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight) {
    reveal.className = 'reveal';
  } else {
    reveal.className = 'reveal reveal_active';
  }
}

setInterval(() => {
  isVisible(reveal);
}, 1000)
