/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-cycle */
import { connectToChat, getChatUsers } from './API';
import openModal from './openModal';
import { setStoreChatProperty, getChatProperties, getUserId } from './Store/Actions';
import WS from './WS';
import scrollDown from './scrollDown';

let websoket: WS;

const openChats = (event: Event) => {
  const ev = event;

  if (ev && ev.target) {
    const data: string | undefined = (ev.target as HTMLElement).dataset.chatid;

    if (data) {
      const id: number = +data;

      connectToChat(id)
        .then((value) => {
          const { token } = JSON.parse(value as string);

          setStoreChatProperty(id, token);
          const chatProp = getChatProperties();

          if (chatProp) {
            getChatUsers(chatProp.id)
              .then((value) => {
                const data = JSON.parse(value as string);

                if (data.length <= 1) {
                  openModal('modal2');
                }

                const user = getUserId().id;
                websoket = new WS(id, token, user);

                const mask = document.querySelector('.chat');

                if (mask) {
                  mask.classList.add('_active');
                }

                setTimeout(() => {
                  scrollDown();
                }, 100);
              })
              .catch(({ reason }) => {
                console.error(reason);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};

const sendMessage = (event: Event) => {
  const ev = event;
  if (ev && ev.target) {
    const form = (ev.target as HTMLElement).closest('form');
    const textarea = form?.querySelector('textarea');

    if (textarea) {
      if (textarea.value === '') {
        return;
      }

      websoket.sendMessage(textarea.value);
      textarea.value = '';

      setTimeout(() => {
        scrollDown();
      }, 100);
    }
  }
};

export { openChats, sendMessage };
