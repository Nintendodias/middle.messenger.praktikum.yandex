import './index.less';
import Block from '../../utils/Block';
import template from './ContactsItems.hbs';
import Connect from '../../utils/Store/Connect';

type TProps = Record<string, unknown>;

class ContactsItems extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Connect(ContactsItems, (state) => {
  return { data: state.chats };
});
