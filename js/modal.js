let modal = document.getElementById('modal');
let closeBtn = document.getElementsByClassName('close')[0];

// Функция для отображения модального окна
function showModal() {
   modal.style.display = 'block';
	document.body.classList.add('modal-open');
}

// Функция для скрытия модального окна
function closeModal() {
   modal.style.display = 'none';
	document.body.classList.remove('modal-open');
}

// Добавляем обработчик события на кнопку закрытия
closeBtn.addEventListener('click', closeModal);

// Закрыть модальное окно, если пользователь кликает за пределами модального окна
window.addEventListener('click', function(event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
});