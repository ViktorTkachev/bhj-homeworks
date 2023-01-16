const tooltips = document.querySelectorAll('.has-tooltip');
let tooltipElem = document.createElement('div');
tooltipElem.className = 'tooltip';

Array.from(tooltips, item => item.onclick = () => {
  let tooltipHtml = item.getAttribute('title');
  item.insertAdjacentElement('afterend', tooltipElem);
  let coords = item.getBoundingClientRect();
  let left = coords.left;
  let top = coords.bottom;

  if (tooltipElem.textContent === tooltipHtml) {
    tooltipElem.classList.toggle('tooltip');
    return;
  } else {
    tooltipElem.textContent = tooltipHtml;
    tooltipElem.classList.add('tooltip_active');
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
  }

  return false;
});
