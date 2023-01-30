import './index.less';
import Block from '../../utils/Block';
import template from './Avatar.hbs';

type TProps = Record<string, unknown>;

export default class Avatar extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
