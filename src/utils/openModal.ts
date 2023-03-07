const openModal = (target: string): void => {
  const modal = document.querySelector(`[data-render="${target}"]`);

  if (modal) {
    modal.classList.add('_active');
  }
};

export default openModal;
