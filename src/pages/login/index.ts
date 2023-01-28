import './index.less';
import Input from '../../components/Input/index';
import Title20 from '../../components/Title20/index';
import Render from '../../utils/Render';
import Links from '../../components/Links/index';
import file from '../signIn/signIn.html';

const MENU = {
  data: [
    {
      labelFor: 'login',
      labelText: 'Логин',
      inputType: 'text',
      inputId: 'login',
      inputName: 'login',
      value: '',
      readonly: '',
    },
    {
      labelFor: 'password',
      labelText: 'Пароль',
      inputType: 'password',
      inputId: 'password',
      inputName: 'password',
      value: '',
      readonly: '',
    },
  ],
};

const TITLE = {
  text: 'Вход',
};

const LINKS = {
  url: file,
  className: 'text-center',
  text: 'Нет аккаунта?',
};

const menu = new Input(MENU);

Render('[data-render="inputs"]', menu);

const title = new Title20(TITLE);

Render('[data-render="title20"]', title);

const link = new Links(LINKS);

Render('[data-render="links"]', link);
