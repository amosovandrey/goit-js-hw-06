// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа
// к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти
// значения полей формы методом reset.

const formEl = document.querySelector('.login-form'); // console.log(formEl);

const emailEl = formEl.querySelector('[name="email"]');

const passwordEl = formEl.querySelector('[name="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  if (emailEl.value === '' || passwordEl.value === '') {
    alert('Тю, та ви шо? Введіть шось.');
  }

  const dataFromForm = {
    email: '',
    password: '',
  };

  formData.forEach((value, name) => {
    console.log(value, name);
    formEl.reset();
  });
}
