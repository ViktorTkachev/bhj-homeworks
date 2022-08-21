
  let counterDead = document.getElementById('dead');
  let counterLost = document.getElementById('lost');

  const hole = index => document.getElementById(`hole${index}`),
  checkHole = index => hole(index).onclick = function() {
    if (hole(index).classList.contains('hole_has-mole')) {
      counterDead.textContent++;
    } else {
      counterLost.textContent++;
    }

    if (counterLost == 5) {
      alert('Вы проиграли!');
      counterLost.textContent = 0;
      counterDead.textContent = 0;
    } else if (counterDead == 10) {
      alert('Вы победили!');
      counterLost.textContent = 0;
      counterDead.textContent = 0;
    }
  }
