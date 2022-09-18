const linkMenu = document.querySelectorAll('.menu__link');
// console.log(linkMenu);


linkMenu.forEach((i) => i.onclick = function() {
  console.log(i.closest('.menu_sub'))
  // item.closest('.menu_sub').classList.contains('menu_active') ? item.closest('.menu_sub').className = 'menu menu_sub' : item.closest('.menu_sub').className = 'menu menu_sub menu_active';
});
