const popup = document.getElementById('subscribe-modal');
const closePopup = document.querySelector('.modal__close');

function setCookie(key, value) {
  document.cookie = key + '=' + value;
}

function getCookie(key) {
  if (document.cookie != '') {
    const pairs = document.cookie.split('; ');
    const cookieFind = pairs.find(item => item.startsWith(key + '='));
    if (cookieFind) {
      return cookieFind.substr(key.length + 1);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

if (getCookie('popup') === false && getCookie('popup') !== true) {
  setTimeout(() => {
    popup.className = 'modal modal_active';
  }, 1000)
}

closePopup.addEventListener('click', () => {
  setCookie('popup', 'true');
  popup.className = 'modal';
})
