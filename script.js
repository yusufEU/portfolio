const form = document.querySelector('#form');
const message = document.querySelector('#form-message');

const username = document.querySelector('#username');
const msg = document.querySelector('#msg');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = username.value.trim();
  const msgValue = msg.value.trim();

  if (nameValue === '' || msgValue === '') {
    message.textContent = 'Заполни имя и сообщение.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Спасибо! Сообщение отправлено.';
  message.style.color = 'green';

  form.reset();
});