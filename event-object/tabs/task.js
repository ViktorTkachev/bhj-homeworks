const tabMenu = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

Array.from(tabMenu, item => item.onclick = () => {
  for (var i = 0; i < tabMenu.length; i++) {
    tabMenu[i].className = 'tab';
    tabContent[i].className = 'tab__content';
  }
  item.className = 'tab tab_active';
  for (var j = 0; j < tabMenu.length; j++) {
    if (tabMenu[j].classList.contains('tab_active')) {
      tabContent[j].className = 'tab__content tab__content_active';
    }
  }
  return false;
})
