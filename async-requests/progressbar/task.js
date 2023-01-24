const sendForm = document.getElementById('form');
const progressBar = document.getElementById('progress');

sendForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(sendForm);

  xhr.upload.addEventListener('progress', (event) => {
    progressBar.value = event.loaded / event.total;
  })
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});
