const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // стоп перезагрузка
  alert('Спасибо');
});