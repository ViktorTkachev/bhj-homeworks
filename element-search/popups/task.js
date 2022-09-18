const mainPopup = document.getElementById('modal_main');
setTimeout(() => {
  mainPopup.className = 'modal modal_active'
}, 1000)

const successPopup = document.getElementById('modal_success'),
btnSuccess = document.querySelector('.show-success');
btnSuccess.onclick = () => {
  successPopup.className = 'modal modal_active';
}


const closePopup = document.querySelectorAll('.modal__close');

Array.from(closePopup, (index) => index.onclick = function() {
  mainPopup.className = 'modal';
  successPopup.className = 'modal';
})
