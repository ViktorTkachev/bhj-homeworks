let clickerCounter = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');

image.onclick = function() {
  clickerCounter.textContent++;
  if (clickerCounter.textContent % 2 == 0) {
    image.width = 200;
  } else {
    image.width = 250;
  }
}
