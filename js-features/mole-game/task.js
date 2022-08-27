
  let counterDead = document.getElementById('dead');
  let counterLost = document.getElementById('lost');

  function checkWinOrLost () {
    if (counterLost.textContent == 5) {
      alert('Вы проиграли!');
      counterLost.textContent, counterDead.textContent = 0;
    } else if (counterDead.textContent == 10) {
      alert('Вы победили!');
      counterLost.textContent = 0, counterDead.textContent = 0;
    }
  }

  const hole = index => document.getElementById(`hole${index}`)
  for (let i = 1; i < 10; i++) {
    hole(i).onclick = () => {
      hole(i).classList.contains('hole_has-mole') ? counterDead.textContent++ : counterLost.textContent++;
      checkWinOrLost()
    }
  }
