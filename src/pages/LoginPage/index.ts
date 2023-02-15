import './index.less';
import Block from '../../utils/Block';
import template from './LoginPage.hbs';
import Input from '../../components/Input/index';
import Title20 from '../../components/Title20/index';
import Button from '../../components/Button/index';
import Render from '../../utils/Render';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Links from '../../components/Links/index';
import file from '../signIn/signIn.html';

type TProps = Record<string, unknown>;

export default class LoginPage extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

setTimeout(() => {
  const INPUTS = {
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
  };

  const TITLE = {
    data: [
      {
        text: 'Вход',
      },
    ],
  };

  const LINKS = {
    data: [
      {
        url: file,
        className: 'text-center',
        text: 'Нет аккаунта?',
      },
    ],
  };

  const BUTTON = {
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
  };

  const button = new Button(BUTTON);

  Render('[data-render="button"]', button);

  const menu = new Input(INPUTS);

  Render('[data-render="inputs"]', menu);

  const title = new Title20(TITLE);

  Render('[data-render="title20"]', title);

  const link = new Links(LINKS);

  Render('[data-render="links"]', link);
}, 0);
