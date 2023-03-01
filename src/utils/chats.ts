import { connectToChat, getChatUsers } from './API';
import openModal from './openModal';
import {
  setStoreChatProperty,
  getChatProperties,
  getUserId,
} from './Store/Actions';
import WS from './WS';

const openChats = (event) => {
  const id = +event.target.dataset.chatid;

  connectToChat(id)
    .then((value) => {
      const token = JSON.parse(value).token;

      setStoreChatProperty(id, token);
      getChatUsers(getChatProperties().id)
        .then((value) => {
          const data = JSON.parse(value);

          if (data.length <= 1) {
            openModal('modal2');
          }

          const user = getUserId().id;
          const websoket = new WS(id, token, user);

          const mask = document.querySelector('.chat');

          if (mask) {
            mask.classList.add('_active');
          }
        })
        .catch(({ reason }) => {
          console.error(reason);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default openChats;
