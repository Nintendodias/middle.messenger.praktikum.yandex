/* eslint-disable max-len */
import './index.less';
import Block from '../../utils/Block';
import template from './MessengerPage.hbs';
import Router from '../../utils/Router';
import ContactsItems from '../../components/ContactsItems/index';
import Messages from '../../components/Messages/index';
import Tooltip from '../../components/Tooltip/index';
import Image from '../../components/Image';
import {
  ButtonTooltip,
  openTooltip,
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
import openModal from '../../utils/openModal';
import {
  addContactsItems,
  setStoreChatProperty,
  setMessages,
} from '../../utils/Store/Actions';
import State from '../../utils/Store/Store';

const store = new State();

addContactsItems();
setStoreChatProperty();
setMessages();

type TProps = Record<string, unknown>;

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
      new Messages({
        target: '[data-render="messages"]',
        data: store.getState() ? store.getState().messages : [{}],
      }),
      new ContactsItems({
        target: '[data-render="contacts"]',
        data: store.getState() ? store.getState().chats : [{}],
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
      new ButtonTooltip({
        target: '[data-render="button_tooltip0"]',
        data: [
          {
            className: 'burger__menu',
            link: i_burger,
            events: {
              click: openTooltip,
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
              click: openTooltip,
            },
          },
        ],
      }),
      new Image({
        target: '[data-render="image0"]',
        data: [
          {
            url: i_avatar,
            width: '44px',
            height: '44px',
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
          },
        ],
      }),
    ]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
