import './index.less';
import Block from '../../utils/Block';
import template from './LoginPage.hbs';
import Input from '../../components/Input';
import Title20 from '../../components/Title20';
import Button from '../../components/Button';
import Links from '../../components/Links';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Router from '../../utils/Router';

type TProps = Record<string, unknown>;

export default class LoginPage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Button({
        target: '[data-render="button"]',
        data: [
          {
            value: 'Войти',
            className: 'form__button',
            disabled: '',
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
            className: 'text-center',
            text: 'Нет аккаунта?',
            events: {
              click: () => {
                Router.getInstance().go('/sign-in');
              },
            },
          },
        ],
      }),
      new Title20({
        target: '[data-render="title20"]',
        data: [
          {
            text: 'Вход',
          },
        ],
      }),
      new Input({
        target: '[data-render="inputs"]',
        data: [
          {
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputId: 'login',
            inputName: 'login',
            value: '',
            readonly: '',
            events: {
              blur: validate,
              focus: validate,
            },
          },
          {
            labelFor: 'password',
            labelText: 'Пароль',
            inputType: 'password',
            inputId: 'password',
            inputName: 'password',
            value: '',
            readonly: '',
            events: {
              blur: validate,
              focus: validate,
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
