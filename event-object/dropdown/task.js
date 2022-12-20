const currentValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

currentValue.addEventListener('click', () => {
  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.className = 'dropdown__list';
  } else {
    dropdownList.className = 'dropdown__list dropdown__list_active';
  }
})

Array.from(dropdownItems, item => item.onclick = () => {
  currentValue.textContent = item.textContent;
  dropdownList.className = 'dropdown__list';
  return false;
})
