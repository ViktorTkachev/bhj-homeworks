const quantityControls = document.querySelectorAll('.product__quantity-control');
const addBtn = document.querySelectorAll('.product__add');

Array.from(quantityControls, item => item.onclick = () => {
  let count = Number(item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent);
  if (item.classList.contains('product__quantity-control_dec') && count > 1) {
    --count;
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = count;
  } else if (item.classList.contains('product__quantity-control_inc')) {
    ++count;
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = count;
  }
  return false;
})

Array.from(addBtn, item => item.onclick = () => {
  let currentIdAdd = item.closest('.product').dataset.id;
  let cartProduct = document.querySelectorAll('.cart__product');
  let cartProductsList = document.querySelector('.cart__products');
  let matchCart = Array.from(cartProduct).find(el => el.dataset.id === currentIdAdd);

  if (matchCart) {
    let hasQuantityValue = Number(matchCart.querySelector('.cart__product-count').textContent);
    let addQuantityValue = Number(item.closest('.product__quantity').querySelector('.product__quantity-value').textContent);
    let commonCount = hasQuantityValue + addQuantityValue;
    matchCart.querySelector('.cart__product-count').textContent = commonCount;
  } else {
    cartProductsList.insertAdjacentHTML('beforeend', `
    <div class="cart__product" data-id=${currentIdAdd}>
        <img class="cart__product-image" src=${item.closest('.product').querySelector('img').getAttribute('src')}>
        <div class="cart__product-count">${item.closest('.product__quantity').querySelector('.product__quantity-value').textContent}</div>
    </div>
    `);
  }
  return false;
})
