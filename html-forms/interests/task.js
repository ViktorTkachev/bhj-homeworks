const checkbox = document.querySelectorAll('.interest__check');

Array.from(checkbox, item => item.onclick = () => {
  let childCheckbox = item.closest('.interest').getElementsByTagName('li');
  if (item.checked == true) {
    Array.from(childCheckbox).forEach(el => el.querySelector('input').checked = true);
  } else if (item.checked == false) {
    Array.from(childCheckbox).forEach(el => el.querySelector('input').checked = false);
  }
})
