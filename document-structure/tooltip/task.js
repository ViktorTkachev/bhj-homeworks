const tooltips = document.querySelectorAll('.has-tooltip');
let tooltipElem = false;

Array.from(tooltips, item => item.onclick = () => {
  let tooltipHtml = item.getAttribute('title');

  if (!tooltipElem) {
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip tooltip_active';
    tooltipElem.innerHTML = tooltipHtml;
    item.insertAdjacentElement('afterend', tooltipElem);
  } else {
    tooltipElem.remove();
    return tooltipElem = false;
  }
  // спозиционируем tooltip снизу от аннотируемого элемента
  let coords = item.getBoundingClientRect();
  let left = coords.left;
  let top = coords.bottom;
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
  return false;
})
