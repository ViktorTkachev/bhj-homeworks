const chatWidget = document.querySelector('.chat-widget');
const inputMessage = document.getElementById('chat-widget__input');
const addMessages = document.querySelector( '.chat-widget__messages' );

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
}

inputMessage.addEventListener('change', () => {
  if (addMessages.value !== '') {
    addMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">
          ${inputMessage.value}
        </div>
      </div>
    `;
  }

  setTimeout(robbotMessage, 1000);
})

function robbotMessage() {
  const messages = [
      'Привет!',
      'Как ваши дела?',
      'Я думаю это не правда',
      'Может вы не позавтракали?',
      'Мне не хотелось вас обижать',
      'Спросите у своей мамы',
      'Я куплю вам попкорн',
      'Что вы делаете?',
      'Хотите выпить чаю?',
      'Мы могли бы любить друг друга',
      'Это неправильный вопрос'
    ],
    index = Math.floor(Math.random() * messages.length);

  return addMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">
        ${messages[index]}
      </div>
    </div>
  `;
}
