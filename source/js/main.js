'use strict';

var ESC_KEYCODE		= 27;
var ENTER_KEYCODE	= 13;

var form		= document.querySelector('form');


var formDate = [
	[document.querySelector('#name'), document.querySelector('.error--name')],
	[document.querySelector('#email'), document.querySelector('.error--email')],
	[document.querySelector('#number'), document.querySelector('.error--number')],
	[document.querySelector('#project'), document.querySelector('.error--project')]
];

var errorAll	= document.querySelector('.error--submit');


form.addEventListener('submit', function (evt) {
	//Убираем все сообщения об ошибках
	for (var i = 0; i < formDate.length; i++)	{
		formDate[i][1].classList.add('error');
		errorAll.classList.add('error')
	};

	//Если все поля не заполнены
	if (!formDate[0][0].value && !formDate[1][0].value && !formDate[2][0].value && !formDate[3][0].value) {
		evt.preventDefault();
		errorAll.classList.remove('error');
	}
	else {
		//Проверяем какие поля не заполнены и выводим соответствующее сообщение
		for (var i = 0; i < formDate.length; i++)
			if (!formDate[i][0].value) {
				evt.preventDefault();
				formDate[i][1].classList.remove('error');
			};
	}

});