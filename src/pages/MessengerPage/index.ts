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
import { chats } from '../../utils/API';

type TProps = Record<string, unknown>;

function findChats() {
  chats()
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

export default class MessengerPage extends Block {
  constructor(props: TProps) {
    super('div', props, [
      new Messages({
        target: '[data-render="messages"]',
        data: [
          {
            isSelf: '',
            text: 'Lorem ',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
          {
            isSelf: '--self',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deserunt minima aliquam hic aperiam mollitia, quo itaque, perspiciatis harum facere voluptates perferendis eos nihil veniam optio cum, at placeat reprehenderit.',
            date: '00:00',
          },
        ],
      }),
      new ContactsItems({
        target: '[data-render="contacts"]',
        data: findChats(),
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
          },
          {
            icon: i_delete,
            text: 'Удалить чат',
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
