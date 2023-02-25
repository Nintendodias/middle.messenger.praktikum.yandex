import './index.less';
import Block from '../../utils/Block';
import template from './ContactsItems.hbs';

type TProps = Record<string, unknown>;

export default class ContactsItems extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    console.log(this.props);
    return this.compile(template, { ...this.props });
  }
}
