// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Сколько символов должно быть в инпуте, указывается в 
// его атрибуте data - length.
// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', isValidSymbolLength);

function isValidSymbolLength(event) {
    let inputLength = event.currentTarget.value.length;
    let inputDataLength = Number(inputEl.getAttribute('data-length'));

    if (inputLength === inputDataLength ) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {
            inputEl.classList.add('invalid');
            inputEl.classList.remove('valid');
    }
}

