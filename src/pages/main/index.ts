/* eslint-disable max-len */
import './index.less';
import avatarImg from '../../static/assets/avatar.png';
import ContactsItems from '../../components/ContactsItems/index';
import Messages from '../../components/Messages/index';
import Render from '../../utils/Render';

const CONTACTS = {
  data: [
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
    {
      avatar: avatarImg,
      name: 'Имя',
      lastMsg: 'Последнее сообщение',
      date: '00.00',
      unreadMsg: 0,
    },
  ],
};

const contacts = new ContactsItems(CONTACTS);

Render('#contacts', contacts);

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

Render('#messages', messages);

// Переписать как будет время

const menu = document.querySelector('.burger__menu');

menu.addEventListener('click', () => {
  const tooltip = document.querySelector('.chat__menu .tooltip');

  tooltip.classList.toggle('_active');
});

const include = document.querySelector('.msg__include img');

include.addEventListener('click', () => {
  const tooltip = document.querySelector('.chat__messages .tooltip');

  tooltip.classList.toggle('_active');
});
