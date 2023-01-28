import './index.less';
import Title20 from '../../components/Title20/index';
import Render from '../../utils/Render';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import Links from '../../components/Links/index';
import Avatar from '../../components/Avatar/index';
import avatarImg from '../../static/assets/avatar.png';
import file from '../main/main.html';

const TITLES = [
  {
    text: 'Имя пользователя',
  },
  {
    text: 'Загрузите файл',
  },
];

const INPUTS = [
  {
    data: [
      {
        labelFor: 'email',
        labelText: 'Почта',
        inputType: 'email',
        inputId: 'email',
        inputName: 'email',
        value: 'pochta@yandex.ru',
        readonly: 'readonly',
      },
      {
        labelFor: 'login',
        labelText: 'Логин',
        inputType: 'text',
        inputId: 'login',
        inputName: 'login',
        value: 'ivanivanov',
        readonly: 'readonly',
      },
      {
        labelFor: 'first_name',
        labelText: 'Имя',
        inputType: 'text',
        inputId: 'first_name',
        inputName: 'first_name',
        value: 'Иван',
        readonly: 'readonly',
      },
      {
        labelFor: 'second_name',
        labelText: 'Фамилия',
        inputType: 'text',
        inputId: 'second_name',
        inputName: 'second_name',
        value: 'Иванов',
        readonly: 'readonly',
      },
      {
        labelFor: 'display_name',
        labelText: 'Имя в чате',
        inputType: 'text',
        inputId: 'display_name',
        inputName: 'display_name',
        value: 'Иван',
        readonly: 'readonly',
      },
      {
        labelFor: 'phone',
        labelText: 'Телефон',
        inputType: 'tel',
        inputId: 'phone',
        inputName: 'phone',
        value: '+7(909)9673030',
        readonly: 'readonly',
      },
    ],
  },
  {
    data: [
      {
        labelFor: 'oldPassword',
        labelText: 'Старый пароль',
        inputType: 'password',
        inputId: 'oldPassword',
        inputName: 'oldPassword',
        value: '',
        readonly: '',
      },
      {
        labelFor: 'newPassword',
        labelText: 'Новый пароль',
        inputType: 'password',
        inputId: 'newPassword',
        inputName: 'newPassword',
        value: '',
        readonly: '',
      },
      {
        labelFor: 'repeatPassword',
        labelText: 'Повторите новый пароль',
        inputType: 'password',
        inputId: 'repeatPassword',
        inputName: 'repeatPassword',
        value: '',
        readonly: '',
      },
    ],
  },
];

const BUTTONS = [
  {
    value: 'Сохранить',
    className: 'form__button --main',
    disabled: false,
  },
  {
    value: 'Сохранить',
    className: 'form__button',
    disabled: 'disabled',
  },
  {
    value: 'Поменять',
    className: 'form__button',
    disabled: 'disabled',
  },
];

const LINKS = {
  url: file,
  className: '--red',
  text: 'Выйти',
};

const titles = document.querySelectorAll('[data-render="title20"]');

titles.forEach((_title, index) => {
  const tmplTitle = new Title20(TITLES[index]);

  Render('[data-render="title20"]', tmplTitle, index);
});

const inputs = document.querySelectorAll('[data-render="inputs"]');

inputs.forEach((_input, index) => {
  const tmplInput = new Input(INPUTS[index]);

  Render('[data-render="inputs"]', tmplInput, index);
});

const buttons = document.querySelectorAll('[data-render="button_wrapper"]');

buttons.forEach((_button, index) => {
  const tmplTitle = new Button(BUTTONS[index]);

  Render('[data-render="button_wrapper"]', tmplTitle, index);
});

const avatar = new Avatar({
  url: avatarImg,
});

Render('[data-render="avatar"]', avatar);

const link = new Links(LINKS);

Render('[data-render="links"]', link);

// переписать как будет время

const changeButtons = document.querySelectorAll('[data-button]');
const changeDataButton = document.querySelector('.btn-link');

function setChangePassword(modal: Element) {
  // eslint-disable-next-line no-console
  console.log(modal);
  // eslint-disable-next-line no-console
  console.log('Открытие окна для смены пароля');
}

function setInputTypeFile(modal: Element) {
  const input = modal.querySelector('input');
  const button = modal.querySelector('[data-render="form__button');

  if (input && button) {
    input.addEventListener('change', () => {
      const LoadFile = this.files[0];

      if (LoadFile) {
        const span: HTMLElement | null = modal.querySelector('[data-render="input-file-text');

        if (span) {
          span.innerText = LoadFile.name;
          button.removeAttribute('disabled');

          button.addEventListener('click', (e) => {
            // eslint-disable-next-line no-console
            console.log('Фотография заменена');
            e.preventDefault();
          });
        }
      }
    });
  }
}

if (changeDataButton) {
  changeDataButton.addEventListener('click', () => {
    const form = document.querySelector('[data-form="profile-data"]');

    if (form) {
      const inputsElements = form.querySelectorAll('[data-render="form__input');
      const button = document.querySelector('[data-render="--main');

      form.classList.add('_active');

      inputsElements.forEach((input: HTMLInputElement) => {
        input.readOnly = false;
      });

      if (button) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          form.classList.remove('_active');

          inputsElements.forEach((input: HTMLInputElement) => {
            input.readOnly = true;
          });
        });
      }
    }
  });
}

changeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonDataset = button.getAttribute('data-button');
    const modal = document.querySelector(`[data-modal="${buttonDataset}"]`);

    if (buttonDataset && modal) {
      const close = modal.querySelector('.modal_close');

      if (close) {
        modal.classList.add('_active');

        close.addEventListener('click', () => {
          modal.classList.remove('_active');
        });

        if (+buttonDataset === 1) {
          setChangePassword(modal);
        }

        if (+buttonDataset === 2) {
          setInputTypeFile(modal);
        }
      }
    }
  });
});
