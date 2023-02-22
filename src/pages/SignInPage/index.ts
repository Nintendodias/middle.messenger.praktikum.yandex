import './index.less';
import Block from '../../utils/Block';
import template from './SignInPage.hbs';
import Input from '../../components/Input';
import Title20 from '../../components/Title20';
import Button from '../../components/Button';
import Links from '../../components/Links';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Router from '../../utils/Router';

type TProps = Record<string, unknown>;

export default class SignInPage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Button({
        target: '[data-render="button"]',
        data: [
          {
            value: 'Зарегистрироваться',
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
            text: 'Войти',
            events: {
              click: () => {
                Router.getInstance().go('/');
              },
            },
          },
        ],
      }),
      new Title20({
        target: '[data-render="title20"]',
        data: [
          {
            text: 'Регистрация',
          },
        ],
      }),
      new Input({
        target: '[data-render="inputs"]',
        data: [
          {
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputId: 'email',
            inputName: 'email',
            value: '',
            readonly: '',
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
            readonly: '',
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
            readonly: '',
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
            readonly: '',
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
          {
            labelFor: 'repeat_password',
            labelText: 'Пароль (ещё раз)',
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
    ]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
