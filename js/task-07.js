// Задание 7
// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.getElementById('font-size-control');
// console.log(inputEl.valueAsNumber);

const spanEl = document.getElementById('text');
// console.dir(spanEl);

inputEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  let value = event.currentTarget.value;

  spanEl.style.fontSize = `${value}px`;
}
