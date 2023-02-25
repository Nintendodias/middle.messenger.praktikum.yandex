const closeModal = (timeout: number): void => {
  const modal = document.querySelector('.modal._active');

  if (modal) {
    setTimeout(() => {
      modal.classList.remove('_active');
    }, timeout);
  }
};

export default closeModal;
