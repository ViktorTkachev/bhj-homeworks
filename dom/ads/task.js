const rotatorItem = document.querySelectorAll('.rotator__case');

// let i = 0;
// setInterval(() => {
//   if (rotatorItem[i].classList.contains('rotator__case_active')) {
//     rotatorItem[i].className = 'rotator__case';
//   }
//   if (i < rotatorItem.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   rotatorItem[i].className = 'rotator__case rotator__case_active';
// }, 2000)


const rotatorBox = document.querySelector('.rotator');
let activeItem;
setInterval(() => {
  for (const item of rotatorItem) {
    if (item.classList.contains('rotator__case_active')) {
      activeItem = item;
    }
  };
  if (activeItem.nextElementSibling !== null) {
    activeItem.className = 'rotator__case';
    activeItem.nextElementSibling.className = 'rotator__case rotator__case_active';
  } else {
    activeItem.className = 'rotator__case';
    rotatorBox.firstElementChild.className = 'rotator__case rotator__case_active';
  };
}, 1000)


// setInterval(() => {
//   const currentIndex = Array.from(rotatorItem).findIndex((item) => item.classList.contains('rotator__case_active'));
//   rotatorItem[currentIndex].className = 'rotator__case';
//   rotatorItem[(currentIndex + 1) % rotatorItem.length].className = 'rotator__case rotator__case_active';
// }, 1000)
