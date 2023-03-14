import '../modal.less';
import './index.less';
import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import Title20 from '../../Title20';
import Input from '../../Input';
import Button from '../../Button';
import { onSubmit, validate } from '../../../utils/InputsValidation';
import Image from '../../Image';
import { i_close } from '../../../utils/StaticFileExport';
import closeModal from '../../../utils/closeModal';
import tmpl from './ModalRemoveChat.tmpl';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

export default class ModalRemoveChat extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Title20({
        target: '[data-render="title20"]',
        data: [
          {
            text: 'Удалить чат',
          },
        ],
      }),
      new Input({
        target: '[data-render="inputs"]',
        data: [
          {
            labelFor: 'title',
            labelText: 'Название чата',
            inputType: 'text',
            inputId: 'title2',
            inputName: 'title',
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
        target: '[data-render="button"]',
        data: [
          {
            value: 'Удалить чат',
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
