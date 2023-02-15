import './index.less';
import Block from '../../utils/Block';
import template from './Messages.hbs';

type TProps = Record<string, unknown>;

export default class Messages extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
