// Задание 5
// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет его 
//  текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

function onInputChange(event) {
    outputNameEl.textContent = event.currentTarget.value;
}

inputNameEl.addEventListener('input', onInputChange);

function restoreDefaultName(event) {
    if (inputNameEl.value === '') {
        outputNameEl.textContent = 'Anonymous';
    }

}

inputNameEl.addEventListener('input', restoreDefaultName)