import Store from './Store';
import {
  chats,
  addUserInChat,
  getUsersInChat,
  sendChatAvatar,
  user,
} from '../API';
import { i_avatar } from '../StaticFileExport';
import { openChats } from '../chats';

const store = new Store();

function addContactsItems() {
  chats()
    .then((value) => {
      const chs = JSON.parse(value);

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
            click: (event) => {
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

function getChatProperties() {
  return store.getState()?.activeChat;
}

function getContactsProperties() {
  return store.getState()?.chats;
}

function updateUserId() {
  user()
    .then((_value) => {
      const data = JSON.parse(_value);

      if (data) {
        const id = data.id;

        setUserId(id);
      }
    })
    .catch(({ reason }) => {
      console.log(reason);
    });
}

function setUserId(id) {
  store.set('userID', {
    id,
  });
}

function getUserId() {
  return store.getState()?.userID;
}

function addUsersInChat(id: number) {
  addUserInChat([getUserId().id, id], getChatProperties().id);
}

function setChatUsers() {
  getUsersInChat(getChatProperties().id);
}

function setMessages(data = []) {
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

function getMessages() {
  return store.getState()?.messages;
}

function updateMessageArray(msg) {
  const date = new Date(msg.time);

  const msgs = [
    ...getMessages(),
    {
      text: msg.content,
      date: `${date.getHours()}:${date.getMinutes()}`,
      isSelf: msg.user_id === getUserId().id ? '--self' : '',
    },
  ];

  store.set('messages', msgs);
}

function updateStoreByChangeAvatarChat(avatar: string, chatId: number) {
  const str = getContactsProperties();
  const findIndexChat = str.findIndex((chat) => chat.id === chatId);
  const backup = str[findIndexChat];

  backup.avatar = `${avatar}`;

  str[findIndexChat] = backup;

  store.set('chats', str);
}

export {
  addContactsItems,
  setStoreChatProperty,
  getChatProperties,
  setUserId,
  getUserId,
  addUsersInChat,
  setChatUsers,
  setMessages,
  updateMessageArray,
  updateStoreByChangeAvatarChat,
  getContactsProperties,
  updateUserId,
};
