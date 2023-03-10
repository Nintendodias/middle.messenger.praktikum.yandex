/* eslint-disable import/no-cycle */
import Store from './Store';
import { chats, addUserInChat, user } from '../API';
import { i_avatar } from '../StaticFileExport';
import { openChats } from '../chats';
import { IActiveChat, IMessages, IChats } from './store.api';

interface IMsg {
  content: string;
  id: number;
  time: string;
  type: string;
  user_id: number;
}

const store = new Store();

function addContactsItems() {
  chats()
    .then((value) => {
      const chs: Array<any> = JSON.parse(value as string);

      const result = chs.map((chat) => {
        const avatar = chat.avatar
          ? `https://ya-praktikum.tech/api/v2/resources/${chat.avatar}`
          : i_avatar;
        const lastMsg = chat.last_message ? chat.last_message.content : '';
        const date = chat.last_message
          ? new Date(Date.parse(chat.last_message.time))
          : undefined;
        const dateStr = date ? `${date.getHours()}:${date.getMinutes()}` : '';

        return {
          id: chat.id,
          name: chat.title,
          avatar,
          date: dateStr,
          unreadMsg: chat.unread_count,
          lastMsg,
          isUnreadCount: chat.unread_count === 0 ? 'none' : 'block',
          events: {
            click: (event: MessageEvent) => {
              openChats(event);
            },
          },
        };
      });

      store.set('chats', result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function setStoreChatProperty(id: number | null = null, token: string = '') {
  store.set('activeChat', {
    id,
    token,
  });
}

function getChatProperties(): IActiveChat | undefined {
  return store.getState().activeChat;
}

function getContactsProperties(): Array<IChats> | undefined {
  return store.getState().chats;
}

function setUserId(id: number) {
  store.set('userID', {
    id,
  });
}

function updateUserId() {
  user()
    .then((_value) => {
      const data = JSON.parse(_value as string);

      if (data) {
        const { id } = data;

        setUserId(id);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function getUserId() {
  return store.getState()?.userID;
}

function addUsersInChat(id: number) {
  const chatProperty = getChatProperties();

  if (chatProperty) {
    addUserInChat([getUserId().id, id], chatProperty.id);
  }
}

function setMessages(data: Array<any> | [] = []) {
  const msgs =
    data.length !== 0
      ? data.map((msg) => {
        const date = new Date(msg.time);
        return {
          text: msg.content,
          date: `${date.getHours()}:${date.getMinutes()}`,
          isSelf: msg.user_id === getUserId().id ? '--self' : '',
        };
      })
      : [];

  store.set('messages', msgs);
}

function getMessages(): Array<IMessages> | undefined {
  return store.getState().messages;
}

function updateMessageArray(msg: IMsg) {
  const date = new Date(msg.time);
  const msgArray = getMessages();

  if (msgArray) {
    const msgs = [
      ...msgArray,
      {
        text: msg.content,
        date: `${date.getHours()}:${date.getMinutes()}`,
        isSelf: msg.user_id === getUserId().id ? '--self' : '',
      },
    ];

    store.set('messages', msgs);
  }
}

function updateStoreByChangeAvatarChat(avatar: string, chatId: number) {
  const str = getContactsProperties();

  if (str) {
    const findIndexChat = str.findIndex((chat) => chat.id === chatId);
    const backup = str[findIndexChat];

    backup.avatar = `${avatar}`;

    str[findIndexChat] = backup;

    store.set('chats', str);
  }
}

export {
  addContactsItems,
  setStoreChatProperty,
  getChatProperties,
  setUserId,
  getUserId,
  addUsersInChat,
  setMessages,
  updateMessageArray,
  updateStoreByChangeAvatarChat,
  getContactsProperties,
  updateUserId,
};
