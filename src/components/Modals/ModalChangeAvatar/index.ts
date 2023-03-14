import '../modal.less';
import './index.less';
import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import Input from '../../Input';
import { validate } from '../../../utils/InputsValidation';
import Button from '../../Button';
import Image from '../../Image';
import { i_close } from '../../../utils/StaticFileExport';
import closeModal from '../../../utils/closeModal';
import Title20 from '../../Title20';
import changeAvatar from '../../../utils/changeAvatar';
import changeChatAvatar from '../../../utils/changeChatAvatar';
import tmpl from './ModalChangeAvatar.tmpl';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

export default class ModalChangeAvatar extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Input({
        target: '[data-render="inputs"]',
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
        target: '[data-render="button_wrapper"]',
        data: [
          {
            value: 'Поменять',
            className: 'form__button',
            disabled: '',
            events: {
              click: props.from === 'message' ? changeChatAvatar : changeAvatar,
            },
          },
        ],
      }),
      new Image({
        target: '[data-render="img"]',
        data: [
          {
            url: i_close,
            class: 'modal_close',
            width: '44px',
            height: '44px',
            events: {
              click: () => closeModal(0),
            },
          },
        ],
      }),
      new Title20({
        target: '[data-render="title20"]',
        data: [
          {
            text: 'Загрузите файл',
          },
        ],
      }),
    ]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
