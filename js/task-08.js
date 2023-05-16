const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill the required fields =)');
  } else {
    const formData = {
      [email.name]: email.value,
      [password.name]: password.value,
    };

    console.log(formData);

    event.currentTarget.reset();
  }
}
