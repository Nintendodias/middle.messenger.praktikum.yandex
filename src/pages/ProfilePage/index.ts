import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
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
import { user, logout } from '../../utils/API';
import Router from '../../utils/Router';
import ModalChangePassword from '../../components/Modals/ModalChangePassword';
import ModalChangeAvatar from '../../components/Modals/ModalChangeAvatar';
import tmpl from './ProfilePage.tmpl';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

export default class ProfilePage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new ModalChangePassword({
        target: '[data-render="modal0"]',
        data: [{}],
      }),
      new ModalChangeAvatar({
        target: '[data-render="modal1"]',
        data: [{}],
      }),
      new Title20({
        target: '[data-render="title20_0"]',
        data: [
          {
            text: 'Имя пользователя',
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
      new Links({
        target: '[data-render="links"]',
        data: [
          {
            className: '--red',
            text: 'Выйти',
            events: {
              click: () => {
                logout().then(() => {
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
              click: () => openModal('modal1'),
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
            text: 'Изменить пароль',
            events: {
              click: () => openModal('modal0'),
            },
          },
        ],
      }),
    ]);
  }

  componentDidMount() {
    user().then((value) => {
      const data = JSON.parse(value as string);
      const el = this.element;

      if (el) {
        const element = (el as Element[])[0];

        if (element) {
          const inputs = element.querySelectorAll('.form__input[readonly]');

          inputs.forEach((input: HTMLInputElement) => {
            const { id } = input;

            if (data[id]) {
              input.setAttribute('value', data[id]);
            }

            if (id === 'display_name' && !data.display_name) {
              input.setAttribute('value', data.login);
            }
          });

          const place = element.querySelector('.profile_avatar img');

          if (place && data.avatar) {
            (
              place as HTMLImageElement
            ).src = `https://ya-praktikum.tech/api/v2/resources${data.avatar}`;
          }
        }
      }
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
