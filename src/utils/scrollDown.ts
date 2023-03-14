const scrollDown = () => {
  const lastMsg = document.querySelector('[data-render="messages"] > div:last-child');
  if (lastMsg) {
    lastMsg.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
};

export default scrollDown;
