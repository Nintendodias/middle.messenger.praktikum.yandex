import { sendAvatar } from './API';
import closeModal from './closeModal';

export default function changeAvatar(event: any): void {
  event.preventDefault();

  const input = event.target.closest('form').querySelector('input');

  if (input) {
    const file = input.files[0];

    if (file) {
      const fd = new FormData();

      fd.append('avatar', file);

      sendAvatar(fd).then((value) => {
        const data = JSON.parse(value);
        const place = document.body.querySelector('.profile_avatar img');

        if (place) {
          place.src = `https://ya-praktikum.tech/api/v2/resources${data.avatar}`;
          closeModal(0);
        }
      });
    }
  }
}
