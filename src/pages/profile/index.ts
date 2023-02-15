import './index.less';
import Title20 from '../../components/Title20/index';
import Render from '../../utils/Render';
import openModal from '../../utils/openModal';
import Input from '../../components/Input/index';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Button from '../../components/Button/index';
import ButtonLink from '../../components/ButtonLink/index';
import Links from '../../components/Links/index';
import Avatar from '../../components/Avatar/index';
import { i_avatar } from '../../utils/StaticFileExport';
import file from '../main/main.html';

const changeProfileData = () => {
  const form = document.querySelector('[data-form="profile-data"]');

  if (form) {
    const inputsElements = form.querySelectorAll('.form__input');
    const button = document.querySelector('.--main');

    form.classList.add('_active');

    inputsElements.forEach((input: HTMLInputElement) => {
      input.readOnly = false;
    });

    if (button) {
      button.addEventListener('click', () => {
        form.classList.remove('_active');

        inputsElements.forEach((input: HTMLInputElement) => {
          input.readOnly = true;
        });
      });
    }
  }
};

const TITLES = [
  {
    data: [
      {
        text: 'Имя пользователя',
      },
    ],
  },
  {
    data: [
      {
        text: 'Загрузите файл',
      },
    ],
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
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'login',
        labelText: 'Логин',
        inputType: 'text',
        inputId: 'login',
        inputName: 'login',
        value: 'ivanivanov',
        readonly: 'readonly',
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'first_name',
        labelText: 'Имя',
        inputType: 'text',
        inputId: 'first_name',
        inputName: 'first_name',
        value: 'Иван',
        readonly: 'readonly',
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'second_name',
        labelText: 'Фамилия',
        inputType: 'text',
        inputId: 'second_name',
        inputName: 'second_name',
        value: 'Иванов',
        readonly: 'readonly',
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'display_name',
        labelText: 'Имя в чате',
        inputType: 'text',
        inputId: 'display_name',
        inputName: 'display_name',
        value: 'Иван',
        readonly: 'readonly',
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'phone',
        labelText: 'Телефон',
        inputType: 'tel',
        inputId: 'phone',
        inputName: 'phone',
        value: '+79099673030',
        readonly: 'readonly',
        events: {
          blur: validate,
          focus: validate,
        },
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
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'new_password',
        labelText: 'Новый пароль',
        inputType: 'password',
        inputId: 'new_password',
        inputName: 'new_password',
        value: '',
        readonly: '',
        events: {
          blur: validate,
          focus: validate,
        },
      },
      {
        labelFor: 'repeat_password',
        labelText: 'Повторите новый пароль',
        inputType: 'password',
        inputId: 'repeat_password',
        inputName: 'repeat_password',
        value: '',
        readonly: '',
        events: {
          blur: validate,
          focus: validate,
        },
      },
    ],
  },
];

const BUTTONS = [
  {
    data: [
      {
        value: 'Сохранить',
        className: 'form__button --main',
        disabled: false,
        events: {
          click: onSubmit,
        },
      },
    ],
  },
  {
    data: [
      {
        value: 'Сохранить',
        className: 'form__button',
        disabled: '',
        events: {
          click: onSubmit,
        },
      },
    ],
  },
  {
    data: [
      {
        value: 'Поменять',
        className: 'form__button',
        disabled: 'disabled',
      },
    ],
  },
];

const LINKS = {
  data: [
    {
      url: file,
      className: '--red',
      text: 'Выйти',
    },
  ],
};

const AVATAR = {
  data: [
    {
      url: i_avatar,
      events: {
        click: openModal,
      },
    },
  ],
};

const BTNLINKS = {
  data: [
    {
      dataset: '',
      text: 'Изменить данные',
      events: {
        click: changeProfileData,
      },
    },
    {
      dataset: '1',
      text: 'Изменить пароль',
      events: {
        click: openModal,
      },
    },
  ],
};

const buttonLink = new ButtonLink(BTNLINKS);

Render('[data-render="btn-link"]', buttonLink);

const avatar = new Avatar(AVATAR);

Render('[data-render="avatar"]', avatar);

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

const link = new Links(LINKS);

Render('[data-render="links"]', link);
