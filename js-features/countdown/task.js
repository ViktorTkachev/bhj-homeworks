let timer = document.getElementById('timer');

let interval = setInterval(() => {
  if (--timer.textContent === 0) {
    alert('Вы победили в конкурсе');
    return clearInterval(interval);
  }
}, 1000)
