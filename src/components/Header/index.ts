/* eslint-disable consistent-return */
import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import Connect from '../../utils/Store/Connect';
import tmpl from './Header.tmpl';
import { IState } from '../../utils/Store/store.api';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

class Header extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Connect(Header, (state: IState) => {
  const { activeChat } = state;
  const { chats } = state;

  if (activeChat) {
    const activeChatID = activeChat.id;

    if (activeChatID && chats) {
      const selectedChat = chats.find((chat) => chat.id === activeChatID);

      if (selectedChat) {
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
    }
  }
});
