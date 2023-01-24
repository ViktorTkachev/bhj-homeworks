const getTextAria = document.getElementById('editor');
const storedTextAriaValue = localStorage.getItem('textAriaText');

if (storedTextAriaValue) {
  getTextAria.value = storedTextAriaValue;
}

getTextAria.addEventListener('input', () => {
  const textAriaValue = getTextAria.value;
  localStorage.setItem('textAriaText', textAriaValue);
})
