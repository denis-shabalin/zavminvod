let form = document.querySelector('.questions-box__input');
let button = document.querySelector('.questions-box__btn');


button.addEventListener('click', function(event) {

   event.preventDefault();

    // Получаем значения из полей формы
   let username = form.querySelector('#username').value.trim();
   let phone = form.querySelector('#phone').value;
   let question = form.querySelector('.questions-box__text').value.trim();


   if (username && phone && question) { 
      if (isValidPhone(phone)) {
				simulateDataSending(username, phone, question);

            form.querySelector('#username').value = '';
            form.querySelector('#phone').value = '';
            form.querySelector('.questions-box__text').value = '';
            showModal();
      } else {
            alert('Введите корректный номер телефона');
      }
   } else {
      alert('Заполните все поля');
   }
});

function simulateDataSending(username, phone, question) {
	console.log('Отправка данных:');
	console.log('Имя:', username);
	console.log('Телефон:', phone);
	console.log('Вопрос:', question);
}

function isValidPhone(phone) {
    // Удаляем все символы, кроме цифр
		let phoneNumber = phone.replace(/\D/g, '');

		// Проверяем, что номер содержит 11/12 цифр
		if (phoneNumber.length === 12 || phoneNumber.length === 11) {
			return true;
		} else {
			return false;
		}
}