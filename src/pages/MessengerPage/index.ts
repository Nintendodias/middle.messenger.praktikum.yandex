/* eslint-disable max-len */
import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import tmpl from './MessengerPage.tmpl';
import Router from '../../utils/Router';
import ContactsItems from '../../components/ContactsItems/index';
import Messages from '../../components/Messages/index';
import Tooltip from '../../components/Tooltip/index';
import Image from '../../components/Image';
import Header from '../../components/Header';
import {
  ButtonTooltip,
  openTooltip,
  closeTooltip
} from '../../components/ButtonTooltip/index';
import {
  i_profile,
  i_add,
  i_delete,
  i_photo,
  i_file,
  i_location,
  i_avatar,
  i_burger,
  i_includes,
  i_arrow,
} from '../../utils/StaticFileExport';
import ModalAddChat from '../../components/Modals/ModalAddChat';
import ModalRemoveChat from '../../components/Modals/ModalRemoveChat';
import ModalAddUsersInChat from '../../components/Modals/ModalAddUsersInChat';
import ModalChangeAvatar from '../../components/Modals/ModalChangeAvatar';
import openModal from '../../utils/openModal';
import {
  addContactsItems,
  setStoreChatProperty,
  setMessages,
} from '../../utils/Store/Actions';
import { sendMessage } from '../../utils/chats';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

setStoreChatProperty();
setMessages();

export default class MessengerPage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new ModalAddUsersInChat({
        target: '[ data-render="modal2"]',
        data: [{}],
      }),
      new ModalAddChat({
        target: '[ data-render="modal0"]',
        data: [{}],
      }),
      new ModalRemoveChat({
        target: '[ data-render="modal1"]',
        data: [{}],
      }),
      new ModalChangeAvatar({
        target: '[data-render="modal3"]',
        data: [{}],
        from: 'message',
      }),
      new Messages({
        target: '[data-render="messages"]',
        data: [{}],
      }),
      new ContactsItems({
        target: '[data-render="contacts"]',
        data: [{}],
      }),
      new Tooltip({
        target: '[data-render="tooltip0"]',
        data: [
          {
            icon: i_profile,
            text: 'Профиль',
            events: {
              click: () => {
                Router.getInstance().go('/profile');
              },
            },
          },
          {
            icon: i_add,
            text: 'Добавить чат',
            events: {
              click: () => openModal('modal0'),
            },
          },
          {
            icon: i_delete,
            text: 'Удалить чат',
            events: {
              click: () => openModal('modal1'),
            },
          },
        ],
      }),
      new Tooltip({
        target: '[data-render="tooltip1"]',
        data: [
          {
            icon: i_photo,
            text: 'Фото или Видео',
          },
          {
            icon: i_file,
            text: 'Файл',
          },
          {
            icon: i_location,
            text: 'Локация',
          },
        ],
      }),
      new Tooltip({
        target: '[data-render="tooltip2"]',
        data: [
          {
            icon: i_add,
            text: 'Сменить иконку',
            events: {
              click: () => openModal('modal3'),
            },
          },
        ],
      }),
      new ButtonTooltip({
        target: '[data-render="button_tooltip0"]',
        data: [
          {
            className: 'burger__menu',
            link: i_burger,
            events: {
              mouseover: openTooltip,
              mouseout: closeTooltip,
            },
          },
        ],
      }),
      new ButtonTooltip({
        target: '[data-render="button_tooltip1"]',
        data: [
          {
            className: 'msg__icon',
            link: i_includes,
            events: {
              mouseover: openTooltip,
              mouseout: closeTooltip,
            },
          },
        ],
      }),
      new ButtonTooltip({
        target: '[data-render="button_tooltip2"]',
        data: [
          {
            className: 'burger__menu',
            link: i_burger,
            events: {
              mouseover: openTooltip,
              mouseout: closeTooltip,
            },
          },
        ],
      }),
      new Header({
        target: '[data-render="header"]',
        data: [
          {
            url: i_avatar,
            width: '44px',
            height: '44px',
            title: 'Имя',
          },
        ],
      }),
      new Image({
        target: '[data-render="image1"]',
        data: [
          {
            url: i_arrow,
            width: '28px',
            height: '28px',
            class: '--cursor',
            events: {
              click: sendMessage,
            },
          },
        ],
      }),
    ]);
  }

  render() {
    addContactsItems();
    return this.compile(template, { ...this.props });
  }
}
