const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.addEventListener('load', () => {
  if (xhr.readyState === xhr.DONE) {
    let obj = JSON.parse(xhr.response);
    pollTitle.innerText = obj.data.title;
    Array.from(obj.data.answers).forEach(item => {
      pollAnswers.insertAdjacentHTML('beforeend', `
      <button class="poll__answer">${item}</button>
      `);
    });
    const btns = document.querySelectorAll('.poll__answer');
    Array.from(btns, item => item.onclick = () => {
      alert('Спасибо, ваш голос засчитан!');
    });
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();
