import './index.less';
import '../../components/Input/index.ts';
import '../../components/Buttons/index.ts';
import '../../components/Links/index.ts';
import '../../components/Avatar/index.ts';

const buttons = document.querySelectorAll('[data-button]');
const changeDataButton = document.querySelector('.btn-link');

function setChangePassword(modal) {
  console.log(modal);
  console.log('Открытие окна для смены пароля');
}

function setInputTypeFile(modal) {
  const input = modal.querySelector('input');
  const button = modal.querySelector('.form__button');

  input.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const span = modal.querySelector('.input-file-text');

      span.innerText = file.name;
      button.removeAttribute('disabled');

      button.addEventListener('click', (e) => {
        console.log('Фотография заменена');
        e.preventDefault();
      });
    }
  });
}

changeDataButton.addEventListener('click', () => {
  const form = document.querySelector('[data-form="profile-data"]');
  const inputs = form.querySelectorAll('.form__input');
  const button = document.querySelector('.--main');

  form.classList.add('_active');

  inputs.forEach((input) => {
    input.readOnly = false;
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.remove('_active');

    inputs.forEach((input) => {
      input.readOnly = true;
    });
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonDataset = +button.dataset.button;
    const modal = document.querySelector(`[data-modal="${buttonDataset}"]`);
    const close = modal.querySelector('.modal_close');

    modal.classList.add('_active');

    close.addEventListener('click', () => {
      modal.classList.remove('_active');
    });

    if (buttonDataset === 1) {
      setChangePassword(modal);
    }

    if (buttonDataset === 2) {
      setInputTypeFile(modal);
    }
  });
});
