import './index.less';
import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import Connect from '../../utils/Store/Connect';
import { IState } from '../../utils/Store/store.api';
import tmpl from './Messages.tmpl';

const template = Handlebars.compile(tmpl);

type TProps = Record<string, unknown>;

class Messages extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Connect(Messages, (state: IState) => ({ data: state.messages }));
