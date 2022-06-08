const myEmail = document.getElementById('email');
const myEmail_confirm = document.getElementById('email_confirm');
const myEmail_validation_alert = document.getElementById('email_validation_alert');

function addEmailValidation() {
  myEmail_confirm.addEventListener('input', emailValidation);
};

function emailValidation() {
  if (myEmail.value !== myEmail_confirm.value) {
    myEmail_validation_alert.classList.remove('hidden');
    myEmail_confirm.classList.add('alertBackGround');
  } else {
    myEmail_validation_alert.classList.add('hidden');
    myEmail_confirm.classList.remove('alertBackGround');
  }
};

window.onload = addEmailValidation;