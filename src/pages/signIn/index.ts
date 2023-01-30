import './index.less';
import Input from '../../components/Input/index';
import Title20 from '../../components/Title20/index';
import Button from '../../components/Button/index';
import Render from '../../utils/Render';
import { onSubmit, validate } from '../../utils/InputsValidation';
import Links from '../../components/Links/index';
import file from '../login/login.html';

const INPUTS = {
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
};

const TITLE = {
  data: [
    {
      text: 'Регистрация',
    },
  ],
};

const BUTTON = {
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
};

const LINKS = {
  data: [
    {
      url: file,
      className: 'text-center',
      text: 'Войти',
    },
  ],
};

const inputs = new Input(INPUTS);

Render('[data-render="inputs"]', inputs);

const title = new Title20(TITLE);

Render('[data-render="title20"]', title);

const button = new Button(BUTTON);

Render('[data-render="button"]', button);

const link = new Links(LINKS);

Render('[data-render="links"]', link);
