const openModal = (event: any): void => {
  const buttonDataset = event.target.getAttribute('data-button');
  const modal = document.querySelector(`[data-modal="${buttonDataset}"]`);

  if (modal && buttonDataset) {
    modal.classList.add('_active');

    modal?.addEventListener('click', (e: any) => {
      if (e.target && e.target.classList.contains('modal_close')) {
        modal.classList.remove('_active');
      }
    });
  }
};

export default openModal;
