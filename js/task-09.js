function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onClickBtn);

function onClickBtn(event) {
  spanEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = spanEl.textContent;
}
