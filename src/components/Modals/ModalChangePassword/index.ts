import '../modal.less';
import './index.less';
import Block from '../../../utils/Block';
import template from './ModalChangePassword.hbs';
import Input from '../../Input';
import { onSubmit, validate } from '../../../utils/InputsValidation';
import Button from '../../Button';
import Image from '../../Image';
import { i_close } from '../../../utils/StaticFileExport';
import closeModal from '../../../utils/closeModal';

type TProps = Record<string, unknown>;

export default class ModalChangePassword extends Block {
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
              click: onSubmit,
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
    ]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
