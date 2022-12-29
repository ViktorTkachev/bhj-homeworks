const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (var item of reveal) {
    const { top, bottom } = item.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
      item.className = 'reveal';
    } else {
      item.className = 'reveal reveal_active';
    }
  }
});
