/* eslint-disable max-len */
import './index.less';
import ContactsItems from '../../components/ContactsItems/index';
import Messages from '../../components/Messages/index';
import Tooltip from '../../components/Tooltip/index';
import {
  ButtonTooltip,
  openTooltip,
} from '../../components/ButtonTooltip/index';
import Render from '../../utils/Render';
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
} from '../../utils/StaticFileExport';

const CONTACTS = {
  data: [
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: i_avatar,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
  ],
};

const contacts = new ContactsItems(CONTACTS);

Render('[data-render="contacts"]', contacts);

const MESSAGES = {
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
};

const messages = new Messages(MESSAGES);

Render('[data-render="messages"]', messages);

const TOOLTIPS = [
  {
    data: [
      {
        icon: i_profile,
        text: 'Профиль',
      },
      {
        icon: i_add,
        text: 'Добавить пользователя',
      },
      {
        icon: i_delete,
        text: 'Удалить пользователя',
      },
    ],
  },
  {
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
  },
];

const tooltips = document.querySelectorAll('[data-render="tooltip"]');

tooltips.forEach((_tooltip, index) => {
  const tmplTooltip = new Tooltip(TOOLTIPS[index]);

  Render('[data-render="tooltip"]', tmplTooltip, index);
});

const BUTTONTOOLTIP = [
  {
    data: [
      {
        className: 'burger__menu',
        link: i_burger,
        events: {
          click: openTooltip,
        },
      },
    ],
  },
  {
    data: [
      {
        className: 'msg__icon',
        link: i_includes,
        events: {
          click: openTooltip,
        },
      },
    ],
  },
];

const ButtonsTooltip = document.querySelectorAll(
  '[data-render="button_tooltip"]',
);

ButtonsTooltip.forEach((_button, index) => {
  const tmplButtonsTooltip = new ButtonTooltip(BUTTONTOOLTIP[index]);

  Render('[data-render="button_tooltip"]', tmplButtonsTooltip, index);
});
