const linkMenu = document.querySelectorAll('.menu__link');

Array.from(linkMenu, item => item.onclick = () => {
  const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
  if(menuSub != null && menuSub.classList.contains('menu_active')) {
    menuSub.className = 'menu menu_sub';
  } else {
    menuSub.className = 'menu menu_sub menu_active';
  }
  return false;
})
