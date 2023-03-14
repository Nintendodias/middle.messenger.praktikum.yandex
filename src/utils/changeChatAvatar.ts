import { sendChatAvatar } from './API';
import closeModal from './closeModal';
import {
  getChatProperties,
  updateStoreByChangeAvatarChat,
} from './Store/Actions';

export default function changeChatAvatar(event: any): void {
  event.preventDefault();

  const input = event.target.closest('form').querySelector('input');

  if (input) {
    const file = input.files[0];

    if (file) {
      const fd = new FormData();

      fd.append('avatar', file);

      const chatProp = getChatProperties();

      if (chatProp) {
        fd.append('chatId', `${chatProp.id}`);

        sendChatAvatar(fd)
          .then((value) => {
            const data = JSON.parse(value as string);

            updateStoreByChangeAvatarChat(
              `https://ya-praktikum.tech/api/v2/resources${data.avatar}`,
              data.id,
            );

            closeModal(0);
          })
          .catch(({ reason }) => {
            console.log(reason);
          });
      }
    }
  }
}
