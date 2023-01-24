const sendForm = document.getElementById('signin__form');
const signinElem = document.getElementById('signin');
const welcomeElem = document.getElementById('welcome');
const welcomeUserId = document.getElementById('user_id');
const storedData = localStorage.getItem('userId');

if ( storedData ) {
  signinElem.classList.remove( 'signin_active' );
  welcomeElem.classList.add( 'welcome_active' );
  welcomeUserId.textContent = storedData;
} else {
  sendForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData( sendForm );

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send( formData );

    xhr.onload = () => {
      if ( xhr.status == 200 || xhr.status == 201 ) {
        let obj = JSON.parse( xhr.response );
        if ( obj.success === true ) {
          signinElem.classList.remove( 'signin_active' );
          welcomeElem.classList.add( 'welcome_active' );
          if ( obj['user_id'] ) {
            welcomeUserId.textContent = obj['user_id'];
            localStorage.setItem( 'userId', obj['user_id'] );
          }
        } else {
          alert( 'Неверный логин/пароль' )
        }
      }
    }
  });
}
