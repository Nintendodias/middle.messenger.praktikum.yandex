import './index.less';
import Block from '../../utils/Block';
import template from './Header.hbs';
import Connect from '../../utils/Store/Connect';

type TProps = Record<string, unknown>;

class Header extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Connect(Header, (state) => {
  const activeChatID = state.activeChat.id;
  if (activeChatID) {
    const selectedChat = state.chats.find((chat) => chat.id === activeChatID);

    return {
      data: [
        {
          url: selectedChat.avatar,
          width: '44px',
          height: '44px',
          title: selectedChat.name,
        },
      ],
    };
  }
});
