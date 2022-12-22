const fontSizeList = document.querySelectorAll('.font-size');
const bookItem = document.querySelector('.book');

Array.from(fontSizeList, item => item.onclick = () => {
  let attr = item.getAttribute('data-size');
  for (var i = 0; i < fontSizeList.length; i++) {
    fontSizeList[i].classList.remove('font-size_active');
  }
  if (attr === "small") {
    item.classList.add('font-size_active');
    bookItem.className = 'book book_fs-small';
  } else if (attr === "big") {
    item.classList.add('font-size_active');
    bookItem.className = 'book book_fs-big';
  } else if (attr === null) {
    item.classList.add('font-size_active');
    bookItem.className = 'book';
  }
  return false;
})
