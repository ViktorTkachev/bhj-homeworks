const rotatorItem = document.querySelectorAll('.rotator__case');
let i = 0;

setInterval(() => {
  if (rotatorItem[i].classList.contains('rotator__case_active')) {
    rotatorItem[i].className = 'rotator__case';
  }
  if (i < rotatorItem.length - 1) {
    i++;
  } else {
    i = 0;
  }
  rotatorItem[i].className = 'rotator__case rotator__case_active';
}, 2000)
