const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');

xhr.addEventListener('load', () => {
  if (xhr.readyState === xhr.DONE && xhr.status == 200) {
    loader.className = 'loader';
    let obj = JSON.parse(xhr.response);
    Object.values(obj.response.Valute).forEach((item) => {
     items.insertAdjacentHTML('beforeend', `
     <div class="item">
       <div class="item__code">${item.CharCode}</div>
       <div class="item__value">${item.Value}</div>
       <div class="item__currency">руб.</div>
     </div>
     `);
   });

 }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();
