let clickerCounter = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');

image.onclick = () => {
  image.width = ++clickerCounter.textContent % 2 == 0 ? 200 : 250;
}
