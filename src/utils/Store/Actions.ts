import Store from './Store';
import { chats } from '../API';
import { i_avatar } from '../StaticFileExport';

const store = new Store();

function addContactsItems() {
  chats()
    .then((value) => {
      const chs = JSON.parse(value);

      const result = chs.map((chat) => {
        const avatar = chat.avatar ? chat.avatar : i_avatar;
        const lastMsg = chat.last_message ? chat.last_message.content : '';
        const date = chat.last_message ? chat.last_message.time : '';

        // let date = new Date( Date.parse("2020-01-02T14:22:22.000Z") )
        return {
          id: chat.id,
          name: chat.title,
          avatar,
          date,
          unreadMsg: chat.unread_count,
          lastMsg,
          isUnreadCount: chat.unread_count === 0 ? 'none' : 'block',
        };
      });

      store.set('chats', result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default addContactsItems;
