import './index.less';
import Block from '../../utils/Block';
import template from './ProfilePage.hbs';
import Router from '../../utils/Router';
import './index.less';
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

type TProps = Record<string, unknown>;

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
            value: 'Сохранить',
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
            disabled: 'disabled',
          },
        ],
      }),
      new Links({
        target: '[data-render="links"]',
        data: [
          {
            className: '--red',
            text: 'Выйти',
            // events: {
            //   click: logOut,
            // },
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

  render() {
    return this.compile(template, { ...this.props });
  }
}
