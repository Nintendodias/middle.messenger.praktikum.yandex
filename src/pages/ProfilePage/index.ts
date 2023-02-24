import './index.less';
import Block from '../../utils/Block';
import template from './ProfilePage.hbs';
import Title20 from '../../components/Title20/index';
import openModal from '../../utils/openModal';
import changeProfileData from '../../utils/changeProfileData';
import Input from '../../components/Input/index';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Button from '../../components/Button/index';
import ButtonLink from '../../components/ButtonLink/index';
import Links from '../../components/Links/index';
import Avatar from '../../components/Avatar/index';
import { i_avatar } from '../../utils/StaticFileExport';
import { user, logout, sendAvatar } from '../../utils/API';
import Router from '../../utils/Router';

type TProps = Record<string, unknown>;

function changeAvatar(event: any): void {
  event.preventDefault();

  const input = event.target.closest('form').querySelector('input');

  if (input) {
    const file = input.files[0];

    if (file) {
      const fd = new FormData();

      fd.append('avatar', file);

      sendAvatar(fd).then((value) => {
        const data = JSON.parse(value);
        const place = document.body.querySelector('.profile_avatar img');

        if (place) {
          place.src = `https://ya-praktikum.tech/api/v2/resources${data.avatar}`;
        }
      });
    }
  }
}

export default class ProfilePage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Title20({
        target: '[data-render="title20_0"]',
        data: [
          {
            text: 'Имя пользователя',
          },
        ],
      }),
      new Title20({
        target: '[data-render="title20_1"]',
        data: [
          {
            text: 'Загрузите файл',
          },
        ],
      }),
      new Input({
        target: '[data-render="inputs0"]',
        data: [
          {
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputId: 'email',
            inputName: 'email',
            value: '',
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
            value: '',
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
            value: '',
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
            value: '',
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
            value: '',
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
            value: '',
            readonly: 'readonly',
            events: {
              blur: validate,
              focus: validate,
            },
          },
        ],
      }),
      new Input({
        target: '[data-render="inputs1"]',
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
            labelFor: 'newPassword',
            labelText: 'Новый пароль',
            inputType: 'password',
            inputId: 'newPassword',
            inputName: 'newPassword',
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
      }),
      new Button({
        target: '[data-render="button_wrapper0"]',
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
      }),
      new Button({
        target: '[data-render="button_wrapper1"]',
        data: [
          {
            value: 'Поменять',
            className: 'form__button',
            disabled: '',
            events: {
              click: onSubmit,
            },
          },
        ],
      }),
      new Button({
        target: '[data-render="button_wrapper2"]',
        data: [
          {
            value: 'Поменять',
            className: 'form__button',
            disabled: '',
            events: {
              click: changeAvatar,
            },
          },
        ],
      }),
      new Links({
        target: '[data-render="links"]',
        data: [
          {
            className: '--red',
            text: 'Выйти',
            events: {
              click: () => {
                logout().then((_value) => {
                  Router.getInstance().go('/');
                });
              },
            },
          },
        ],
      }),
      new Avatar({
        target: '[data-render="avatar"]',
        data: [
          {
            url: i_avatar,
            events: {
              click: openModal,
            },
          },
        ],
      }),
      new ButtonLink({
        target: '[data-render="btn-link"]',
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
      }),
    ]);
  }

  componentDidMount() {
    user().then((value) => {
      const data = JSON.parse(value);
      const inputs = this.element[0].querySelectorAll('.form__input[readonly]');

      inputs.forEach((input) => {
        const { id } = input;

        if (data[id]) {
          input.setAttribute('value', data[id]);
        }

        if (id === 'display_name' && !data.display_name) {
          input.setAttribute('value', data.login);
        }
      });

      const place = this.element[0].querySelector('.profile_avatar img');

      if (place && data.avatar) {
        place.src = `https://ya-praktikum.tech/api/v2/resources${data.avatar}`;
      }
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
